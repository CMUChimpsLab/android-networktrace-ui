import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { DataService } from '../data.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { BuildRowGroups, GetMaxCountObject, GetTaxonomyInfo, GetPurposeInfo, SortRowGroups } from '../builder';

enum FetchType {
    PLAIN_SEARCH,
    WHO,
    WHERE,
    COMPOSITE_SEARCH
}

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

    items = [1, 2, 3, 4, 5];
    itemsFive = Array(5).fill(0);

    rowGroups = [];
    showGroupControl = false;
    showTypeDetails = false;
    showExpander = false;
    showPaginator = true;
    currentTypeDetails = '';
    totalSize = 500;
    entityLabel = 'items';
    length = 100;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];
    pageEvent: PageEvent | undefined;
    columnOptions = [
        { id: 'who', name: 'Who', show: true },
        { id: 'what', name: 'What', show: true },
        { id: 'where', name: 'Where', show: true },
        { id: 'why', name: 'Why', show: true }
    ];
    activeSorterCol = 'what';
    groupedByColumn = 'Who';
    paramId = null;
    appDetails: any = null;
    hostDetails: any = null;
    activeSorterDirection = 'ASC';
    statistics = [];
    showPurposeDistrbution = false;
    showCategoryDistribution = false;
    firstCallMade = false;
    skip = 0;
    limit = 10;
    fetchCall = null;
    useSkipAndLimit = false;
    fetchCallType: FetchType | any = null;
    currentQueryParams: any = null;
    queryParamsView: any[] = [];
    constructor(
        private appService: AppService,
        private dataService: DataService,
        private activatedRouter: ActivatedRoute
    ) { }

    ngOnInit() {
        this.appService.showHeader();
        combineLatest(this.activatedRouter.params, this.activatedRouter.queryParams)
            .pipe(map(results => ({ params: results[0], queryParams: results[1] })))
            .subscribe(results => {
                this.reset();
                if (_.isEmpty(results.params) && !_.isEmpty(results.queryParams)) {
                    this.currentQueryParams = this.fillParams(results.queryParams);
                    this.fetchCallType = FetchType.COMPOSITE_SEARCH;
                    this.loadNextPage(null);
                    this.buildSearchParamsViewer(this.currentQueryParams);
                    this.currentTypeDetails = 'advanced-search';
                } else {
                    this.currentTypeDetails = 'plain-search';
                    const params = results.params;
                    this.showTypeDetails = false;
                    if (params && params['type']) {
                        this.showTypeDetails = true;
                        this.currentTypeDetails = params['type'];
                        this.paramId = params['id'];
                        if (this.currentTypeDetails === 'who') {
                            this.activeSorterCol = 'what';
                            this.columnOptions.forEach(col => col.show = true);
                            const column = this.columnOptions.find(col => col.id === 'who');
                            if (column) {
                                column.show = false;
                            }
                        } else if (this.currentTypeDetails === 'where') {
                            this.activeSorterCol = 'who';
                            this.columnOptions.forEach(col => col.show = true);
                            const column = this.columnOptions.find(col => col.id === 'where');
                            if (column) {
                                column.show = false;
                            }
                        }
                    }
                    this.fillRows();
                }
                this.buildStats();
            });
    }
    reset() {
        this.appService.showLoader();
        this.showPurposeDistrbution = false;
        this.showCategoryDistribution = false;
        this.skip = 0;
        this.limit = 10;
        this.currentQueryParams = null;
        this.useSkipAndLimit = false;
        this.fetchCallType = null;
        this.firstCallMade = false;
        this.queryParamsView = [];
        this.statistics = [];
    }
    fillParams(queryParams: any) {
        const params: any = {};
        const fields = ['hosts', 'categories', 'types', 'purposes'];
        fields.forEach(field => {
            if (queryParams[field]) {
                params[field] = [];
                if (Array.isArray(queryParams[field]) === false) {
                    params[field].push(queryParams[field]);
                } else { params[field] = queryParams[field]; }
            }
        });
        return params;
    }
    fillRows() {
        if (this.currentTypeDetails === 'plain-search') {
            this.showExpander = true;
            this.showPaginator = true;
            this.entityLabel = 'apps';
            this.dataService.getTotalNoOfApps().subscribe((data: any) => this.totalSize = data);
            this.fetchCallType = FetchType.PLAIN_SEARCH;
        } else {
            if (this.currentTypeDetails === 'who') {
                this.showExpander = false;
                this.showPaginator = false;
                this.dataService.getAppDetails(this.paramId).subscribe(data => {
                    this.appDetails = data;
                    if (!this.appDetails.title) {
                        this.appDetails.title = this.appDetails.app;
                    }
                    if (!this.appDetails.icon) {
                        this.appDetails.icon = 'assets/playstore_256.png';
                    }
                });
                this.fetchCallType = FetchType.WHO;
            } else if (this.currentTypeDetails === 'where') {
                this.showExpander = true;
                this.showPaginator = true;
                this.dataService.getHostDetails(this.paramId).subscribe(data => {
                    this.hostDetails = data;
                    if (!this.hostDetails.icon) {
                        this.hostDetails.icon = 'assets/worldwide_256.png';
                    }
                });
                this.fetchCallType = FetchType.WHERE;
            }
        }
        this.loadNextPage(null);
    }
    onColumnClicked(column: any) {
        if (column.id === this.activeSorterCol) {
            this.activeSorterDirection = this.activeSorterDirection === 'ASC' ? 'DESC' : 'ASC';
        } else {
            this.activeSorterCol = column.id;
        }
        this.rowGroups = SortRowGroups(this.rowGroups, this.activeSorterCol, this.activeSorterDirection);
    }
    openDistributionChartForBar() {
        this.buildCategoryWiseDistribution();
    }
    openDistributionChartForPie() {
        this.buildPurposeDistribution();
    }
    onPageEvent(event: PageEvent) {
        this.loadNextPage(event);
    }
    loadNextPage(event: PageEvent | null) {
        if (!this.firstCallMade) {
            this.firstCallMade = true;
        } else {
            this.skip = event ? event.pageIndex * (event.pageSize) : 0;
            this.limit = event ? event.pageSize : 10;
        }
        this.appService.showLoader();
        switch (this.fetchCallType) {
            case FetchType.PLAIN_SEARCH: {
                this.dataService.getRelationships(this.skip, this.limit).subscribe((data: any) => this.buildRows(data));
                break;
            }
            case FetchType.WHO: {
                // tslint:disable-next-line:max-line-length
                this.dataService.getAppRelationships(this.paramId, this.skip, this.limit).subscribe((data: any) => this.buildRows(data, true));
                break;
            }
            case FetchType.WHERE: {
                // tslint:disable-next-line:max-line-length
                this.dataService.getHostRelationships(this.paramId, this.skip, this.limit).subscribe((data: any) => this.buildRows(data, true));
                break;
            }
            case FetchType.COMPOSITE_SEARCH: {
                // tslint:disable-next-line:max-line-length
                this.dataService.getBaseRelationships(this.currentQueryParams, this.skip, this.limit).subscribe((data: any) => {
                    this.buildRows(data);
                });
                break;
            }
        }
    }
    buildRows(data: Array<any>, forceExpand = true) {
        const groupData = BuildRowGroups(data, forceExpand);
        this.rowGroups = SortRowGroups(groupData.rowGroups, this.activeSorterCol, this.activeSorterDirection);
        if (this.currentTypeDetails === 'who') {
            this.showPurposeDistrbution = true;
        }
        if (this.currentTypeDetails === 'where') {
            this.showPurposeDistrbution = true;
            this.showCategoryDistribution = true;
        }
        this.appService.hideLoader();
    }
    buildPurposeDistribution() {
        const params: any = {};
        if (this.currentTypeDetails === 'who') {
            params['apps'] = [this.paramId];
        }
        if (this.currentTypeDetails === 'where') {
            params['hosts'] = [this.paramId];
        }
        this.appService.showLoader();
        this.dataService.getPurposeDistribution(params).subscribe((data: any) => {
            this.appService.hideLoader();
            const rows: any[] = [];
            if (data && data.length > 0) {
                data.forEach((item: any) => {
                    const purpose = GetPurposeInfo(item['_id'].type, item['_id'].purpose);
                    if (purpose) {
                        rows.push([purpose.shortLabel, item.count]);
                    }
                });
            }
            this.appService.showPieChartModalFilter(rows);
        }, () => {
            this.appService.hideLoader();
        });
    }
    buildCategoryWiseDistribution() {
        const params: any = {};
        if (this.currentTypeDetails === 'where') {
            params['hosts'] = [this.paramId];
            this.appService.showLoader();
            this.dataService.getCategoryWiseDistribution(params).subscribe((data: any) => {
                this.appService.hideLoader();
                const rows: any = [];
                if (data && data.length > 0) {
                    data.forEach((item: any) => {
                        if (item['_id'] && item['_id'].genre && item['_id'].genre.length > 0) {
                            rows.push([item['_id'].genre[0], item.count]);
                        }
                    });
                }
                this.appService.showChartModalFilter(rows);
            }, () => {
                this.appService.hideLoader();
            });
        }
    }
    buildSearchParamsViewer(params: any) {
        if (params.hosts) {
            this.queryParamsView.push({
                id: 'hosts',
                label: 'Data being collected by',
                items: params.hosts
            });
        }
        if (params.types) {
            this.queryParamsView.push({
                id: 'types',
                label: 'Data of type ',
                items: params.types.map(t => GetTaxonomyInfo(t))
            });
        }
        if (params.purposes) {
            this.queryParamsView.push({
                id: 'purposes',
                label: 'Data being sent for ',
                items: params.purposes
            });
        }
        if (params.categories) {
            this.queryParamsView.push({
                id: 'categories',
                label: 'Data being sent by app of category ',
                items: params.categories
            });
        }
    }
    removeSearchParam(groupId, item) {
        return;
    }
    buildStats() {
        let params = {};
        let fireCall = false;
        switch (this.fetchCallType) {
            case FetchType.PLAIN_SEARCH: {
                break;
            }
            case FetchType.WHO: {
                params['apps'] = [this.paramId];
                fireCall = true;
                break;
            }
            case FetchType.WHERE: {
                params['hosts'] = [this.paramId];
                fireCall = true;
                break;
            }
            case FetchType.COMPOSITE_SEARCH: {
                fireCall = _.isEmpty(this.currentQueryParams.categories);
                params = this.currentQueryParams;
                break;
            }
        }
        if (fireCall) {
            this.dataService.getStats(params).subscribe((data: any) => {
                if (!_.isEmpty(data)) {
                    data = data[0];
                    for (const prop in data) {
                        if (data[prop]) {
                            const value = data[prop];
                            switch (prop) {
                                case 'POPULAR_PURPOSE': {
                                    const purposeData: any = value['_id'];
                                    const purposeInfo = GetPurposeInfo(purposeData.type, purposeData.purpose);
                                    this.statistics.push({
                                        key: 'The most popular reason for sending data ', value: purposeInfo.shortLabel
                                    });
                                    break;
                                }
                                case 'POPULAR_TYPE': {
                                    const typeData: any = value['_id'];
                                    const typeInfo = GetTaxonomyInfo(typeData);
                                    this.statistics.push({
                                        key: 'The type of data being sent most frequently', value: typeInfo.label
                                    });
                                    break;
                                }
                                case 'POPULAR_HOST': {
                                    const hostData: any = value['_id'];
                                    this.statistics.push({
                                        key: 'The most frequent destination for data', value: hostData.host
                                    });
                                    break;
                                }
                                case 'POPULAR_APP': {
                                    const appData: any = value['_id'];
                                    this.statistics.push({
                                        key: 'The most recurring app sending app', value: appData.title ? appData.title : appData.app
                                    });
                                    break;
                                }
                            }
                        }
                    }
                }
                console.log(this.statistics);
            });
        }
    }
}

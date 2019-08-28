"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const app_service_1 = require("../app.service");
const router_1 = require("@angular/router");
const _ = __importStar(require("lodash"));
const data_service_1 = require("../data.service");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const builder_1 = require("../builder");
var FetchType;
(function (FetchType) {
    FetchType[FetchType["PLAIN_SEARCH"] = 0] = "PLAIN_SEARCH";
    FetchType[FetchType["WHO"] = 1] = "WHO";
    FetchType[FetchType["WHERE"] = 2] = "WHERE";
    FetchType[FetchType["COMPOSITE_SEARCH"] = 3] = "COMPOSITE_SEARCH";
})(FetchType || (FetchType = {}));
let ResultsComponent = class ResultsComponent {
    constructor(appService, dataService, activatedRouter) {
        this.appService = appService;
        this.dataService = dataService;
        this.activatedRouter = activatedRouter;
        this.items = [1, 2, 3, 4, 5];
        this.itemsFive = Array(5).fill(0);
        this.rowGroups = [];
        this.showGroupControl = false;
        this.showTypeDetails = false;
        this.showExpander = false;
        this.showPaginator = true;
        this.currentTypeDetails = '';
        this.totalSize = 500;
        this.entityLabel = 'items';
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.columnOptions = [
            { id: 'who', name: 'Who', show: true },
            { id: 'what', name: 'What', show: true },
            { id: 'where', name: 'Where', show: true },
            { id: 'why', name: 'Why', show: true }
        ];
        this.activeSorterCol = 'what';
        this.groupedByColumn = 'Who';
        this.paramId = null;
        this.appDetails = null;
        this.hostDetails = null;
        this.activeSorterDirection = 'ASC';
        this.statistics = [];
        this.showPurposeDistrbution = false;
        this.showCategoryDistribution = false;
        this.firstCallMade = false;
        this.skip = 0;
        this.limit = 10;
        this.fetchCall = null;
        this.useSkipAndLimit = false;
        this.fetchCallType = null;
        this.currentQueryParams = null;
        this.queryParamsView = [];
    }
    ngOnInit() {
        this.appService.showHeader();
        rxjs_1.combineLatest(this.activatedRouter.params, this.activatedRouter.queryParams)
            .pipe(operators_1.map(results => ({ params: results[0], queryParams: results[1] })))
            .subscribe(results => {
            this.reset();
            if (_.isEmpty(results.params) && !_.isEmpty(results.queryParams)) {
                this.currentQueryParams = this.fillParams(results.queryParams);
                this.fetchCallType = FetchType.COMPOSITE_SEARCH;
                this.loadNextPage(null);
                this.buildSearchParamsViewer(this.currentQueryParams);
                this.currentTypeDetails = 'advanced-search';
            }
            else {
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
                    }
                    else if (this.currentTypeDetails === 'where') {
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
    fillParams(queryParams) {
        const params = {};
        const fields = ['hosts', 'categories', 'types', 'purposes'];
        fields.forEach(field => {
            if (queryParams[field]) {
                params[field] = [];
                if (Array.isArray(queryParams[field]) === false) {
                    params[field].push(queryParams[field]);
                }
                else {
                    params[field] = queryParams[field];
                }
            }
        });
        return params;
    }
    fillRows() {
        if (this.currentTypeDetails === 'plain-search') {
            this.showExpander = true;
            this.showPaginator = true;
            this.entityLabel = 'apps';
            this.dataService.getTotalNoOfApps().subscribe((data) => this.totalSize = data);
            this.fetchCallType = FetchType.PLAIN_SEARCH;
        }
        else {
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
            }
            else if (this.currentTypeDetails === 'where') {
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
    onColumnClicked(column) {
        if (column.id === this.activeSorterCol) {
            this.activeSorterDirection = this.activeSorterDirection === 'ASC' ? 'DESC' : 'ASC';
        }
        else {
            this.activeSorterCol = column.id;
        }
        this.rowGroups = builder_1.SortRowGroups(this.rowGroups, this.activeSorterCol, this.activeSorterDirection);
    }
    openDistributionChartForBar() {
        this.buildCategoryWiseDistribution();
    }
    openDistributionChartForPie() {
        this.buildPurposeDistribution();
    }
    onPageEvent(event) {
        this.loadNextPage(event);
    }
    loadNextPage(event) {
        if (!this.firstCallMade) {
            this.firstCallMade = true;
        }
        else {
            this.skip = event ? event.pageIndex * (event.pageSize) : 0;
            this.limit = event ? event.pageSize : 10;
        }
        this.appService.showLoader();
        switch (this.fetchCallType) {
            case FetchType.PLAIN_SEARCH: {
                this.dataService.getRelationships(this.skip, this.limit).subscribe((data) => this.buildRows(data));
                break;
            }
            case FetchType.WHO: {
                // tslint:disable-next-line:max-line-length
                this.dataService.getAppRelationships(this.paramId, this.skip, this.limit).subscribe((data) => this.buildRows(data, true));
                break;
            }
            case FetchType.WHERE: {
                // tslint:disable-next-line:max-line-length
                this.dataService.getHostRelationships(this.paramId, this.skip, this.limit).subscribe((data) => this.buildRows(data, true));
                break;
            }
            case FetchType.COMPOSITE_SEARCH: {
                // tslint:disable-next-line:max-line-length
                this.dataService.getBaseRelationships(this.currentQueryParams, this.skip, this.limit).subscribe((data) => {
                    this.buildRows(data);
                });
                break;
            }
        }
    }
    buildRows(data, forceExpand = true) {
        const groupData = builder_1.BuildRowGroups(data, forceExpand);
        this.rowGroups = builder_1.SortRowGroups(groupData.rowGroups, this.activeSorterCol, this.activeSorterDirection);
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
        const params = {};
        if (this.currentTypeDetails === 'who') {
            params['apps'] = [this.paramId];
        }
        if (this.currentTypeDetails === 'where') {
            params['hosts'] = [this.paramId];
        }
        this.appService.showLoader();
        this.dataService.getPurposeDistribution(params).subscribe((data) => {
            this.appService.hideLoader();
            const rows = [];
            if (data && data.length > 0) {
                data.forEach((item) => {
                    const purpose = builder_1.GetPurposeInfo(item['_id'].type, item['_id'].purpose);
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
        const params = {};
        if (this.currentTypeDetails === 'where') {
            params['hosts'] = [this.paramId];
            this.appService.showLoader();
            this.dataService.getCategoryWiseDistribution(params).subscribe((data) => {
                this.appService.hideLoader();
                const rows = [];
                if (data && data.length > 0) {
                    data.forEach((item) => {
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
    buildSearchParamsViewer(params) {
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
                items: params.types.map(t => builder_1.GetTaxonomyInfo(t))
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
            this.dataService.getStats(params).subscribe((data) => {
                if (!_.isEmpty(data)) {
                    data = data[0];
                    for (const prop in data) {
                        if (data[prop]) {
                            const value = data[prop];
                            switch (prop) {
                                case 'POPULAR_PURPOSE': {
                                    const purposeData = value['_id'];
                                    const purposeInfo = builder_1.GetPurposeInfo(purposeData.type, purposeData.purpose);
                                    this.statistics.push({
                                        key: 'The most popular reason for sending data ', value: purposeInfo.shortLabel
                                    });
                                    break;
                                }
                                case 'POPULAR_TYPE': {
                                    const typeData = value['_id'];
                                    const typeInfo = builder_1.GetTaxonomyInfo(typeData);
                                    this.statistics.push({
                                        key: 'The type of data being sent most frequently', value: typeInfo.label
                                    });
                                    break;
                                }
                                case 'POPULAR_HOST': {
                                    const hostData = value['_id'];
                                    this.statistics.push({
                                        key: 'The most frequent destination for data', value: hostData.host
                                    });
                                    break;
                                }
                                case 'POPULAR_APP': {
                                    const appData = value['_id'];
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
};
ResultsComponent = __decorate([
    core_1.Component({
        selector: 'app-results',
        templateUrl: './results.component.html',
        styleUrls: ['./results.component.scss']
    }),
    __metadata("design:paramtypes", [app_service_1.AppService,
        data_service_1.DataService,
        router_1.ActivatedRoute])
], ResultsComponent);
exports.ResultsComponent = ResultsComponent;

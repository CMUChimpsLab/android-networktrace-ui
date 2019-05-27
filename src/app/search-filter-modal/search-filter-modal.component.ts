import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { DataService } from '../data.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { GetMappedTaxonomies, GetMappedTaxonomyPurposes } from '../builder';

@Component({
    selector: 'app-search-filter-modal',
    templateUrl: './search-filter-modal.component.html',
    styleUrls: ['./search-filter-modal.component.scss']
})
export class SearchFilterModalComponent implements OnInit {

    modalOpened = false;
    categories = [];
    dataTypes = [];
    dataPurposes = [];
    currentOption = '1';
    activeParams = [];
    activeParamsString = '';
    constructor(
        private appService: AppService,
        private dataService: DataService,
        private router: Router
    ) { }

    ngOnInit() {
        this.dataService.getSearchParams().subscribe((data: any) => {
            if (!_.isEmpty(data.categories)) {
                this.categories = (data.categories as Array<any>)
                    .sort((a, b) => a.localeCompare(b))
                    .map(item => {
                        return { key: item, value: false };
                    });
            }
            if (!_.isEmpty(data.types)) {
                this.dataTypes = GetMappedTaxonomies(data.types.map(item => item._id));
            }
            if (!_.isEmpty(data.types) && !_.isEmpty(data.purposes)) {
                this.dataPurposes = GetMappedTaxonomyPurposes(this.dataTypes, data.purposes.map(item => item._id));
            }
        });
        this.appService.advancedFilterShown$.subscribe((data: boolean) => {
            setTimeout(() => {
                // tslint:disable-next-line:no-unused-expression
                data && this.openModal();
                // tslint:disable-next-line:no-unused-expression
                !data && this.closeModal();
            });
        });
    }

    openModal() {
        document.body.classList.add('overflow-hidden');
        this.modalOpened = true;
        this.clearAllSelections();
    }
    clearAllSelections() {
        this.categories.forEach(x => x.value = false);
        this.dataPurposes.forEach(x => x.value = false);
        this.dataTypes.forEach(x => x.value = false);
    }
    closeModal() {
        document.body.classList.remove('overflow-hidden');
        this.modalOpened = false;
    }
    search() {
        const categories = this.categories.filter(x => x.value).map(x => x.key);
        const types = this.dataTypes.filter(x => x.value).map(x => x.dualKey);
        const purposes = this.dataPurposes.filter(x => x.value).map(x => x.key);
        if (categories.length > 0 || types.length > 0 || purposes.length > 0) {
            const params = {};
            if (categories.length > 0) { params['categories'] = categories; }
            if (types.length > 0) { params['types'] = types; }
            if (purposes.length > 0) { params['purposes'] = purposes; }
            this.router.navigate(['/results'], {
                queryParams: params
            });
            this.closeModal();
        }
    }
    onQueryChange() {
        this.activeParams = [];
        const categories = this.categories.filter(x => x.value);
        const types = this.dataTypes.filter(x => x.value);
        const purposes = this.dataPurposes.filter(x => x.value);
        if (categories.length > 0) { this.activeParams.push({ id: 'categories', items: categories }); }
        if (types.length > 0) { this.activeParams.push({ id: 'types', items: types }); }
        if (purposes.length > 0) { this.activeParams.push({ id: 'purposes', items: purposes }); }
    }
    remove(group, item) {
        let target = null;
        switch (group) {
            case 'categories': {
                target = this.categories.find(x => x.key === item.key);
                break;
            }
            case 'types': {
                target = this.dataTypes.find(x => x.key === item.key);
                break;
            }
            case 'purposes': {
                target = this.dataPurposes.find(x => x.key === item.key);
                break;
            }
        }
        if (target) {
            target.value = false;
            this.onQueryChange();
        }
    }
}

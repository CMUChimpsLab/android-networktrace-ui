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
const data_service_1 = require("../data.service");
const _ = __importStar(require("lodash"));
const router_1 = require("@angular/router");
const builder_1 = require("../builder");
let SearchFilterModalComponent = class SearchFilterModalComponent {
    constructor(appService, dataService, router) {
        this.appService = appService;
        this.dataService = dataService;
        this.router = router;
        this.modalOpened = false;
        this.categories = [];
        this.dataTypes = [];
        this.dataPurposes = [];
        this.currentOption = '1';
        this.activeParams = [];
        this.activeParamsString = '';
    }
    ngOnInit() {
        this.dataService.getSearchParams().subscribe((data) => {
            if (!_.isEmpty(data.categories)) {
                this.categories = data.categories
                    .sort((a, b) => a.localeCompare(b))
                    .map(item => {
                    return { key: item, value: false };
                });
            }
            if (!_.isEmpty(data.types)) {
                this.dataTypes = builder_1.GetMappedTaxonomies(data.types.map(item => item._id));
            }
            if (!_.isEmpty(data.types) && !_.isEmpty(data.purposes)) {
                this.dataPurposes = builder_1.GetMappedTaxonomyPurposes(this.dataTypes, data.purposes.map(item => item._id));
            }
        });
        this.appService.advancedFilterShown$.subscribe((data) => {
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
            if (categories.length > 0) {
                params['categories'] = categories;
            }
            if (types.length > 0) {
                params['types'] = types;
            }
            if (purposes.length > 0) {
                params['purposes'] = purposes;
            }
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
        if (categories.length > 0) {
            this.activeParams.push({ id: 'categories', items: categories });
        }
        if (types.length > 0) {
            this.activeParams.push({ id: 'types', items: types });
        }
        if (purposes.length > 0) {
            this.activeParams.push({ id: 'purposes', items: purposes });
        }
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
};
SearchFilterModalComponent = __decorate([
    core_1.Component({
        selector: 'app-search-filter-modal',
        templateUrl: './search-filter-modal.component.html',
        styleUrls: ['./search-filter-modal.component.scss']
    }),
    __metadata("design:paramtypes", [app_service_1.AppService,
        data_service_1.DataService,
        router_1.Router])
], SearchFilterModalComponent);
exports.SearchFilterModalComponent = SearchFilterModalComponent;

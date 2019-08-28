"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
let AppService = class AppService {
    constructor() {
        this.headerShown = new rxjs_1.Subject();
        this.headerShown$ = this.headerShown.asObservable();
        this.advancedFilterShown = new rxjs_1.Subject();
        this.advancedFilterShown$ = this.advancedFilterShown.asObservable();
        this.barChartModalShown = new rxjs_1.Subject();
        this.barChartModalData = null;
        this.barChartModalShown$ = this.barChartModalShown.asObservable();
        this.pieChartModalShown = new rxjs_1.Subject();
        this.pieChartModalData = null;
        this.pieChartModalShown$ = this.pieChartModalShown.asObservable();
        this.loaderShown = new rxjs_1.Subject();
        this.loaderShown$ = this.loaderShown.asObservable();
        this.paginatorLabel = new rxjs_1.Subject();
        this.paginatorLabel$ = this.paginatorLabel.asObservable();
    }
    showHeader() {
        this.headerShown.next(true);
    }
    hideHeader() {
        this.headerShown.next(false);
    }
    showAdvancedFilter() {
        this.advancedFilterShown.next(true);
    }
    hideAdvancedFilter() {
        this.advancedFilterShown.next(false);
    }
    showChartModalFilter(data) {
        this.barChartModalData = data;
        this.barChartModalShown.next(true);
    }
    hideChartModalFilter() {
        this.barChartModalData = null;
        this.barChartModalShown.next(false);
    }
    showPieChartModalFilter(data) {
        this.pieChartModalData = data;
        this.pieChartModalShown.next(true);
    }
    hidePieChartModalFilter() {
        this.pieChartModalShown.next(false);
    }
    showLoader() {
        this.loaderShown.next(true);
    }
    hideLoader() {
        this.loaderShown.next(false);
    }
};
AppService = __decorate([
    core_1.Injectable()
], AppService);
exports.AppService = AppService;

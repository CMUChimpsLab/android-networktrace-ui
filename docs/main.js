(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src-ui/$$_lazy_route_resource lazy recursive":
/*!*************************************************************!*\
  !*** ./src-ui/$$_lazy_route_resource lazy namespace object ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src-ui/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src-ui/app/app.component.html":
/*!***************************************!*\
  !*** ./src-ui/app/app.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n    <div class=\"loader\" *ngIf=\"loaderShown\">\n        <div class=\"overlay\">\n            <mat-spinner></mat-spinner>\n        </div>\n    </div>\n    <div class=\"app-header-wrapper\" *ngIf=\"showHeader\">\n        <app-header></app-header>\n    </div>\n    <div class=\"app-content-wrapper\">\n        <router-outlet></router-outlet>\n    </div>\n    <app-search-filter-modal></app-search-filter-modal>\n    <app-distribution-bar-chart></app-distribution-bar-chart>\n    <app-distribution-pie-chart></app-distribution-pie-chart>\n</div>"

/***/ }),

/***/ "./src-ui/app/app.component.scss":
/*!***************************************!*\
  !*** ./src-ui/app/app.component.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src-ui/app/app.component.ts":
/*!*************************************!*\
  !*** ./src-ui/app/app.component.ts ***!
  \*************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src-ui/app/app.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src-ui/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(appService, dataService) {
        this.appService = appService;
        this.dataService = dataService;
        this.showHeader = true;
        this.title = 'privacy-analytics-v2';
        this.loaderShown = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.headerShown$.subscribe(function (data) {
            setTimeout(function () {
                // this.showHeader = data;
            });
        });
        this.appService.loaderShown$.subscribe(function (data) {
            window.requestAnimationFrame(function () {
                _this.loaderShown = data;
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src-ui/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src-ui/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src-ui/app/app.module.ts":
/*!**********************************!*\
  !*** ./src-ui/app/app.module.ts ***!
  \**********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src-ui/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src-ui/app/home/home.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.routing */ "./src-ui/app/app.routing.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./results/results.component */ "./src-ui/app/results/results.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/header.component */ "./src-ui/app/header/header.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.service */ "./src-ui/app/app.service.ts");
/* harmony import */ var _search_filter_modal_search_filter_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./search-filter-modal/search-filter-modal.component */ "./src-ui/app/search-filter-modal/search-filter-modal.component.ts");
/* harmony import */ var _distribution_bar_chart_distribution_bar_chart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./distribution-bar-chart/distribution-bar-chart.component */ "./src-ui/app/distribution-bar-chart/distribution-bar-chart.component.ts");
/* harmony import */ var _distribution_pie_chart_distribution_pie_chart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./distribution-pie-chart/distribution-pie-chart.component */ "./src-ui/app/distribution-pie-chart/distribution-pie-chart.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./data.service */ "./src-ui/app/data.service.ts");
/* harmony import */ var _paginator_labels_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./paginator-labels.service */ "./src-ui/app/paginator-labels.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_19__["ResultsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                _search_filter_modal_search_filter_modal_component__WEBPACK_IMPORTED_MODULE_22__["SearchFilterModalComponent"],
                _distribution_bar_chart_distribution_bar_chart_component__WEBPACK_IMPORTED_MODULE_23__["DistributionBarChartComponent"],
                _distribution_pie_chart_distribution_pie_chart_component__WEBPACK_IMPORTED_MODULE_24__["DistributionPieChartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_5__["HighchartsChartModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"]
            ],
            providers: [
                _app_service__WEBPACK_IMPORTED_MODULE_21__["AppService"],
                _data_service__WEBPACK_IMPORTED_MODULE_25__["DataService"],
                {
                    provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorIntl"], useClass: _paginator_labels_service__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorIntlCro"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src-ui/app/app.routing.ts":
/*!***********************************!*\
  !*** ./src-ui/app/app.routing.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src-ui/app/home/home.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./results/results.component */ "./src-ui/app/results/results.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'results', component: _results_results_component__WEBPACK_IMPORTED_MODULE_3__["ResultsComponent"] },
    { path: 'results/:type/:id', component: _results_results_component__WEBPACK_IMPORTED_MODULE_3__["ResultsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src-ui/app/app.service.ts":
/*!***********************************!*\
  !*** ./src-ui/app/app.service.ts ***!
  \***********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppService = /** @class */ (function () {
    function AppService() {
        this.headerShown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.headerShown$ = this.headerShown.asObservable();
        this.advancedFilterShown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.advancedFilterShown$ = this.advancedFilterShown.asObservable();
        this.barChartModalShown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.barChartModalData = null;
        this.barChartModalShown$ = this.barChartModalShown.asObservable();
        this.pieChartModalShown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pieChartModalData = null;
        this.pieChartModalShown$ = this.pieChartModalShown.asObservable();
        this.loaderShown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loaderShown$ = this.loaderShown.asObservable();
        this.paginatorLabel = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.paginatorLabel$ = this.paginatorLabel.asObservable();
    }
    AppService.prototype.showHeader = function () {
        this.headerShown.next(true);
    };
    AppService.prototype.hideHeader = function () {
        this.headerShown.next(false);
    };
    AppService.prototype.showAdvancedFilter = function () {
        this.advancedFilterShown.next(true);
    };
    AppService.prototype.hideAdvancedFilter = function () {
        this.advancedFilterShown.next(false);
    };
    AppService.prototype.showChartModalFilter = function (data) {
        this.barChartModalData = data;
        this.barChartModalShown.next(true);
    };
    AppService.prototype.hideChartModalFilter = function () {
        this.barChartModalData = null;
        this.barChartModalShown.next(false);
    };
    AppService.prototype.showPieChartModalFilter = function (data) {
        this.pieChartModalData = data;
        this.pieChartModalShown.next(true);
    };
    AppService.prototype.hidePieChartModalFilter = function () {
        this.pieChartModalShown.next(false);
    };
    AppService.prototype.showLoader = function () {
        this.loaderShown.next(true);
    };
    AppService.prototype.hideLoader = function () {
        this.loaderShown.next(false);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src-ui/app/builder.ts":
/*!*******************************!*\
  !*** ./src-ui/app/builder.ts ***!
  \*******************************/
/*! exports provided: BuildRowGroups, SortRowGroups, GetMaxCountObject, GetPurposeInfo, GetTaxonomyInfo, GetMappedTaxonomies, GetMappedTaxonomyPurposes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildRowGroups", function() { return BuildRowGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortRowGroups", function() { return SortRowGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMaxCountObject", function() { return GetMaxCountObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPurposeInfo", function() { return GetPurposeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTaxonomyInfo", function() { return GetTaxonomyInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMappedTaxonomies", function() { return GetMappedTaxonomies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMappedTaxonomyPurposes", function() { return GetMappedTaxonomyPurposes; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src-ui/app/constants.ts");


function BuildRowGroups(data, forceExpand) {
    if (forceExpand === void 0) { forceExpand = false; }
    var apps = lodash__WEBPACK_IMPORTED_MODULE_0__["uniqBy"](data.map(function (x) {
        return { app: x.app, title: x.title, icon: x.icon };
    }), function (x) { return x.app; });
    var groups = lodash__WEBPACK_IMPORTED_MODULE_0__["groupBy"](data, 'app');
    var rowGroups = [];
    apps.forEach(function (item) {
        var rows = [];
        var _group = groups[item.app];
        _group.forEach(function (_x) {
            var relinfo = _x.relinfo;
            if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](relinfo)) {
                var info = GetTaxonomyInfo(relinfo.type);
                var appInfo = _x.appinfo;
                rows.push({
                    app: appInfo.app,
                    title: appInfo.title ? appInfo.title : appInfo.app,
                    host: relinfo.host,
                    icon: appInfo.icon ? appInfo.icon : 'assets/playstore.png',
                    type: relinfo.type,
                    purpose: relinfo.purpose,
                    typeInfo: info,
                    purposeInfo: info.purposes.find(function (x) { return x.key === relinfo.purpose; })
                });
            }
        });
        rowGroups.push({
            app: item.app,
            rows: rows,
            expanded: forceExpand
        });
    });
    return {
        groups: groups,
        rowGroups: rowGroups
    };
}
function SortRowGroups(rowGroups, activeSorterCol, activeSorterDirection) {
    rowGroups.forEach(function (group) {
        group.rows.sort(function (a, b) {
            if (activeSorterCol === 'what') {
                var labela = a.typeInfo && a.typeInfo.label ? a.typeInfo.label : '';
                var labelb = b.typeInfo && b.typeInfo.label ? b.typeInfo.label : '';
                return activeSorterDirection === 'ASC' ?
                    labela.localeCompare(labelb) : labelb.localeCompare(labela);
            }
            else if (activeSorterCol === 'where') {
                return activeSorterDirection === 'ASC' ?
                    a.host.localeCompare(b.host) : b.host.localeCompare(a.host);
            }
            else if (activeSorterCol === 'why') {
                var labela = a.purposeInfo && a.purposeInfo.label ? a.purposeInfo.label : '';
                var labelb = b.purposeInfo && b.purposeInfo.label ? b.purposeInfo.label : '';
                return activeSorterDirection === 'ASC' ?
                    labela.localeCompare(labelb) : labelb.localeCompare(labela);
            }
        });
    });
    return rowGroups;
}
function GetMaxCountObject(objects) {
    var maxValue = 0, maxType = null;
    for (var prop in objects) {
        if (objects[prop] > maxValue) {
            maxValue = objects[prop];
            maxType = prop;
        }
    }
    return maxType;
}
var GetPurposeInfo = function (id, purpose) {
    if (purpose === void 0) { purpose = null; }
    var firstLevel = null;
    var taxonomySplits = [];
    if (id) {
        taxonomySplits = id.split('.');
        firstLevel = _constants__WEBPACK_IMPORTED_MODULE_1__["TAXONOMIES"].find(function (x) { return x.name === taxonomySplits[0]; });
    }
    if (firstLevel) {
        var taxonomy = firstLevel.taxonomies
            .map(function (y) {
            return {
                name: y.name,
                icon: "md-outline-icon outline-" + y.icon,
                label: y.label,
                purposes: y.purposes
            };
        })
            .find(function (y) { return y.name === taxonomySplits[1]; });
        if (taxonomy) {
            return taxonomy.purposes.find(function (p) { return p.key === purpose; });
        }
    }
    return null;
};
var GetTaxonomyInfo = function (id) {
    var taxonomySplits = id.split('.');
    var firstLevel = _constants__WEBPACK_IMPORTED_MODULE_1__["TAXONOMIES"].find(function (x) { return x.name === taxonomySplits[0]; });
    if (firstLevel) {
        var taxonomy = firstLevel.taxonomies
            .map(function (y) {
            return {
                name: y.name,
                icon: "md-outline-icon outline-" + y.icon,
                label: y.label,
                purposes: y.purposes,
                description: y.description
            };
        })
            .find(function (y) { return y.name === taxonomySplits[1]; });
        if (taxonomy) {
            return taxonomy;
        }
    }
    return null;
};
var GetMappedTaxonomies = function (list) {
    var result = [];
    list.forEach(function (item) {
        var taxonomySplits = item.split('.');
        var firstLevel = _constants__WEBPACK_IMPORTED_MODULE_1__["TAXONOMIES"].find(function (x) { return x.name === taxonomySplits[0]; });
        if (firstLevel) {
            var taxonomy = firstLevel.taxonomies.find(function (y) { return y.name === taxonomySplits[1]; });
            if (taxonomy) {
                taxonomy.key = taxonomy.name;
                taxonomy.dualKey = item;
                taxonomy.value = false;
            }
            result.push(taxonomy);
        }
    });
    result = result.sort(function (x, y) { return x.name.localeCompare(y.name); });
    return result;
};
var GetMappedTaxonomyPurposes = function (taxonomyList, list) {
    var purposeList = taxonomyList.map(function (x) { return x.purposes; }).reduce(function (prev, curr) { return curr.concat(prev); }, []);
    purposeList = purposeList.filter(function (i) { return list.indexOf(i.key) !== -1; });
    purposeList.forEach(function (x) {
        x.value = false;
    });
    purposeList = lodash__WEBPACK_IMPORTED_MODULE_0__["uniqBy"](purposeList, function (x) { return x.key; });
    return purposeList;
};


/***/ }),

/***/ "./src-ui/app/constants.ts":
/*!*********************************!*\
  !*** ./src-ui/app/constants.ts ***!
  \*********************************/
/*! exports provided: API_URL, TAXONOMIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAXONOMIES", function() { return TAXONOMIES; });
var API_URL = 
// 'http://localhost:8081';
'https://privacy-analytics-api-v2.herokuapp.com';
// tslint:disable:max-line-length
var TAXONOMIES = [
    {
        name: 'ID',
        label: 'ID',
        icon: 'android', taxonomies: [
            {
                name: 'GENERALID',
                label: 'General ID',
                icon: 'phone',
                purposes: [
                    { shortLabel: 'Tracking ADs', key: 'AD_TRACKING', label: 'for advertising through ID tracking ', },
                    { shortLabel: 'Data Analytics', key: 'ANALYTIC_TRACKING', label: 'for data analytics through device tracking ' },
                    { shortLabel: 'Personalizing Sign-out experience', key: 'SIGNOUT_PERSONALIZATION', label: 'for personalizing Signed-out user experience' },
                    { shortLabel: 'Anti-fraud activities', key: 'ANTI_FRAUD', label: ' for fraud detection tasks ' },
                    { shortLabel: 'Authentication Activities', key: 'AUTHENTICATION', label: 'for authentication tasks (e.g. cookie)' }
                ],
                description: 'MAC address, IMEI number etc.'
            }
        ],
        description: 'IMEI number, software version etc. '
    },
    {
        name: 'PHONE',
        label: 'Phone',
        description: 'battery status, screen size, WiFi etc.',
        icon: 'phone', taxonomies: [
            {
                name: 'BATTERY',
                label: 'Battery',
                icon: 'battery_full',
                purposes: [
                    { shortLabel: 'Battery-based events', key: 'BATTERY_EVENT', label: 'for battery-based event trigger (charging, low battery)' },
                    { shortLabel: 'Power management tasks ', key: 'POWER_MANAGEMENT', label: 'for managing power tasks' },
                    { shortLabel: 'Data Analytics', key: 'ANALYTIC_DATA', label: 'for analytics through data collection' }
                ],
                description: 'Current battery percentages or charging status etc.'
            },
            {
                name: 'DEVICE',
                label: 'Device',
                icon: 'smartphone',
                purposes: [
                    { shortLabel: 'Customizing interfaces', key: 'INTERFACE_CUSTOMIZATION', label: 'for customizing interfaces' },
                    { shortLabel: 'Advertizing data', key: 'AD_DATA', label: 'for advertising personalization tasks' },
                    { shortLabel: 'Data Analytics', key: 'ANALYTIC_DATA', label: 'for analytics through data collection' },
                ],
                description: 'Phone model, screen size, manufacturer info etc.'
            },
            {
                name: 'RUNNINGSTATE',
                label: 'Running State',
                icon: 'phone',
                purposes: [
                    'Cross-app communication',
                    'Task management'
                ],
                description: 'Data about currently running tasks on the device'
            },
            {
                name: 'NOTIFICATION',
                label: 'Notification',
                icon: 'notifications',
                purposes: [
                    'Notification interface personalization (e.g. lock screen)',
                    'Interruption management'
                ],
                description: 'Data about specific notifications and their history'
            },
            {
                name: 'NETWORK',
                label: 'Network',
                icon: 'network_wifi',
                purposes: [
                    { shortLabel: 'Network Notifications', key: 'NETWORK_NOTIFICATION', label: 'for network switch notifications' },
                    { shortLabel: 'Network Optimizations', key: 'NETWORK_OPTIMIZATION', label: 'for optimizing network' },
                    { shortLabel: 'Geo-Localization tasks', key: 'GEO_LOCALIZATION', label: 'for geo-localization' },
                    { shortLabel: 'Advertizing data', key: 'AD_DATA', label: 'for advertising personalization tasks' },
                    { shortLabel: 'Data Analytics', key: 'ANALYTIC_DATA', label: 'for analytics through data collection' }
                ],
                description: 'Network conncectivity details like WiFi, LTE, 3G, 4G etc.'
            }
        ]
    },
    {
        name: 'PERSONAL',
        label: 'Personal',
        description: 'contact, emails and other calendar info',
        icon: 'person', taxonomies: [
            {
                name: 'ACCOUNT',
                label: 'Account',
                icon: 'account_circle',
                purposes: [
                    { shortLabel: 'Third-party login services', key: 'THIRDPARTY_LOGIN', label: 'for third-party login services' },
                    { shortLabel: 'Advertizing data', key: 'AD_DATA', label: 'for advertising personalization tasks' },
                    { shortLabel: 'Data Analytics', key: 'ANALYTIC_DATA', label: 'for personalization analytics through data collection' }
                ],
                description: 'Settings for tasks like syncing data from different services'
            },
            {
                name: 'CALENDAR',
                label: 'Calendar',
                icon: 'calendar_today',
                purposes: [
                    { shortLabel: 'Context Predicting', key: 'CONTEXT_PREDICT', label: 'for predicting context' },
                    { shortLabel: 'Scheduling Tasks', key: 'SCHEDULE', label: 'for scheduling tasks' },
                    { shortLabel: 'Alarms', key: 'ALARM', label: 'for alarm' }
                ],
                description: 'Calendar and time-related info.'
            },
            {
                name: 'CONTACTS',
                label: 'Contacts',
                icon: 'contacts',
                purposes: [
                    { shortLabel: 'Backup Tasks', key: 'BACKUP_SYNC', label: 'for backup and synchronization' },
                    { shortLabel: 'Managing contacts', key: 'CONTACT_MANAGE', label: 'for managing contacts' },
                    { shortLabel: 'Blacklisting calls', key: 'BLACKLIST', label: 'for blacklist and fake calls' },
                    { shortLabel: 'Calling + Messaging', key: 'CALL SMS', label: 'for call and messaging tasks' },
                    { shortLabel: 'Customizing contacts', key: 'CONTACT_CUSTOMIZATION', label: 'for contact-based customization' },
                    { shortLabel: 'Emailing', key: 'EMAIL', label: 'for email tasks' },
                    { shortLabel: 'Finding Friends', key: 'FIND_FRIENDS', label: 'to find friends' },
                    { shortLabel: 'Recording tasks', key: 'RECROD', label: 'for recording activities' },
                    { shortLabel: 'Detecting fake calling', key: 'FAKE_CAL', label: 'for detecting fake calls' }
                ],
                description: 'Name, phone number, email address etc.'
            },
            {
                name: 'SMS',
                label: 'Messaging',
                icon: 'textsms',
                purposes: [
                    'Send message',
                    'Organize message (clustering, delete, re-rank)',
                    'Extract message content',
                    'Block message',
                    'Schedule message',
                    'Backup/syncrhonize message'
                ],
                description: 'Data used for writing/reading users\' text messaging history'
            },
            {
                name: 'STORAGE',
                label: 'Storage',
                icon: 'sd_storage',
                purposes: [
                    'Access photo album (uploading/editing)',
                    'Download',
                    'Persistent storage'
                ],
                description: 'Info. needed to read/write the files on the storage'
            }
        ]
    },
    {
        name: 'SENSOR',
        label: 'Sensor',
        description: 'Like GPS coordinates, camera settings etc.',
        icon: 'ac_unit', taxonomies: [
            {
                name: 'CAMERA',
                label: 'Camera',
                icon: 'photo_camera',
                purposes: [
                    'Flashlight',
                    'Video streaming',
                    'Code scanning',
                    'Document scanning',
                    'Augment reality',
                    'Text recognition',
                    'Photo taking'
                ],
                description: 'Current camera settings for apps and websites'
            },
            {
                name: 'PROXIMITY',
                label: 'Proximity',
                icon: 'tap_and_play',
                purposes: [
                    'Speaker/display activation'
                ],
                description: 'Info used to detect distance between phone and body parts'
            },
            {
                name: 'LOCATION',
                label: 'Location',
                icon: 'location_on',
                purposes: [
                    { shortLabel: 'Localized searching', key: 'NEARBY_SEARCH', label: ' to localized and nearby searches' },
                    { shortLabel: 'Location-based customization', key: 'LOCATION_BASED_CUSTOMIZATION', label: 'for location-based customization' },
                    { shortLabel: 'Transportation information', key: 'TRANSPORTATION_INFO', label: 'for transportation information' },
                    { shortLabel: 'Recording Tasks', key: 'RECRODING', label: 'for recording activities' },
                    { shortLabel: 'Mapping + Navigation', key: 'MAP_NAVIGATION', label: 'for map and navigation tasks' },
                    { shortLabel: 'Geo based networking', key: 'GEOSOCIAL_NETWORK', label: 'for geosocial networking tasks' },
                    { shortLabel: 'Geotagging tasks', key: 'GEOTAGGING', label: 'for geotagging tasks' },
                    { shortLabel: 'Location spoofing', key: 'LOCATION_SPOOFING', label: 'for location spoofing' },
                    { shortLabel: 'Reminder tasks', key: 'ALERT_REMIND', label: 'for alerts and reminders' },
                    { shortLabel: 'Location based games', key: 'LOCATION_BASED_GAME', label: 'for location based games' },
                    { shortLabel: 'Reverse Geocoding tasks', key: 'REVERSE_GEOCODING', label: 'for reverse geocoding' },
                    { shortLabel: 'Advertizing data', key: 'AD_DATA', label: 'for advertisizing related tasks' },
                    { shortLabel: 'Data Analytics', key: 'ANALYTIC_DATA', label: 'for analytics through data collection' },
                ],
                description: 'Location related GPS data from the phone + other Geospatial data'
            },
            {
                name: 'MICROPHONE',
                label: 'Microphone',
                icon: 'mic',
                purposes: [
                    { shortLabel: 'Voice Authentication tasks', key: 'VOICE_AUTHEN', label: 'for voice authentication tasks' },
                    { shortLabel: 'Audio Streaming', key: 'AUDIEO_STREAMING', label: 'for audio streaming activities' },
                    { shortLabel: 'Voice Control tasks', key: 'VOICE_CONTROL', label: 'for voice control tasks' },
                    { shortLabel: 'Speech Recog. tasks', key: 'SPEECH_REC', label: 'for speech recognition tasks' },
                    { shortLabel: 'Recording tasks', key: 'AUDIO_RECORD', label: 'for audio recording (e.g. voice message)' },
                    { shortLabel: 'Acoustics events', key: 'ACOUSTIC_EVENT_DETECT', label: 'for acoustic event detection' },
                    { shortLabel: 'Wireless communication', key: 'ACOUSTIC_COMMUNICATION', label: 'for acoustic wireless communication' },
                    { shortLabel: 'Music activtities', key: 'MUSIC', label: 'for music tasks' },
                ],
                description: 'Audio data collected from the phone, voice commands etc.'
            },
            {
                name: 'INERTIAL',
                label: 'Inertial',
                icon: 'blur_linear',
                purposes: [],
                description: 'Data from gyroscope, accelerometer etc.'
            }
        ]
    }
];


/***/ }),

/***/ "./src-ui/app/data.service.ts":
/*!************************************!*\
  !*** ./src-ui/app/data.service.ts ***!
  \************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src-ui/app/constants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.currentSearchParams = {};
        this.cancelPendingRequests$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    DataService.prototype.clearSearchParams = function () {
        this.currentSearchParams = {};
    };
    DataService.prototype.getSampleData = function () {
        var url = _constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + '/api/relationships?host=pagead2.googlesyndication.com';
        return this.http.post(url, {});
    };
    DataService.prototype.getSearchParams = function () {
        var url = _constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + '/api/meta/searchparams';
        return this.http.get(url);
    };
    DataService.prototype.getRelationships = function (skip, limit) {
        if (skip === void 0) { skip = 0; }
        if (limit === void 0) { limit = 10; }
        var url = _constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + ("/api/relationships?skip=" + skip + "&limit=" + limit);
        return this.http.post(url, {});
    };
    DataService.prototype.getTotalNoOfApps = function () {
        var url = _constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + '/api/apps/count';
        return this.http.get(url);
    };
    DataService.prototype.getAppRelationships = function (app, skip, limit, count) {
        if (skip === void 0) { skip = 0; }
        if (limit === void 0) { limit = 10; }
        if (count === void 0) { count = false; }
        var url = _constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + ("/api/relationships?app=" + app + "&skip=" + skip + "&limit=" + limit + "&count=" + count);
        return this.http.post(url, {});
    };
    DataService.prototype.getHostRelationships = function (host, skip, limit, count) {
        if (skip === void 0) { skip = 0; }
        if (limit === void 0) { limit = 25; }
        if (count === void 0) { count = false; }
        var url = _constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + ("/api/relationships?host=" + host + "&skip=" + skip + "&limit=" + limit + "&count=" + count);
        return this.http.post(url, {});
    };
    DataService.prototype.getBaseRelationships = function (params, skip, limit, count) {
        if (skip === void 0) { skip = 0; }
        if (limit === void 0) { limit = 10; }
        if (count === void 0) { count = false; }
        var url = _constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + ("/api/relationships?&skip=" + skip + "&limit=" + limit + "&count=" + count);
        return this.http.post(url, params);
    };
    DataService.prototype.getAppDetails = function (app) {
        var url = _constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/api/apps";
        return this.http.post(url, {
            app: app
        });
    };
    DataService.prototype.getHostDetails = function (host) {
        var url = _constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/api/hosts";
        return this.http.post(url, {
            host: host
        });
    };
    DataService.prototype.getSearchResults = function (token, skip, limit) {
        if (skip === void 0) { skip = 0; }
        if (limit === void 0) { limit = 5; }
        this.cancelPendingRequests$.next();
        var url = _constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + ("/api/search/" + token + "?skip=" + skip + "&limit=" + limit);
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.cancelPendingRequests$.asObservable()));
    };
    DataService.prototype.getPurposeDistribution = function (params) {
        var url = _constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/api/distribution/purposes";
        return this.http.post(url, params);
    };
    DataService.prototype.getCategoryWiseDistribution = function (params) {
        var url = _constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/api/distribution/categories";
        return this.http.post(url, params);
    };
    DataService.prototype.getStats = function (params) {
        var url = _constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/api/statistics";
        return this.http.post(url, params);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src-ui/app/distribution-bar-chart/distribution-bar-chart.component.html":
/*!*********************************************************************************!*\
  !*** ./src-ui/app/distribution-bar-chart/distribution-bar-chart.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" *ngIf=\"modalOpened\">\n    <div class=\"overlay\" (click)=\"closeModal()\"></div>\n    <div class=\"container modal-content distribution-modal-content\">\n        <div class=\"content-wrapper\">\n            <div class=\"distribution-content position-relative\">\n                <div class=\"content-toggle\">\n                    <div class=\"content-toggle-control\">\n                        <mat-form-field>\n                            <mat-label>Sort By</mat-label>\n                            <mat-select (selectionChange)=\"onSelectionChnage()\" [(value)]=\"selectedOption\">\n                                <mat-option *ngFor=\"let food of sortOptions\" [value]=\"food.value\">\n                                    {{food.viewValue}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <highcharts-chart class=\"highchart\" *ngIf=\"showChart\" [Highcharts]=\"Highcharts\"\n                    [options]=\"chartOptions\"></highcharts-chart>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src-ui/app/distribution-bar-chart/distribution-bar-chart.component.scss":
/*!*********************************************************************************!*\
  !*** ./src-ui/app/distribution-bar-chart/distribution-bar-chart.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes slide-in-from-top {\n  0% {\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px); }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@keyframes slide-in-from-top {\n  0% {\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px); }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@-webkit-keyframes slide-in-from-right {\n  0% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n@keyframes slide-in-from-right {\n  0% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n.distribution-modal-content {\n  height: 100vh;\n  width: 75vw;\n  max-width: 75vw;\n  background-color: #f1f8ff;\n  margin-right: 0;\n  -webkit-animation: slide-in-from-right 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) 0s 1 forwards;\n          animation: slide-in-from-right 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) 0s 1 forwards; }\n\n.distribution-modal-content .content-wrapper {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\n.distribution-content {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  position: relative;\n  padding: 30px 0; }\n\n.distribution-content .highchart {\n    position: relative;\n    z-index: 1;\n    height: 100%;\n    width: 90%;\n    display: block;\n    margin: 0 auto;\n    box-sizing: border-box; }\n\n.distribution-content .content-toggle {\n    position: absolute;\n    z-index: 2;\n    right: 0; }\n\n.highcharts-xaxis-labels,\n/deep/ .highcharts-xaxis-labels {\n  text-align: right; }\n"

/***/ }),

/***/ "./src-ui/app/distribution-bar-chart/distribution-bar-chart.component.ts":
/*!*******************************************************************************!*\
  !*** ./src-ui/app/distribution-bar-chart/distribution-bar-chart.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DistributionBarChartComponent, SimpleBarConfig, MockBarChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributionBarChartComponent", function() { return DistributionBarChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleBarConfig", function() { return SimpleBarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockBarChartData", function() { return MockBarChartData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src-ui/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DistributionBarChartComponent = /** @class */ (function () {
    function DistributionBarChartComponent(appService) {
        this.appService = appService;
        this.modalOpened = false;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.showChart = false;
        this.chartOptions = Object.assign({}, SimpleBarConfig);
        this.sortOptions = [
            { value: 'no-of-apps', viewValue: 'No. of apps' },
            { value: 'app-names', viewValue: 'Category Name' },
        ];
        this.selectedOption = this.sortOptions[0].value;
    }
    DistributionBarChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.barChartModalShown$.subscribe(function (data) {
            setTimeout(function () {
                // tslint:disable-next-line:no-unused-expression
                data && _this.openModal();
                // tslint:disable-next-line:no-unused-expression
                !data && _this.closeModal();
            });
        });
    };
    DistributionBarChartComponent.prototype.onSelectionChnage = function () {
        this.populateData(this.selectedOption);
    };
    DistributionBarChartComponent.prototype.populateData = function (currentSortOption) {
        var _this = this;
        if (currentSortOption === void 0) { currentSortOption = 'no-of-apps'; }
        this.showChart = false;
        var data = this.appService.barChartModalData;
        if (currentSortOption === 'no-of-apps') {
            data = data.sort(function (a, b) { return b[1] - a[1]; });
        }
        else {
            data = data.sort(function (a, b) { return a[0].localeCompare(b[0]); });
        }
        var colors = palette('tol-rainbow', data.length);
        this.chartOptions.plotOptions.bar.colorByPoint = true;
        this.chartOptions.plotOptions.bar.colors = colors.map(function (c) { return "#" + c; });
        this.chartOptions.series[0].data = data;
        setTimeout(function () {
            _this.showChart = true;
        });
    };
    DistributionBarChartComponent.prototype.openModal = function () {
        var _this = this;
        document.body.classList.add('overflow-hidden');
        this.modalOpened = true;
        setTimeout(function () {
            _this.populateData();
        });
    };
    DistributionBarChartComponent.prototype.closeModal = function () {
        document.body.classList.remove('overflow-hidden');
        this.modalOpened = false;
    };
    DistributionBarChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-distribution-bar-chart',
            template: __webpack_require__(/*! ./distribution-bar-chart.component.html */ "./src-ui/app/distribution-bar-chart/distribution-bar-chart.component.html"),
            styles: [__webpack_require__(/*! ./distribution-bar-chart.component.scss */ "./src-ui/app/distribution-bar-chart/distribution-bar-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], DistributionBarChartComponent);
    return DistributionBarChartComponent;
}());

var SimpleBarConfig = {
    chart: {
        type: 'bar',
        backgroundColor: 'rgba(255, 255, 255, 0.0)'
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Distribution of apps'
    },
    subtitle: {
        enabled: false
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: 0,
            style: {
                fontSize: '11px',
                fontFamily: '"Raleway", sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'No. of apps'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: '<b>{point.y} apps</b>'
    },
    plotOptions: {
        line: {
            color: 'transparent'
        },
        bar: {
            pointWidth: 15,
            pointPadding: 2,
        }
    },
    series: [{
            name: '',
            data: [],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y}',
                y: 0,
                style: {
                    fontSize: '11px',
                    fontFamily: '"Raleway", sans-serif'
                }
            }
        }]
};
// tslint:disable:quotemark
var MockBarChartData = [
    {
        "key": "",
        "value": 166
    },
    {
        "key": "Photography",
        "value": 139
    },
    {
        "key": "Education",
        "value": 338
    },
    {
        "key": "Shopping",
        "value": 189
    },
    {
        "key": "News & Magazines",
        "value": 307
    },
    {
        "key": "Books & Reference",
        "value": 107
    },
    {
        "key": "Lifestyle",
        "value": 298
    },
    {
        "key": "Entertainment",
        "value": 467
    },
    {
        "key": "Music & Audio",
        "value": 254
    },
    {
        "key": null,
        "value": 499
    },
    {
        "key": "Finance",
        "value": 55
    },
    {
        "key": "Medical",
        "value": 20
    },
    {
        "key": "Travel & Local",
        "value": 166
    },
    {
        "key": "Social",
        "value": 243
    },
    {
        "key": "Business",
        "value": 93
    },
    {
        "key": "Productivity",
        "value": 186
    },
    {
        "key": "Maps & Navigation",
        "value": 41
    },
    {
        "key": "Personalization",
        "value": 179
    },
    {
        "key": "Tools",
        "value": 172
    },
    {
        "key": "Parenting",
        "value": 23
    },
    {
        "key": "Health & Fitness",
        "value": 90
    },
    {
        "key": "Communication",
        "value": 59
    },
    {
        "key": "Beauty",
        "value": 6
    },
    {
        "key": "Dating",
        "value": 8
    },
    {
        "key": "Video Players & Editors",
        "value": 57
    },
    {
        "key": "Comics",
        "value": 9
    },
    {
        "key": "Weather",
        "value": 28
    },
    {
        "key": "Food & Drink",
        "value": 12
    },
    {
        "key": "Art & Design",
        "value": 3
    },
    {
        "key": "Auto & Vehicles",
        "value": 2
    },
    {
        "key": "House & Home",
        "value": 2
    },
    {
        "key": "Events",
        "value": 1
    },
    {
        "key": "Libraries & Demo",
        "value": 1
    },
    {
        "key": "UNKNOWN",
        "value": 166
    }
];


/***/ }),

/***/ "./src-ui/app/distribution-pie-chart/distribution-pie-chart.component.html":
/*!*********************************************************************************!*\
  !*** ./src-ui/app/distribution-pie-chart/distribution-pie-chart.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" *ngIf=\"modalOpened\">\n    <div class=\"overlay\" (click)=\"closeModal()\"></div>\n    <div class=\"container modal-content distribution-modal-content\">\n        <div class=\"content-wrapper\">\n            <div class=\"distribution-content position-relative\">\n                <highcharts-chart class=\"highchart\" *ngIf=\"showChart\" [Highcharts]=\"Highcharts\"\n                    [options]=\"chartOptions\"></highcharts-chart>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src-ui/app/distribution-pie-chart/distribution-pie-chart.component.scss":
/*!*********************************************************************************!*\
  !*** ./src-ui/app/distribution-pie-chart/distribution-pie-chart.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes slide-in-from-top {\n  0% {\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px); }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@keyframes slide-in-from-top {\n  0% {\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px); }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@-webkit-keyframes slide-in-from-right {\n  0% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n@keyframes slide-in-from-right {\n  0% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n.distribution-modal-content {\n  height: 100vh;\n  width: 75vw;\n  max-width: 75vw;\n  background-color: #f1f8ff;\n  margin-right: 0;\n  -webkit-animation: slide-in-from-right 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) 0s 1 forwards;\n          animation: slide-in-from-right 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) 0s 1 forwards; }\n\n.distribution-modal-content .content-wrapper {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\n.distribution-content {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  position: relative;\n  padding: 30px 0; }\n\n.distribution-content .highchart {\n    position: relative;\n    z-index: 1;\n    height: 100%;\n    width: 90%;\n    display: block;\n    margin: 0 auto;\n    box-sizing: border-box; }\n\n.distribution-content .content-toggle {\n    position: absolute;\n    z-index: 2;\n    right: 0; }\n\n.highcharts-xaxis-labels,\n/deep/ .highcharts-xaxis-labels {\n  text-align: right; }\n"

/***/ }),

/***/ "./src-ui/app/distribution-pie-chart/distribution-pie-chart.component.ts":
/*!*******************************************************************************!*\
  !*** ./src-ui/app/distribution-pie-chart/distribution-pie-chart.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DistributionPieChartComponent, SimpleConfig, MockBarChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributionPieChartComponent", function() { return DistributionPieChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleConfig", function() { return SimpleConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockBarChartData", function() { return MockBarChartData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src-ui/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DistributionPieChartComponent = /** @class */ (function () {
    function DistributionPieChartComponent(appService) {
        this.appService = appService;
        this.modalOpened = false;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.showChart = false;
        this.chartOptions = Object.assign({}, SimpleConfig);
        this.sortOptions = [
            { value: 'no-of-apps', viewValue: 'No. of apps' },
            { value: 'app-names', viewValue: 'Category Name' },
        ];
        this.selectedOption = this.sortOptions[0].value;
    }
    DistributionPieChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.pieChartModalShown$.subscribe(function (data) {
            setTimeout(function () {
                // tslint:disable-next-line:no-unused-expression
                data && _this.openModal();
                // tslint:disable-next-line:no-unused-expression
                !data && _this.closeModal();
            });
        });
    };
    DistributionPieChartComponent.prototype.onSelectionChnage = function () {
        this.populateData(this.selectedOption);
    };
    DistributionPieChartComponent.prototype.populateData = function (currentSortOption) {
        var _this = this;
        if (currentSortOption === void 0) { currentSortOption = 'no-of-apps'; }
        this.showChart = false;
        var data = this.appService.pieChartModalData;
        if (currentSortOption === 'no-of-apps') {
            data = data.sort(function (a, b) { return b[1] - a[1]; });
        }
        else {
            data = data.sort(function (a, b) { return a[0].localeCompare(b[0]); });
        }
        var colors = palette('tol-rainbow', data.length);
        this.chartOptions.colorByPoint = true;
        this.chartOptions.colors = colors.map(function (c) { return "#" + c; });
        this.chartOptions.series[0].data = data;
        window.requestAnimationFrame(function () {
            _this.showChart = true;
        });
    };
    DistributionPieChartComponent.prototype.openModal = function () {
        var _this = this;
        document.body.classList.add('overflow-hidden');
        this.modalOpened = true;
        setTimeout(function () {
            _this.populateData();
        });
    };
    DistributionPieChartComponent.prototype.closeModal = function () {
        document.body.classList.remove('overflow-hidden');
        this.modalOpened = false;
    };
    DistributionPieChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-distribution-pie-chart',
            template: __webpack_require__(/*! ./distribution-pie-chart.component.html */ "./src-ui/app/distribution-pie-chart/distribution-pie-chart.component.html"),
            styles: [__webpack_require__(/*! ./distribution-pie-chart.component.scss */ "./src-ui/app/distribution-pie-chart/distribution-pie-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], DistributionPieChartComponent);
    return DistributionPieChartComponent;
}());

var SimpleConfig = {
    chart: {
        type: 'pie',
        backgroundColor: 'rgba(255, 255, 255, 0.0)'
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Distribution of purposes'
    },
    subtitle: {
        enabled: false
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: 0,
            style: {
                fontSize: '11px',
                fontFamily: '"Raleway", sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'No. of apps'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: '<b>{point.value} </b>'
    },
    plotOptions: {
        line: {
            color: 'transparent'
        },
        bar: {
            pointWidth: 15,
            pointPadding: 2,
        }
    },
    series: [{
            name: '',
            data: [],
            dataLabels: {
                enabled: true,
                rotation: 0,
                align: 'right',
                format: '{point.name} {point.percentage:.1f} %',
                y: 0,
                style: {
                    fontSize: '11px',
                    fontFamily: '"Raleway", sans-serif'
                }
            }
        }]
};
// tslint:disable:quotemark
var MockBarChartData = [
    {
        "key": "near by search",
        "value": 166
    },
    {
        "key": "location based customization",
        "value": 139
    },
    {
        "key": "transportation info",
        "value": 338
    },
    {
        "key": "recording",
        "value": 189
    },
    {
        "key": "map navigation",
        "value": 307
    },
    {
        "key": "geosocial network",
        "value": 107
    },
    {
        "key": "geotagging",
        "value": 298
    },
    {
        "key": "location spoofing",
        "value": 467
    },
    {
        "key": "alert reminders",
        "value": 254
    },
    {
        "key": "gaming",
        "value": 499
    },
    {
        "key": "reverse geocoding",
        "value": 55
    },
    {
        "key": "ads related",
        "value": 20
    },
    {
        "key": "anaytics",
        "value": 166
    }
];


/***/ }),

/***/ "./src-ui/app/header/header.component.html":
/*!*************************************************!*\
  !*** ./src-ui/app/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-wrapper\">\n    <div class=\"container\">\n        <div class=\"header-left\">\n            <label [routerLink]=\"['/home']\">Android Network Traces</label>\n        </div>\n        <div class=\"header-right\">\n            <div class=\"search-wrapper\" data-tag=\"search-wrapper\">\n                <div class=\"search-bar-holder\">\n                    <input placeholder=\"Search by app name or destination, for e.g. Instagram or Facebook\"\n                        (keyup.escape)=\"closeResultsBar()\"\n                        (keyup.enter)=\"onDebouncedSearchTokenChanged()\"\n                        (focus)=\"onInputFocus()\"\n                        (input)=\"onDebouncedSearchTokenChanged()\"\n                        [(ngModel)]=\"searchToken\" [readonly]=\"advancedFilterOn\" />\n                    <i class=\"material-icons search-icon\">search</i>\n                    <i class=\"material-icons advanced-icon\" [class.active-icon]=\"advancedFilterOn\"\n                        matTooltip=\"Advanced Filters\" (click)=\"openAdvancedModal()\">tune</i>\n                </div>\n                <div class=\"search-bar-results-wrapper\" *ngIf=\"showResultsBar\">\n                    <div class=\"search-bar-result-content\" *ngIf=\"apps.length > 0\">\n                        <label>Android apps</label>\n                        <ul>\n                            <li *ngFor=\"let item of apps\" [routerLink]=\"['/results/who/' + item.app]\">\n                                <img [attr.src]=\"item.icon\" />\n                                <span>{{item.title}}</span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"search-bar-result-content\" *ngIf=\"hosts.length > 0\">\n                        <label>Web Services</label>\n                        <ul>\n                            <li *ngFor=\"let item of hosts\" [routerLink]=\"['/results/where/' + item.host]\">\n                                <img [attr.src]=\"item.icon\" />\n                                <span>{{item.host}}</span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src-ui/app/header/header.component.scss":
/*!*************************************************!*\
  !*** ./src-ui/app/header/header.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes slide-in-from-top {\n  0% {\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px); }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@keyframes slide-in-from-top {\n  0% {\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px); }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@-webkit-keyframes slide-in-from-right {\n  0% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n@keyframes slide-in-from-right {\n  0% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n.header-wrapper {\n  background-color: #3f51b5;\n  width: 100%;\n  height: 60px; }\n\n.header-wrapper .container {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0; }\n\n.header-wrapper .header-left {\n    flex: 1; }\n\n.header-wrapper .header-left label {\n      margin: 0;\n      color: #fff;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n      cursor: pointer; }\n\n.header-wrapper .header-right {\n    flex: initial;\n    max-width: 600px;\n    display: flex;\n    flex-flow: row;\n    justify-content: center;\n    align-items: center;\n    width: 50%; }\n\n.header-wrapper .header-right .search-wrapper {\n      flex-direction: column;\n      position: relative; }\n\n.header-wrapper .header-right .search-wrapper .search-bar-holder {\n        width: 100%;\n        margin: 0;\n        height: 36px;\n        min-width: 300px;\n        flex: 1;\n        background-color: rgba(255, 255, 255, 0);\n        border: 1px dashed rgba(255, 255, 255, 0.5); }\n\n.header-wrapper .header-right .search-wrapper .search-bar-holder input {\n          line-height: 36px;\n          width: 100%;\n          padding: 0 10px 0 36px;\n          background: transparent;\n          border: none;\n          color: rgba(255, 255, 255, 0.8);\n          font-size: small;\n          outline: none; }\n\n.header-wrapper .header-right .search-wrapper .search-bar-holder i {\n          line-height: 30px;\n          width: 30px;\n          font-size: medium;\n          color: rgba(255, 255, 255, 0.5);\n          top: 2px;\n          border-radius: 4px;\n          cursor: pointer; }\n\n.header-wrapper .header-right .search-wrapper .search-bar-holder i.search-icon {\n            left: 0; }\n\n.header-wrapper .header-right .search-wrapper .search-bar-holder i.advanced-icon {\n            right: 2px;\n            font-size: medium;\n            color: rgba(255, 255, 255, 0.75); }\n\n.header-wrapper .header-right .search-wrapper .search-bar-holder i.advanced-icon:not(.active-icon) {\n              outline: none;\n              cursor: pointer;\n              background-color: rgba(0, 0, 0, 0);\n              transition: background-color 0.2s ease 0s; }\n\n.header-wrapper .header-right .search-wrapper .search-bar-holder i.advanced-icon:not(.active-icon):focus, .header-wrapper .header-right .search-wrapper .search-bar-holder i.advanced-icon:not(.active-icon):hover {\n                background-color: rgba(0, 0, 0, 0.05); }\n\n.header-wrapper .header-right .search-wrapper .search-bar-holder i.active-icon {\n            color: #3f51b5;\n            background-color: rgba(255, 255, 255, 0.9); }\n\n.header-wrapper .header-right .search-wrapper .search-bar-results-wrapper {\n        width: 100%;\n        position: absolute;\n        background: #fff;\n        left: 0;\n        top: 36px;\n        border-radius: 4px;\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n        max-height: 350px;\n        overflow-y: auto;\n        -ms-overflow-style: -ms-autohiding-scrollbar;\n        -webkit-overflow-scrolling: touch;\n        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1); }\n\n.header-wrapper .header-right .search-wrapper .search-bar-results-wrapper .search-bar-result-content {\n          padding: 0 20px; }\n\n.header-wrapper .header-right .search-wrapper .search-bar-results-wrapper .search-bar-result-content:not(:first-child) label {\n            margin-top: 10px; }\n\n.header-wrapper .header-right .search-wrapper .search-bar-results-wrapper .search-bar-result-content label {\n            margin: 20px 0 0 0;\n            font-size: small; }\n\n.header-wrapper .header-right .search-wrapper .search-bar-results-wrapper .search-bar-result-content ul {\n            padding: 0px;\n            list-style: none; }\n\n.header-wrapper .header-right .search-wrapper .search-bar-results-wrapper .search-bar-result-content ul li {\n              margin: 5px 0;\n              line-height: 36px;\n              padding: 0 10px;\n              background-color: #f0f0f0;\n              font-size: small;\n              transition: background-color 0.2s ease-out 0s;\n              cursor: pointer;\n              display: flex;\n              justify-content: flex-start;\n              align-items: center; }\n\n.header-wrapper .header-right .search-wrapper .search-bar-results-wrapper .search-bar-result-content ul li img {\n                max-width: 18px;\n                max-height: 18px;\n                margin-right: 10px; }\n\n.header-wrapper .header-right .search-wrapper .search-bar-results-wrapper .search-bar-result-content ul li:hover {\n                background-color: #e1e1e1; }\n"

/***/ }),

/***/ "./src-ui/app/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src-ui/app/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src-ui/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src-ui/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(appService, dataService, router, activatedRouter) {
        var _this = this;
        this.appService = appService;
        this.dataService = dataService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.itemsThree = [1, 2, 3];
        this.searchToken = 'All apps';
        this.advancedFilterOn = true;
        this.showResultsBar = false;
        this.apps = [];
        this.hosts = [];
        this.onDebouncedSearchTokenChanged = lodash__WEBPACK_IMPORTED_MODULE_3__["debounce"](this.onSearchTokenChanged, 100);
        this.onDOMEventListener = function (e) {
            if (e.target) {
                var target = e.target;
                if (target.closest('[data-tag="search-wrapper"]') === null) {
                    _this.closeResultsBar();
                }
            }
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.closeResultsBar();
            }
        });
        this.activatedRouter.params.subscribe(function (params) {
            _this.advancedFilterOn = true;
            _this.searchToken = 'All apps';
            if (!params || !params['type']) {
                _this.advancedFilterOn = false;
                _this.searchToken = '';
            }
        });
    };
    HeaderComponent.prototype.onInputFocus = function () {
        this.openResultsBar();
    };
    HeaderComponent.prototype.onSearchTokenChanged = function () {
        var _this = this;
        if (!lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](this.searchToken)) {
            this.dataService.getSearchResults(this.searchToken.trim(), 0, 4).subscribe(function (data) {
                _this.apps = data.apps || [];
                _this.hosts = data.hosts || [];
                if (_this.apps.length > 0) {
                    _this.apps = lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"](_this.apps, 'title');
                    _this.apps.forEach(function (x) {
                        if (!x.title) {
                            x.title = x.app;
                        }
                        if (!x.icon) {
                            x.icon = 'assets/playstore.png';
                        }
                    });
                }
                if (_this.hosts.length > 0) {
                    _this.hosts = lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"](_this.hosts, 'title');
                    _this.hosts.forEach(function (x) {
                        if (!x.icon) {
                            x.icon = 'assets/worldwide.png';
                        }
                    });
                }
                if (_this.apps.length > 0 || _this.hosts.length > 0) {
                    _this.openResultsBar();
                }
            });
        }
        else {
            this.apps = [];
            this.hosts = [];
            this.closeResultsBar();
        }
    };
    HeaderComponent.prototype.openResultsBar = function () {
        this.showResultsBar = true;
        document.addEventListener('click', this.onDOMEventListener);
    };
    HeaderComponent.prototype.closeResultsBar = function () {
        document.removeEventListener('click', this.onDOMEventListener);
        this.showResultsBar = false;
    };
    HeaderComponent.prototype.openAdvancedModal = function () {
        this.appService.showAdvancedFilter();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src-ui/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src-ui/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src-ui/app/home/home.component.html":
/*!*********************************************!*\
  !*** ./src-ui/app/home/home.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\n    <div class=\"home-header\">\n        <div class=\"img\"></div>\n        <div class=\"overlay\"></div>\n        <div class=\"container\">\n            <h1>Analysing data shared by Android Apps</h1>\n            <p>\n                We collected network traffic for 1600+ Android apps and analysed <br />\n                <strong>who</strong> is sending <strong>what</strong> data to <strong>where</strong> and\n                <strong>why</strong>\n            </p>\n            <div class=\"btn-container\">\n                <button [routerLink]=\"['/results']\" mat-raised-button>See data shared by all apps</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"home-content\">\n        <div class=\"container p-0\">\n            <div class=\"results-wrapper\">\n                <div class=\"top-queries-wrapper\">\n                    <label>Top Queries</label>\n                    <div class=\"top-queries-holder\">\n                        <a (click)=\"openLink(item)\" *ngFor=\"let item of queries\">{{item.label}}</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"results-wrapper\">\n                <label style=\"margin-bottom: 45px;\">Let's look at some popular apps and what data they send to where and why</label>\n                <div class=\"results-container\">\n                    <div class=\"results-container-item\" *ngFor=\"let group of rowGroups; let i = index;\">\n                        <div class=\"results-container-item-content\">\n                            <table>\n                                <tbody>\n                                    <ng-container *ngFor=\"let row of group.rows; let j = index;\">\n                                        <tr>\n                                            <td class=\"logo\">\n                                                <img [attr.src]=\"row.icon\" />\n                                            </td>\n                                            <td class=\"who actionable\" [routerLink]=\"['/results/who/' + row.app]\">\n                                                <div class=\"result-item-value\"><span>{{row.title}}</span> sends </div>\n                                            </td>\n                                            <td class=\"what actionable\" [routerLink]=\"['/results']\" [queryParams]=\"{types: [row.type]}\" [matTooltip]=\"row.typeInfo?.description\" matTooltipPosition=\"above\" matTooltipClass=\"phone-data-tooltip\">\n                                                <div class=\"result-item-value\" >\n                                                    <i [ngClass]=\"row.typeInfo.icon\"></i><span>{{row.typeInfo?.label}}\n                                                        data</span>\n                                                </div>\n                                            </td>\n                                            <td class=\"where actionable\" [routerLink]=\"['/results/where/' + row.host]\">\n                                                <div class=\"result-item-value\"><span>to {{row.host}}</span>\n                                                </div>\n                                            </td>\n                                            <td class=\"why actionable\" [routerLink]=\"['/results']\" [queryParams]=\"{purposes: [row.purpose]}\">\n                                                <div class=\"result-item-value\">\n                                                    <span>{{row.purposeInfo?.label}}</span>\n                                                    <span *ngIf=\"false\"><br /><span\n                                                            class=\"uncommon-tag\">UNCOMMON</span></span></div>\n                                            </td>\n                                        </tr>\n                                    </ng-container>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"results-wrapper\" *ngIf=\"false\">\n                <label>How we analyzed the apps ?</label>\n                <ul class=\"process-steps\">\n                    <li [attr.data-index]=\"i + 1\" *ngFor=\"let item of itemsThree; let i = index;\">Lorem ipsum dolor sit\n                        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n                        commodo consequat.</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"home-header\">\n        <div class=\"container\" style=\"padding-bottom: 60px;\">\n            <div class=\"search-wrapper\">\n                <button [routerLink]=\"['/results']\" mat-raised-button>See data shared by all apps</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src-ui/app/home/home.component.scss":
/*!*********************************************!*\
  !*** ./src-ui/app/home/home.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes slide-in-from-top {\n  0% {\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px); }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@keyframes slide-in-from-top {\n  0% {\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px); }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@-webkit-keyframes slide-in-from-right {\n  0% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n@keyframes slide-in-from-right {\n  0% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n.results-wrapper {\n  padding: 60px 0; }\n\n.results-wrapper:not(:last-of-type) {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n.results-wrapper label {\n    margin-bottom: 15px;\n    text-align: left;\n    color: black;\n    width: 100%;\n    font-size: large;\n    font-weight: 500; }\n\n.results-wrapper .process-steps {\n    list-style: none;\n    padding: 0; }\n\n.results-wrapper .process-steps li {\n      padding-left: 60px;\n      margin: 30px 0;\n      position: relative;\n      max-width: 75%; }\n\n.results-wrapper .process-steps li:before {\n        content: attr(data-index);\n        position: absolute;\n        left: 0px;\n        top: 0;\n        line-height: 36px;\n        height: 36px;\n        background: rgba(0, 0, 0, 0.075);\n        text-align: center;\n        width: 36px;\n        border-radius: 50%; }\n\n.results-wrapper .results-container {\n    width: 100%; }\n\n.results-wrapper .results-container .results-container-item {\n      width: 100%;\n      margin-bottom: 30px; }\n\n.results-wrapper .results-container .results-container-item:nth-child(2n+1) .results-container-item-content {\n        background: rgba(0, 0, 0, 0.03); }\n\n.results-wrapper .results-container .results-container-item:nth-child(2n) .results-container-item-content {\n        background: rgba(0, 0, 0, 0); }\n\n.results-wrapper .results-container .results-container-item .results-container-item-header {\n        width: 100%; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-header label {\n          text-align: left;\n          margin-top: 15px;\n          color: #444444;\n          font-weight: 300; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content {\n        width: 100%;\n        position: relative;\n        border-left: 4px solid rgba(0, 0, 0, 0);\n        transition: border-left-color 0.3s linear 0s; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content:hover {\n          border-left-color: rgba(0, 0, 0, 0.33); }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table {\n          table-layout: fixed;\n          width: 100%;\n          border-top: 1px solid rgba(0, 0, 0, 0.25); }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr {\n            border-bottom: 1px solid rgba(0, 0, 0, 0.033);\n            width: 100%;\n            display: flex;\n            flex-direction: row;\n            padding: 0px; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td {\n              padding: 0 10px;\n              display: flex;\n              justify-content: flex-start;\n              align-items: center;\n              -webkit-user-select: none;\n                 -moz-user-select: none;\n                  -ms-user-select: none;\n                      user-select: none;\n              height: 48px; }\n\n@media only screen and (min-width: 1200px) {\n                .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.logo {\n                  width: 48px; }\n                .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.who {\n                  width: 250px; }\n                .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what {\n                  width: 200px; }\n                  .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what.bigger {\n                    width: 250px; }\n                .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.where {\n                  width: 300px; } }\n\n@media only screen and (max-width: 1199px) {\n                .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.logo {\n                  width: 48px; }\n                .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.who {\n                  width: 180px; }\n                .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what {\n                  width: 180px; }\n                  .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what.bigger {\n                    width: 250px; }\n                .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.where {\n                  width: 25%; } }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.logo {\n                justify-content: center;\n                height: 48px; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.logo img {\n                  max-width: 24px;\n                  max-height: 24px; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.actionable {\n                outline: none;\n                cursor: pointer;\n                background-color: rgba(0, 0, 0, 0);\n                transition: background-color 0.2s ease 0s; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.actionable:focus, .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.actionable:hover {\n                  background-color: rgba(0, 0, 0, 0.075); }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.who {\n                padding-left: 15px;\n                padding-right: 30px; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what i {\n                opacity: 0.75; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what.bigger {\n                width: 250px; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what span {\n                line-height: 24px;\n                margin-left: 5px;\n                vertical-align: middle; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what span.uncommon-tag {\n                  display: block;\n                  width: 100%;\n                  font-size: x-small; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what i {\n                vertical-align: middle;\n                height: 24px;\n                position: relative;\n                top: -2px; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.why {\n                flex: 1;\n                width: 120px; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.why span.uncommon-tag {\n                  display: inline-block;\n                  padding: 1px 10px;\n                  font-size: xx-small;\n                  background: rgba(0, 0, 0, 0.075);\n                  color: #000;\n                  letter-spacing: 1px;\n                  cursor: pointer;\n                  transition: background-color 0.2s ease 0s, color 0.2s ease 0s;\n                  opacity: 0.75; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.why span.uncommon-tag:focus, .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.why span.uncommon-tag:hover {\n                    opacity: 1;\n                    background-color: rgba(0, 0, 0, 0.8);\n                    color: #fff; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td .result-item-value {\n                font-size: small;\n                color: #444444;\n                width: 100%;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n                overflow-x: hidden; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content:not(.more-rows-tag) .more-rows-tag {\n          display: none; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content.more {\n          margin-bottom: 36px; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content.more .more-rows-tag {\n            display: block;\n            bottom: -24px;\n            left: 0;\n            position: absolute;\n            width: 100%;\n            height: 24px;\n            background-color: rgba(0, 0, 0, 0.025);\n            text-align: left;\n            cursor: pointer;\n            transition: background-color 0.2s ease 0s; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content.more .more-rows-tag:focus, .results-wrapper .results-container .results-container-item .results-container-item-content.more .more-rows-tag:hover {\n              background-color: rgba(0, 0, 0, 0.1); }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content.more .more-rows-tag i {\n              width: 68px;\n              text-align: center; }\n\n.search-wrapper {\n  flex-direction: column;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%; }\n\n.search-wrapper .search-bar-holder {\n    min-width: 600px;\n    margin: 30px 0;\n    border: none;\n    position: relative;\n    height: 48px;\n    border-radius: 4px;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    outline: none; }\n\n.search-wrapper .search-bar-holder input {\n      background: rgba(255, 255, 255, 0.05);\n      line-height: 46px;\n      width: 100%;\n      padding: 0 48px 0 48px;\n      border: none;\n      outline: none;\n      color: rgba(255, 255, 255, 0.8); }\n\n.search-wrapper .search-bar-holder input:hover, .search-wrapper .search-bar-holder input:active, .search-wrapper .search-bar-holder input:focus {\n        background: rgba(255, 255, 255, 0.1); }\n\n.search-wrapper .search-bar-holder input::-webkit-input-placeholder {\n        /* Chrome/Opera/Safari */\n        color: #d0d0d0;\n        font-size: small;\n        text-align: left; }\n\n.search-wrapper .search-bar-holder input::-moz-placeholder {\n        /* Firefox 19+ */\n        color: #d0d0d0;\n        font-size: small;\n        text-align: left; }\n\n.search-wrapper .search-bar-holder input:-ms-input-placeholder {\n        /* IE 10+ */\n        color: #d0d0d0;\n        font-size: small;\n        text-align: left; }\n\n.search-wrapper .search-bar-holder input:-moz-placeholder {\n        /* Firefox 18- */\n        color: #d0d0d0;\n        font-size: small;\n        text-align: left; }\n\n.search-wrapper .search-bar-holder i {\n      position: absolute;\n      right: 0;\n      top: 0;\n      line-height: 48px;\n      width: 48px;\n      text-align: center;\n      font-size: medium;\n      color: #f0f0f0; }\n\n.search-wrapper .search-bar-holder i.search-icon {\n        left: 0; }\n\n.search-wrapper .search-bar-holder i.advanced-icon {\n        right: 2px;\n        font-size: medium;\n        color: rgba(255, 255, 255, 0.75); }\n\n.search-wrapper .search-bar-holder i.advanced-icon:not(.active-icon) {\n          outline: none;\n          cursor: pointer;\n          background-color: rgba(0, 0, 0, 0);\n          transition: background-color 0.2s ease 0s; }\n\n.search-wrapper .search-bar-holder i.advanced-icon:not(.active-icon):focus, .search-wrapper .search-bar-holder i.advanced-icon:not(.active-icon):hover {\n            background-color: rgba(0, 0, 0, 0.05); }\n\n.search-wrapper .search-bar-holder i.active-icon {\n        color: #3f51b5;\n        background-color: rgba(255, 255, 255, 0.9); }\n\n.mat-icon-holder:after {\n  font-family: 'Material Icons Outlined';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased; }\n\n.flex-content {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between; }\n\n.flex-content-left {\n    flex: 1;\n    display: flex;\n    flex-flow: row;\n    align-items: center; }\n\n.flex-content-right {\n    flex: initial;\n    display: flex;\n    flex-flow: row;\n    align-items: center; }\n\n.md-outline-icon {\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  display: inline-block;\n  margin-right: 10px; }\n\n.home-container .home-header {\n  background: rgba(63, 81, 181, 0.1);\n  color: rgba(255, 255, 255, 0.75);\n  position: relative; }\n\n.home-container .home-header .overlay {\n    background-color: rgba(0, 0, 0, 0.8);\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    overflow: hidden; }\n\n.home-container .home-header .overlay:before {\n      content: '';\n      background-image: url('telephone.jpg');\n      background-repeat: no-repeat;\n      background-size: cover;\n      width: 110%;\n      height: 110%;\n      position: absolute;\n      top: -5%;\n      left: -5%;\n      z-index: 1;\n      -webkit-filter: blur(10px);\n              filter: blur(10px); }\n\n.home-container .home-header .overlay:after {\n      content: '';\n      background-color: rgba(0, 0, 0, 0.2);\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 2; }\n\n.home-container .home-header .container {\n    position: relative;\n    padding: 60px 0 15px 0;\n    z-index: 3; }\n\n.home-container .home-header .container h1 {\n      margin: 90px 0 30px 0;\n      text-align: center;\n      color: white;\n      font-weight: 400;\n      text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25); }\n\n.home-container .home-header .container p {\n      text-align: center;\n      margin-top: 30px; }\n\n.home-container .home-header .container p strong {\n        color: white; }\n\n.home-container .home-header .btn-container {\n    margin: 45px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\n.home-container .home-content .container {\n  padding: 60px 0; }\n\n.home-container .home-content .top-queries-wrapper .top-queries-holder {\n  display: flex;\n  flex-flow: row wrap; }\n\n.home-container .home-content .top-queries-wrapper .top-queries-holder a {\n    cursor: pointer;\n    font-size: medium;\n    padding: 0 15px;\n    margin: 5px 15px 5px 0;\n    text-decoration: none;\n    color: rgba(68, 68, 68, 0.75);\n    line-height: 48px;\n    background: rgba(0, 0, 0, 0.05); }\n\n.home-container .home-content .top-queries-wrapper .top-queries-holder a:active, .home-container .home-content .top-queries-wrapper .top-queries-holder a:hover {\n      background: rgba(0, 0, 0, 0.05);\n      cursor: pointer; }\n\n.home-container .home-content .top-queries-wrapper .top-queries-holder a:active {\n      background: rgba(0, 0, 0, 0.1);\n      -webkit-transform: scale(0.98, 0.98);\n      transform: scale(0.98, 0.98); }\n\n.home-container .home-content .top-queries-wrapper .top-queries-holder a.disabled, .home-container .home-content .top-queries-wrapper .top-queries-holder a[disabled], .home-container .home-content .top-queries-wrapper .top-queries-holder a[like-disabled=\"true\"] {\n      opacity: 0.6; }\n\n.home-container .home-content .top-queries-wrapper .top-queries-holder a.disabled:active, .home-container .home-content .top-queries-wrapper .top-queries-holder a.disabled:hover, .home-container .home-content .top-queries-wrapper .top-queries-holder a[disabled]:active, .home-container .home-content .top-queries-wrapper .top-queries-holder a[disabled]:hover, .home-container .home-content .top-queries-wrapper .top-queries-holder a[like-disabled=\"true\"]:active, .home-container .home-content .top-queries-wrapper .top-queries-holder a[like-disabled=\"true\"]:hover {\n        background: transparent;\n        cursor: default; }\n\n.home-container .home-content .top-queries-wrapper .top-queries-holder a.disabled:active, .home-container .home-content .top-queries-wrapper .top-queries-holder a[disabled]:active, .home-container .home-content .top-queries-wrapper .top-queries-holder a[like-disabled=\"true\"]:active {\n        -webkit-transform: none;\n        transform: none; }\n"

/***/ }),

/***/ "./src-ui/app/home/home.component.ts":
/*!*******************************************!*\
  !*** ./src-ui/app/home/home.component.ts ***!
  \*******************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src-ui/app/app.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src-ui/app/data.service.ts");
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../builder */ "./src-ui/app/builder.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(appService, dataService, router) {
        this.appService = appService;
        this.dataService = dataService;
        this.router = router;
        this.itemsThree = [1, 2, 3];
        this.itemsFive = [1, 2, 3, 4, 5];
        this.params = {
            'apps': [
                'com.facebook.katana',
                'com.google.android.talk',
                'com.google.android.apps.cloudprint',
                'com.twitter.android',
                'com.zhiliaoapp.musically',
            ]
        };
        this.queries = [
            {
                label: 'Which apps send data to Facebook ? ', params: {
                    'hosts': [
                        'www.facebook.com',
                        'm.facebook.com',
                        'graph.facebook.com'
                    ]
                }
            },
            {
                label: 'What data is sent by fitness apps ? ', params: {
                    'categories': ['Health & Fitness']
                }
            }
        ];
        this.rowGroups = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.showLoader();
        this.appService.hideHeader();
        this.dataService.getBaseRelationships(this.params, 0, 100).subscribe(function (data) { return _this.buildRows(data, true); });
    };
    HomeComponent.prototype.openLink = function (query) {
        if (!lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"](query.params)) {
            this.router.navigate(['results'], {
                queryParams: query.params
            });
        }
    };
    HomeComponent.prototype.openAdvancedModal = function () {
        this.appService.showAdvancedFilter();
    };
    HomeComponent.prototype.buildRows = function (data, forceExpand) {
        if (forceExpand === void 0) { forceExpand = false; }
        var groupData = Object(_builder__WEBPACK_IMPORTED_MODULE_3__["BuildRowGroups"])(data, forceExpand);
        this.rowGroups = Object(_builder__WEBPACK_IMPORTED_MODULE_3__["SortRowGroups"])(groupData.rowGroups, 'what', 'ASC');
        this.appService.hideLoader();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src-ui/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src-ui/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src-ui/app/paginator-labels.service.ts":
/*!************************************************!*\
  !*** ./src-ui/app/paginator-labels.service.ts ***!
  \************************************************/
/*! exports provided: MatPaginatorIntlCro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntlCro", function() { return MatPaginatorIntlCro; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MatPaginatorIntlCro = /** @class */ (function (_super) {
    __extends(MatPaginatorIntlCro, _super);
    function MatPaginatorIntlCro() {
        var _this = _super.call(this) || this;
        _this.itemsPerPageLabel = 'Apps per page';
        _this.getRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
                return '0 of ' + length;
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            var endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return startIndex + 1 + ' - ' + endIndex; // + ' of ' + length;
        };
        return _this;
    }
    return MatPaginatorIntlCro;
}(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatPaginatorIntl"]));



/***/ }),

/***/ "./src-ui/app/results/results.component.html":
/*!***************************************************!*\
  !*** ./src-ui/app/results/results.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container\">\n    <div class=\"search-header\">\n        <div class=\"container flex-content noPaddingBottom\" [attr.type]=\"currentTypeDetails\">\n            <div class=\"flex-content-left search-details\" *ngIf=\"!showTypeDetails\">\n                <ng-container *ngIf=\"currentTypeDetails === 'plain-search'\">\n                    <label>Showing data for all Apps</label>\n                </ng-container>\n                <p *ngFor=\"let itemGroup of queryParamsView\">\n                    <strong>{{itemGroup.label}}</strong>\n                    <ng-container *ngIf=\"itemGroup.id === 'hosts' || itemGroup.id === 'categories' || itemGroup.id === 'purposes'\">\n                        <span (click)=\"removeSearchParam(itemGroup.id, item)\" class=\"search-item\" *ngFor=\"let item of itemGroup.items\">{{item}}</span>\n                    </ng-container>\n                    <ng-container *ngIf=\"itemGroup.id === 'types'\">\n                        <span (click)=\"removeSearchParam(itemGroup.id, item)\" class=\"search-item\" *ngFor=\"let item of itemGroup.items\">{{item.label}}</span>\n                    </ng-container>\n                </p>\n            </div>\n            <div class=\"flex-content-left type-details\" *ngIf=\"showTypeDetails\">\n                <ng-container *ngIf=\"currentTypeDetails === 'who'\">\n                    <img [attr.src]=\"appDetails?.icon\" />\n                    <div class=\"type-details-specifics\">\n                        <label>What data is <span>sent</span> by <strong>{{appDetails?.title}}</strong> ?</label>\n                        <p>{{appDetails?.summary}}</p>\n                    </div>\n                </ng-container>\n                <ng-container *ngIf=\"currentTypeDetails === 'where'\">\n                    <img [attr.src]=\"hostDetails?.icon\" />\n                    <div class=\"type-details-specifics\">\n                        <label class=\"who_company\" *ngIf=\"hostDetails?.who_company\"><span class=\"not-colored\">{{hostDetails?.who_company}}</span></label>\n                        <label>What data is <span>collected</span> by\n                            <strong >{{hostDetails?.host}} </strong>?\n                        </label>\n                        <p>{{hostDetails?.wiki_company}}</p>\n                    </div>\n                </ng-container>\n            </div>\n            <div class=\"flex-content-right\">\n                <button mat-raised-button *ngIf=\"showPurposeDistrbution\" color=\"primary\"\n                    (click)=\"openDistributionChartForPie()\">Purpose Distribution</button>\n                <button mat-raised-button *ngIf=\"showCategoryDistribution\" color=\"primary\"\n                    (click)=\"openDistributionChartForBar()\">Category-wise Distribution</button>\n            </div>\n        </div>\n        <div class=\"container flex-content statistics-item-holder\"\n            *ngIf=\"statistics.length > 0\">\n            <div class=\"statistics-item\" *ngFor=\"let stat of statistics\">\n                <label class=\"upper\">{{stat.value}}</label>\n                <label class=\"lower\">{{stat.key}}</label>\n            </div>\n        </div>\n    </div>\n    <div class=\"search-content\">\n        <div class=\"container position-relative\">\n            <div class=\"results-header\" style=\"z-index: 2;\" *ngIf=\"showGroupControl\">\n                <div class=\"results-group-toggle\">\n                    <mat-menu #appMenu=\"matMenu\">\n                        <button mat-menu-item *ngIf=\"currentTypeDetails !== 'who'\">Who</button>\n                        <button mat-menu-item>What</button>\n                        <button mat-menu-item>Where</button>\n                        <button mat-menu-item>Why</button>\n                    </mat-menu>\n                    <label>Group By: </label><button mat-stroked-button\n                        [matMenuTriggerFor]=\"appMenu\">{{groupedByColumn}} <i class=\"material-icons\"> arrow_drop_down\n                        </i></button>\n                </div>\n            </div>\n            <div class=\"results-header mb-0\" style=\"z-index: 1;\">\n                <div class=\"results-header-total\">\n                    <table>\n                        <thead>\n                            <tr>\n                                <ng-container *ngFor=\"let col of columnOptions\">\n                                    <td *ngIf=\"col.show\" [ngClass]=\"col.id\"\n                                        [class.bigger]=\"currentTypeDetails === 'who' || currentTypeDetails === 'where'\"\n                                        [class.ascending]=\"activeSorterDirection === 'ASC'\"\n                                        [class.descending]=\"activeSorterDirection === 'DESC'\"\n                                        [class.sorterActive]=\"activeSorterCol === col.id\"\n                                        (click)=\"onColumnClicked(col)\">\n                                        {{col.name}}</td>\n                                </ng-container>\n                            </tr>\n                        </thead>\n                    </table>\n                </div>\n            </div>\n            <div class=\"results-wrapper pt-0 pb-0\">\n                <div class=\"results-container\">\n                    <ng-container *ngFor=\"let group of rowGroups; let i = index;\">\n                        <div class=\"results-container-item\" *ngIf=\"group.rows.length > 0\">\n                            <div class=\"results-container-item-content\" [class.more]=\"group.rows.length > 5 && false\">\n                                <table>\n                                    <tbody>\n                                        <ng-container *ngFor=\"let row of group.rows; let j = index;\">\n                                            <!--*ngIf=\"j < 5 || (group.expanded && j >= 5) || true\"-->\n                                            <tr>\n                                                <td class=\"logo\" *ngIf=\"currentTypeDetails !== 'who'\">\n                                                    <img [attr.src]=\"row.icon\" />\n                                                </td>\n                                                <td class=\"who actionable\" [routerLink]=\"['/results/who/' + row.app]\"\n                                                    *ngIf=\"currentTypeDetails !== 'who'\">\n                                                    <div class=\"result-item-value\"><span>{{row.title}}</span> sends </div>\n                                                </td>\n                                                <td class=\"what actionable\" [routerLink]=\"['/results']\" [queryParams]=\"{types: [row.type]}\" [matTooltip]=\"row.typeInfo?.description\" matTooltipPosition=\"above\" matTooltipClass=\"phone-data-tooltip\"\n                                                    [class.bigger]=\"currentTypeDetails === 'who' || currentTypeDetails === 'where'\">\n                                                    <div class=\"result-item-value\"><i\n                                                            [ngClass]=\"row.typeInfo.icon\"></i><span>{{row.typeInfo?.label}}\n                                                            data</span>\n                                                    </div>\n                                                </td>\n                                                <td class=\"where actionable\"\n                                                    [routerLink]=\"['/results/where/' + row.host]\"\n                                                    *ngIf=\"currentTypeDetails !== 'where'\">\n                                                    <div class=\"result-item-value\"><span>to {{row.host}}</span>\n                                                    </div>\n                                                </td>\n                                                <td class=\"why actionable\" [routerLink]=\"['/results']\" [queryParams]=\"{purposes: [row.purpose]}\">\n                                                    <div class=\"result-item-value\">\n                                                        <span>{{row.purposeInfo?.label}}</span>\n                                                        <span *ngIf=\"false\"><br /><span\n                                                                class=\"uncommon-tag\">UNCOMMON</span></span></div>\n                                                </td>\n                                            </tr>\n                                        </ng-container>\n                                    </tbody>\n                                </table>\n                                <div class=\"more-rows-tag\" *ngIf=\"group.rows.length > 5 && showExpander && false\"\n                                    (click)=\"group.expanded = !group.expanded\">\n                                    <i class=\"material-icons\">more_horiz</i>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"search-footer\" *ngIf=\"showPaginator\">\n        <div class=\"container position-relative p-0\">\n            <label class=\"footer-label\" *ngIf=\"false\">Total {{totalSize}} {{entityLabel}}</label>\n            <mat-paginator [length]=\"totalSize\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\"\n                (page)=\"onPageEvent($event)\">\n            </mat-paginator>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src-ui/app/results/results.component.scss":
/*!***************************************************!*\
  !*** ./src-ui/app/results/results.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes slide-in-from-top {\n  0% {\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px); }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@keyframes slide-in-from-top {\n  0% {\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px); }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@-webkit-keyframes slide-in-from-right {\n  0% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n@keyframes slide-in-from-right {\n  0% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n.results-wrapper {\n  padding: 60px 0; }\n\n.results-wrapper:not(:last-of-type) {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n.results-wrapper label {\n    margin-bottom: 15px;\n    text-align: left;\n    color: black;\n    width: 100%;\n    font-size: large;\n    font-weight: 500; }\n\n.results-wrapper .process-steps {\n    list-style: none;\n    padding: 0; }\n\n.results-wrapper .process-steps li {\n      padding-left: 60px;\n      margin: 30px 0;\n      position: relative;\n      max-width: 75%; }\n\n.results-wrapper .process-steps li:before {\n        content: attr(data-index);\n        position: absolute;\n        left: 0px;\n        top: 0;\n        line-height: 36px;\n        height: 36px;\n        background: rgba(0, 0, 0, 0.075);\n        text-align: center;\n        width: 36px;\n        border-radius: 50%; }\n\n.results-wrapper .results-container {\n    width: 100%; }\n\n.results-wrapper .results-container .results-container-item {\n      width: 100%;\n      margin-bottom: 30px; }\n\n.results-wrapper .results-container .results-container-item:nth-child(2n+1) .results-container-item-content {\n        background: rgba(0, 0, 0, 0.03); }\n\n.results-wrapper .results-container .results-container-item:nth-child(2n) .results-container-item-content {\n        background: rgba(0, 0, 0, 0); }\n\n.results-wrapper .results-container .results-container-item .results-container-item-header {\n        width: 100%; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-header label {\n          text-align: left;\n          margin-top: 15px;\n          color: #444444;\n          font-weight: 300; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content {\n        width: 100%;\n        position: relative;\n        border-left: 4px solid rgba(0, 0, 0, 0);\n        transition: border-left-color 0.3s linear 0s; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content:hover {\n          border-left-color: rgba(0, 0, 0, 0.33); }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table {\n          table-layout: fixed;\n          width: 100%;\n          border-top: 1px solid rgba(0, 0, 0, 0.25); }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr {\n            border-bottom: 1px solid rgba(0, 0, 0, 0.033);\n            width: 100%;\n            display: flex;\n            flex-direction: row;\n            padding: 0px; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td {\n              padding: 0 10px;\n              display: flex;\n              justify-content: flex-start;\n              align-items: center;\n              -webkit-user-select: none;\n                 -moz-user-select: none;\n                  -ms-user-select: none;\n                      user-select: none;\n              height: 48px; }\n\n@media only screen and (min-width: 1200px) {\n                .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.logo {\n                  width: 48px; }\n                .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.who {\n                  width: 250px; }\n                .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what {\n                  width: 200px; }\n                  .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what.bigger {\n                    width: 250px; }\n                .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.where {\n                  width: 300px; } }\n\n@media only screen and (max-width: 1199px) {\n                .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.logo {\n                  width: 48px; }\n                .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.who {\n                  width: 180px; }\n                .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what {\n                  width: 180px; }\n                  .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what.bigger {\n                    width: 250px; }\n                .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.where {\n                  width: 25%; } }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.logo {\n                justify-content: center;\n                height: 48px; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.logo img {\n                  max-width: 24px;\n                  max-height: 24px; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.actionable {\n                outline: none;\n                cursor: pointer;\n                background-color: rgba(0, 0, 0, 0);\n                transition: background-color 0.2s ease 0s; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.actionable:focus, .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.actionable:hover {\n                  background-color: rgba(0, 0, 0, 0.075); }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.who {\n                padding-left: 15px;\n                padding-right: 30px; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what i {\n                opacity: 0.75; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what.bigger {\n                width: 250px; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what span {\n                line-height: 24px;\n                margin-left: 5px;\n                vertical-align: middle; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what span.uncommon-tag {\n                  display: block;\n                  width: 100%;\n                  font-size: x-small; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.what i {\n                vertical-align: middle;\n                height: 24px;\n                position: relative;\n                top: -2px; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.why {\n                flex: 1;\n                width: 120px; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.why span.uncommon-tag {\n                  display: inline-block;\n                  padding: 1px 10px;\n                  font-size: xx-small;\n                  background: rgba(0, 0, 0, 0.075);\n                  color: #000;\n                  letter-spacing: 1px;\n                  cursor: pointer;\n                  transition: background-color 0.2s ease 0s, color 0.2s ease 0s;\n                  opacity: 0.75; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.why span.uncommon-tag:focus, .results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td.why span.uncommon-tag:hover {\n                    opacity: 1;\n                    background-color: rgba(0, 0, 0, 0.8);\n                    color: #fff; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content table tbody tr td .result-item-value {\n                font-size: small;\n                color: #444444;\n                width: 100%;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n                overflow-x: hidden; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content:not(.more-rows-tag) .more-rows-tag {\n          display: none; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content.more {\n          margin-bottom: 36px; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content.more .more-rows-tag {\n            display: block;\n            bottom: -24px;\n            left: 0;\n            position: absolute;\n            width: 100%;\n            height: 24px;\n            background-color: rgba(0, 0, 0, 0.025);\n            text-align: left;\n            cursor: pointer;\n            transition: background-color 0.2s ease 0s; }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content.more .more-rows-tag:focus, .results-wrapper .results-container .results-container-item .results-container-item-content.more .more-rows-tag:hover {\n              background-color: rgba(0, 0, 0, 0.1); }\n\n.results-wrapper .results-container .results-container-item .results-container-item-content.more .more-rows-tag i {\n              width: 68px;\n              text-align: center; }\n\n.search-wrapper {\n  flex-direction: column;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%; }\n\n.search-wrapper .search-bar-holder {\n    min-width: 600px;\n    margin: 30px 0;\n    border: none;\n    position: relative;\n    height: 48px;\n    border-radius: 4px;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    outline: none; }\n\n.search-wrapper .search-bar-holder input {\n      background: rgba(255, 255, 255, 0.05);\n      line-height: 46px;\n      width: 100%;\n      padding: 0 48px 0 48px;\n      border: none;\n      outline: none;\n      color: rgba(255, 255, 255, 0.8); }\n\n.search-wrapper .search-bar-holder input:hover, .search-wrapper .search-bar-holder input:active, .search-wrapper .search-bar-holder input:focus {\n        background: rgba(255, 255, 255, 0.1); }\n\n.search-wrapper .search-bar-holder input::-webkit-input-placeholder {\n        /* Chrome/Opera/Safari */\n        color: #d0d0d0;\n        font-size: small;\n        text-align: left; }\n\n.search-wrapper .search-bar-holder input::-moz-placeholder {\n        /* Firefox 19+ */\n        color: #d0d0d0;\n        font-size: small;\n        text-align: left; }\n\n.search-wrapper .search-bar-holder input:-ms-input-placeholder {\n        /* IE 10+ */\n        color: #d0d0d0;\n        font-size: small;\n        text-align: left; }\n\n.search-wrapper .search-bar-holder input:-moz-placeholder {\n        /* Firefox 18- */\n        color: #d0d0d0;\n        font-size: small;\n        text-align: left; }\n\n.search-wrapper .search-bar-holder i {\n      position: absolute;\n      right: 0;\n      top: 0;\n      line-height: 48px;\n      width: 48px;\n      text-align: center;\n      font-size: medium;\n      color: #f0f0f0; }\n\n.search-wrapper .search-bar-holder i.search-icon {\n        left: 0; }\n\n.search-wrapper .search-bar-holder i.advanced-icon {\n        right: 2px;\n        font-size: medium;\n        color: rgba(255, 255, 255, 0.75); }\n\n.search-wrapper .search-bar-holder i.advanced-icon:not(.active-icon) {\n          outline: none;\n          cursor: pointer;\n          background-color: rgba(0, 0, 0, 0);\n          transition: background-color 0.2s ease 0s; }\n\n.search-wrapper .search-bar-holder i.advanced-icon:not(.active-icon):focus, .search-wrapper .search-bar-holder i.advanced-icon:not(.active-icon):hover {\n            background-color: rgba(0, 0, 0, 0.05); }\n\n.search-wrapper .search-bar-holder i.active-icon {\n        color: #3f51b5;\n        background-color: rgba(255, 255, 255, 0.9); }\n\n.mat-icon-holder:after {\n  font-family: 'Material Icons Outlined';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased; }\n\n.flex-content {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between; }\n\n.flex-content-left {\n    flex: 1;\n    display: flex;\n    flex-flow: row;\n    align-items: center; }\n\n.flex-content-right {\n    flex: initial;\n    display: flex;\n    flex-flow: row;\n    align-items: center; }\n\n.md-outline-icon {\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  display: inline-block;\n  margin-right: 10px; }\n\n.search-container .search-header {\n  background: rgba(63, 81, 181, 0);\n  padding-top: 60px; }\n\n.search-container .search-header .container {\n    padding: 60px 0;\n    border-bottom: 1px solid rgba(63, 81, 181, 0.1); }\n\n.search-container .search-header .container.statistics-item-holder {\n      display: flex;\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      align-items: flex-start;\n      padding: 60px 0 0 0;\n      border-bottom: 1px solid rgba(63, 81, 181, 0); }\n\n.search-container .search-header .container.statistics-item-holder .statistics-item {\n        background: #f6f6f6;\n        padding: 15px;\n        margin: 0 15px 15px 0;\n        min-width: 25%; }\n\n.search-container .search-header .container.statistics-item-holder .statistics-item label {\n          display: block;\n          margin: 0; }\n\n.search-container .search-header .container.statistics-item-holder .statistics-item label.upper {\n            font-size: x-large;\n            font-weight: 400;\n            color: #444444; }\n\n.search-container .search-header .container.statistics-item-holder .statistics-item label.lower {\n            font-size: small;\n            font-weight: 500;\n            color: #444444; }\n\n.search-container .search-header .container[type=\"who\"] {\n      padding-top: 150px;\n      position: relative;\n      padding-bottom: 30px; }\n\n.search-container .search-header .container[type=\"who\"]:after {\n        content: 'Android app';\n        position: absolute;\n        left: 0;\n        top: 20px;\n        height: 100px;\n        line-height: 100px;\n        padding: 0;\n        font-size: 60px;\n        color: #e6e6e6;\n        width: 100%;\n        font-weight: 500;\n        text-transform: capitalize;\n        text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1); }\n\n.search-container .search-header .container[type=\"where\"] {\n      padding-top: 150px;\n      padding-bottom: 30px;\n      position: relative; }\n\n.search-container .search-header .container[type=\"where\"]:after {\n        content: 'Web Service';\n        position: absolute;\n        left: 0;\n        top: 20px;\n        height: 100px;\n        line-height: 100px;\n        padding: 0;\n        font-size: 60px;\n        color: #e6e6e6;\n        width: 100%;\n        font-weight: 500;\n        text-transform: capitalize;\n        text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1); }\n\n.search-container .search-header .container[type=\"advanced-search\"], .search-container .search-header .container[type=\"plain-search\"] {\n      padding-top: 150px;\n      padding-bottom: 30px;\n      position: relative; }\n\n.search-container .search-header .container[type=\"advanced-search\"]:after, .search-container .search-header .container[type=\"plain-search\"]:after {\n        content: 'Search Results';\n        position: absolute;\n        left: 0;\n        top: 20px;\n        height: 100px;\n        line-height: 100px;\n        padding: 0;\n        font-size: 60px;\n        color: #e6e6e6;\n        width: 100%;\n        font-weight: 500;\n        text-transform: capitalize;\n        text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1); }\n\n.search-container .search-header .container .search-details {\n      flex-direction: column;\n      align-items: flex-start; }\n\n.search-container .search-header .container .search-details label {\n        width: 100%;\n        margin: 0;\n        font-size: x-large;\n        margin-bottom: 15px; }\n\n.search-container .search-header .container .search-details strong {\n        margin-right: 10px; }\n\n.search-container .search-header .container .search-details span.search-item {\n        padding: 0 8px 0px 8px;\n        background: rgba(0, 0, 0, 0.05);\n        margin: 0px 5px 5px 0;\n        display: inline-block;\n        position: relative;\n        line-height: 30px; }\n\n.search-container .search-header .container h2 {\n      text-align: left;\n      font-weight: 100; }\n\n.search-container .search-header .container p {\n      text-align: left;\n      font-weight: 300;\n      margin: 0px;\n      line-height: 36px; }\n\n.search-container .search-header .container p strong {\n        font-weight: 600; }\n\n.search-container .search-header .container button {\n      margin-left: 15px; }\n\n.search-container .search-header .container .type-details img {\n      max-width: 75px;\n      max-height: 75px;\n      margin-right: 30px; }\n\n.search-container .search-header .container .type-details .type-details-specifics label {\n      margin: 0;\n      font-size: x-large; }\n\n.search-container .search-header .container .type-details .type-details-specifics label.who_company {\n        text-align: left;\n        font-weight: bold;\n        opacity: 0.50;\n        margin: 0px;\n        line-height: 36px;\n        font-size: medium;\n        display: block; }\n\n.search-container .search-header .container .type-details .type-details-specifics label span:not(.not-colored) {\n        color: #3f51b5; }\n\n.search-container .search-header .container .type-details .type-details-specifics p {\n      line-height: normal; }\n\n.search-container .search-footer {\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  background-color: #ffffff;\n  width: 100%;\n  height: 60px;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25); }\n\n.search-container .search-footer label.footer-label {\n    left: 0;\n    position: absolute;\n    line-height: 60px;\n    margin: 0;\n    font-size: small;\n    color: #777777; }\n\n.search-container .search-content {\n  padding-bottom: 48px; }\n\n.search-container .search-content .container {\n    padding: 30px 0px 0px 0; }\n\n.search-container .search-content .container .results-header {\n      width: 100%;\n      display: flex;\n      flex-flow: row;\n      position: relative; }\n\n.search-container .search-content .container .results-header .results-group-toggle {\n        position: absolute;\n        top: 9px;\n        right: 0; }\n\n.search-container .search-content .container .results-header .results-group-toggle label {\n          line-height: 36px;\n          margin-bottom: 0;\n          margin-right: 10px;\n          text-transform: uppercase;\n          font-size: small;\n          font-weight: bold;\n          color: #909090;\n          letter-spacing: 1px; }\n\n.search-container .search-content .container .results-header .results-header-total {\n        width: 100%; }\n\n.search-container .search-content .container .results-header .results-header-total table {\n          table-layout: fixed;\n          width: 100%; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr {\n            border-bottom: 1px solid rgba(0, 0, 0, 0.033);\n            width: 100%;\n            display: flex;\n            flex-direction: row;\n            padding: 0px; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td {\n              padding: 0 10px;\n              display: flex;\n              justify-content: flex-start;\n              align-items: center;\n              line-height: 48px;\n              font-size: medium;\n              border-top: 3px solid rgba(0, 0, 0, 0);\n              outline: none;\n              cursor: pointer;\n              background-color: rgba(0, 0, 0, 0);\n              transition: background-color 0.2s ease 0s;\n              -webkit-user-select: none;\n                 -moz-user-select: none;\n                  -ms-user-select: none;\n                      user-select: none; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td:focus, .search-container .search-content .container .results-header .results-header-total table thead tr td:hover {\n                background-color: rgba(0, 0, 0, 0.05); }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td.sorterActive {\n                position: relative;\n                border-top: 3px solid rgba(0, 0, 0, 0); }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td.sorterActive:after {\n                  font-family: 'Material Icons Outlined';\n                  font-weight: normal;\n                  font-style: normal;\n                  font-size: 24px;\n                  line-height: 1;\n                  letter-spacing: normal;\n                  text-transform: none;\n                  display: inline-block;\n                  white-space: nowrap;\n                  word-wrap: normal;\n                  direction: ltr;\n                  -webkit-font-feature-settings: 'liga';\n                  -webkit-font-smoothing: antialiased; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td.sorterActive:after {\n                  font-size: medium;\n                  border: 1px solid #3f51b5;\n                  color: #3f51b5;\n                  width: 24px;\n                  height: 24px;\n                  text-align: center;\n                  line-height: 22px;\n                  border-radius: 50%;\n                  top: 0;\n                  right: 0;\n                  margin-left: 15px; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td.sorterActive.ascending:after {\n                  content: 'arrow_upward'; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td.sorterActive.descending:after {\n                  content: 'arrow_downward'; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td.actionable {\n                outline: none;\n                cursor: pointer;\n                background-color: rgba(0, 0, 0, 0);\n                transition: background-color 0.2s ease 0s; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td.actionable:focus, .search-container .search-content .container .results-header .results-header-total table thead tr td.actionable:hover {\n                  background-color: rgba(0, 0, 0, 0); }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td.who {\n                padding-left: 10px;\n                width: 298px; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td.what {\n                width: 200px; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td.what.bigger {\n                  width: 250px; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td.what i {\n                  opacity: 0.75; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td.what span {\n                  line-height: 24px;\n                  margin-left: 5px;\n                  vertical-align: middle; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td.what span.uncommon-tag {\n                    display: block;\n                    width: 100%;\n                    font-size: x-small; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td.what i {\n                  vertical-align: middle;\n                  height: 24px;\n                  position: relative;\n                  top: -2px; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td.where {\n                width: 300px; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td.why {\n                flex: 1;\n                width: 120px; }\n\n.search-container .search-content .container .results-header .results-header-total table thead tr td .result-item-value {\n                font-size: small;\n                color: #444444; }\n\n.search-container .search-content .container .results-header .results-header-left {\n        order: 1;\n        flex: 1; }\n\n.search-container .search-content .container .results-header .results-header-right {\n        flex: initial;\n        order: 2; }\n\n.search-container .search-content .container .results-header .results-header-right label {\n          margin-right: 15px;\n          font-size: small;\n          color: #707070;\n          margin-bottom: 0; }\n\n.search-container .search-content .container .results-wrapper .results-container .results-container-item {\n      margin-bottom: 30px; }\n\n.search-container .search-content .container .results-wrapper .results-container .results-container-item-content.more {\n      margin-bottom: 48px; }\n\n.search-container .search-content .container .results-wrapper .results-container .results-container-item-content.more .more-rows-tag i {\n        width: 48px; }\n"

/***/ }),

/***/ "./src-ui/app/results/results.component.ts":
/*!*************************************************!*\
  !*** ./src-ui/app/results/results.component.ts ***!
  \*************************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src-ui/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src-ui/app/data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../builder */ "./src-ui/app/builder.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FetchType;
(function (FetchType) {
    FetchType[FetchType["PLAIN_SEARCH"] = 0] = "PLAIN_SEARCH";
    FetchType[FetchType["WHO"] = 1] = "WHO";
    FetchType[FetchType["WHERE"] = 2] = "WHERE";
    FetchType[FetchType["COMPOSITE_SEARCH"] = 3] = "COMPOSITE_SEARCH";
})(FetchType || (FetchType = {}));
var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(appService, dataService, activatedRouter) {
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
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.showHeader();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.activatedRouter.params, this.activatedRouter.queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (results) { return ({ params: results[0], queryParams: results[1] }); }))
            .subscribe(function (results) {
            _this.reset();
            if (lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](results.params) && !lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](results.queryParams)) {
                _this.currentQueryParams = _this.fillParams(results.queryParams);
                _this.fetchCallType = FetchType.COMPOSITE_SEARCH;
                _this.loadNextPage(null);
                _this.buildSearchParamsViewer(_this.currentQueryParams);
                _this.currentTypeDetails = 'advanced-search';
            }
            else {
                _this.currentTypeDetails = 'plain-search';
                var params = results.params;
                _this.showTypeDetails = false;
                if (params && params['type']) {
                    _this.showTypeDetails = true;
                    _this.currentTypeDetails = params['type'];
                    _this.paramId = params['id'];
                    if (_this.currentTypeDetails === 'who') {
                        _this.activeSorterCol = 'what';
                        _this.columnOptions.forEach(function (col) { return col.show = true; });
                        var column = _this.columnOptions.find(function (col) { return col.id === 'who'; });
                        if (column) {
                            column.show = false;
                        }
                    }
                    else if (_this.currentTypeDetails === 'where') {
                        _this.activeSorterCol = 'who';
                        _this.columnOptions.forEach(function (col) { return col.show = true; });
                        var column = _this.columnOptions.find(function (col) { return col.id === 'where'; });
                        if (column) {
                            column.show = false;
                        }
                    }
                }
                _this.fillRows();
            }
            _this.buildStats();
        });
    };
    ResultsComponent.prototype.reset = function () {
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
    };
    ResultsComponent.prototype.fillParams = function (queryParams) {
        var params = {};
        var fields = ['hosts', 'categories', 'types', 'purposes'];
        fields.forEach(function (field) {
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
    };
    ResultsComponent.prototype.fillRows = function () {
        var _this = this;
        if (this.currentTypeDetails === 'plain-search') {
            this.showExpander = true;
            this.showPaginator = true;
            this.entityLabel = 'apps';
            this.dataService.getTotalNoOfApps().subscribe(function (data) { return _this.totalSize = data; });
            this.fetchCallType = FetchType.PLAIN_SEARCH;
        }
        else {
            if (this.currentTypeDetails === 'who') {
                this.showExpander = false;
                this.showPaginator = false;
                this.dataService.getAppDetails(this.paramId).subscribe(function (data) {
                    _this.appDetails = data;
                    if (!_this.appDetails.title) {
                        _this.appDetails.title = _this.appDetails.app;
                    }
                    if (!_this.appDetails.icon) {
                        _this.appDetails.icon = 'assets/playstore_256.png';
                    }
                });
                this.fetchCallType = FetchType.WHO;
            }
            else if (this.currentTypeDetails === 'where') {
                this.showExpander = true;
                this.showPaginator = true;
                this.dataService.getHostDetails(this.paramId).subscribe(function (data) {
                    _this.hostDetails = data;
                    if (!_this.hostDetails.icon) {
                        _this.hostDetails.icon = 'assets/worldwide_256.png';
                    }
                });
                this.fetchCallType = FetchType.WHERE;
            }
        }
        this.loadNextPage(null);
    };
    ResultsComponent.prototype.onColumnClicked = function (column) {
        if (column.id === this.activeSorterCol) {
            this.activeSorterDirection = this.activeSorterDirection === 'ASC' ? 'DESC' : 'ASC';
        }
        else {
            this.activeSorterCol = column.id;
        }
        this.rowGroups = Object(_builder__WEBPACK_IMPORTED_MODULE_7__["SortRowGroups"])(this.rowGroups, this.activeSorterCol, this.activeSorterDirection);
    };
    ResultsComponent.prototype.openDistributionChartForBar = function () {
        this.buildCategoryWiseDistribution();
    };
    ResultsComponent.prototype.openDistributionChartForPie = function () {
        this.buildPurposeDistribution();
    };
    ResultsComponent.prototype.onPageEvent = function (event) {
        this.loadNextPage(event);
    };
    ResultsComponent.prototype.loadNextPage = function (event) {
        var _this = this;
        if (!this.firstCallMade) {
            this.firstCallMade = true;
        }
        else {
            this.skip = event.pageIndex * (event.pageSize);
            this.limit = event.pageSize;
        }
        this.appService.showLoader();
        switch (this.fetchCallType) {
            case FetchType.PLAIN_SEARCH: {
                this.dataService.getRelationships(this.skip, this.limit).subscribe(function (data) { return _this.buildRows(data); });
                break;
            }
            case FetchType.WHO: {
                // tslint:disable-next-line:max-line-length
                this.dataService.getAppRelationships(this.paramId, this.skip, this.limit).subscribe(function (data) { return _this.buildRows(data, true); });
                break;
            }
            case FetchType.WHERE: {
                // tslint:disable-next-line:max-line-length
                this.dataService.getHostRelationships(this.paramId, this.skip, this.limit).subscribe(function (data) { return _this.buildRows(data, true); });
                break;
            }
            case FetchType.COMPOSITE_SEARCH: {
                // tslint:disable-next-line:max-line-length
                this.dataService.getBaseRelationships(this.currentQueryParams, this.skip, this.limit).subscribe(function (data) {
                    _this.buildRows(data);
                });
                break;
            }
        }
    };
    ResultsComponent.prototype.buildRows = function (data, forceExpand) {
        if (forceExpand === void 0) { forceExpand = true; }
        var groupData = Object(_builder__WEBPACK_IMPORTED_MODULE_7__["BuildRowGroups"])(data, forceExpand);
        this.rowGroups = Object(_builder__WEBPACK_IMPORTED_MODULE_7__["SortRowGroups"])(groupData.rowGroups, this.activeSorterCol, this.activeSorterDirection);
        if (this.currentTypeDetails === 'who') {
            this.showPurposeDistrbution = true;
        }
        if (this.currentTypeDetails === 'where') {
            this.showPurposeDistrbution = true;
            this.showCategoryDistribution = true;
        }
        this.appService.hideLoader();
    };
    ResultsComponent.prototype.buildPurposeDistribution = function () {
        var _this = this;
        var params = {};
        if (this.currentTypeDetails === 'who') {
            params['apps'] = [this.paramId];
        }
        if (this.currentTypeDetails === 'where') {
            params['hosts'] = [this.paramId];
        }
        this.appService.showLoader();
        this.dataService.getPurposeDistribution(params).subscribe(function (data) {
            _this.appService.hideLoader();
            var rows = [];
            if (data && data.length > 0) {
                data.forEach(function (item) {
                    var purpose = Object(_builder__WEBPACK_IMPORTED_MODULE_7__["GetPurposeInfo"])(item['_id'].type, item['_id'].purpose);
                    if (purpose) {
                        rows.push([purpose.shortLabel, item.count]);
                    }
                });
            }
            _this.appService.showPieChartModalFilter(rows);
        }, function () {
            _this.appService.hideLoader();
        });
    };
    ResultsComponent.prototype.buildCategoryWiseDistribution = function () {
        var _this = this;
        var params = {};
        if (this.currentTypeDetails === 'where') {
            params['hosts'] = [this.paramId];
            this.appService.showLoader();
            this.dataService.getCategoryWiseDistribution(params).subscribe(function (data) {
                _this.appService.hideLoader();
                var rows = [];
                if (data && data.length > 0) {
                    data.forEach(function (item) {
                        if (item['_id'] && item['_id'].genre && item['_id'].genre.length > 0) {
                            rows.push([item['_id'].genre[0], item.count]);
                        }
                    });
                }
                _this.appService.showChartModalFilter(rows);
            }, function () {
                _this.appService.hideLoader();
            });
        }
    };
    ResultsComponent.prototype.buildSearchParamsViewer = function (params) {
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
                items: params.types.map(function (t) { return Object(_builder__WEBPACK_IMPORTED_MODULE_7__["GetTaxonomyInfo"])(t); })
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
    };
    ResultsComponent.prototype.removeSearchParam = function (groupId, item) {
        return;
    };
    ResultsComponent.prototype.buildStats = function () {
        var _this = this;
        var params = {};
        var fireCall = false;
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
                fireCall = lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](this.currentQueryParams.categories);
                params = this.currentQueryParams;
                break;
            }
        }
        if (fireCall) {
            this.dataService.getStats(params).subscribe(function (data) {
                if (!lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](data)) {
                    data = data[0];
                    for (var prop in data) {
                        if (data[prop]) {
                            var value = data[prop];
                            switch (prop) {
                                case 'POPULAR_PURPOSE': {
                                    var purposeData = value['_id'];
                                    var purposeInfo = Object(_builder__WEBPACK_IMPORTED_MODULE_7__["GetPurposeInfo"])(purposeData.type, purposeData.purpose);
                                    _this.statistics.push({
                                        key: 'is the most popular purpose of data sent here', value: purposeInfo.shortLabel
                                    });
                                    break;
                                }
                                case 'POPULAR_TYPE': {
                                    var typeData = value['_id'];
                                    var typeInfo = Object(_builder__WEBPACK_IMPORTED_MODULE_7__["GetTaxonomyInfo"])(typeData);
                                    _this.statistics.push({
                                        key: 'is the most frequent type of data sent here', value: typeInfo.label
                                    });
                                    break;
                                }
                                case 'POPULAR_HOST': {
                                    var hostData = value['_id'];
                                    _this.statistics.push({
                                        key: 'is the most popular destination for data', value: hostData.host
                                    });
                                    break;
                                }
                                case 'POPULAR_APP': {
                                    var appData = value['_id'];
                                    _this.statistics.push({
                                        key: 'is the most recurring app here', value: appData.title ? appData.title : appData.app
                                    });
                                    break;
                                }
                            }
                        }
                    }
                }
                console.log(_this.statistics);
            });
        }
    };
    ResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src-ui/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.scss */ "./src-ui/app/results/results.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src-ui/app/search-filter-modal/search-filter-modal.component.html":
/*!***************************************************************************!*\
  !*** ./src-ui/app/search-filter-modal/search-filter-modal.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" *ngIf=\"modalOpened\">\n    <div class=\"overlay\" (click)=\"closeModal()\"></div>\n    <div class=\"container modal-content\" style=\"max-width: 1000px;\">\n        <div class=\"header-wrapper\">\n            <h2>Search</h2>\n            <label>\n                <strong>Current Query:</strong>\n                <span class=\"empty\" *ngIf=\"activeParams.length === 0\">Empty</span>\n                <span *ngIf=\"activeParams.length > 0\">\n                    <ng-container *ngFor=\"let itemGroup of activeParams\">\n                        <span class=\"param-type\" *ngFor=\"let item of itemGroup.items\" >\n                            <ng-container *ngIf=\"itemGroup.id === 'categories'\"><span>{{item.key}}</span></ng-container>\n                            <ng-container *ngIf=\"itemGroup.id === 'types'\"><span>{{item.label}}</span></ng-container>\n                            <ng-container *ngIf=\"itemGroup.id === 'purposes'\"><span>{{item.shortLabel}}</span></ng-container>\n                        </span>\n                    </ng-container>\n                </span>\n            </label>\n        </div>\n        <div class=\"content-wrapper\">\n            <div class=\"search-filter-content\">\n                <div class=\"radio-container\" *ngIf=\"false\">\n                    <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"currentOption\">\n                        <mat-radio-button value=\"1\">Search in the list of apps which send data</mat-radio-button>\n                        <mat-radio-button value=\"2\">Search in the list of destinations where data is sent\n                        </mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div class=\"input-container\" *ngIf=\"false\">\n                    <input placeholder=\"Enter keyword, for e.g. Instagram or Facebook\" />\n                    <i class=\"material-icons\">search</i>\n                </div>\n                <div class=\"tabs-container\"> \n                    <!-- <label><strong>Additional Filters</strong></label> -->\n                    <div class=\"tabs-content-wrapper\">\n                        <mat-tab-group dynamicHeight>\n                            <mat-tab label=\"App Categories\">\n                                <div class=\"tab-content\">\n                                    <div class=\"tab-content-item\" *ngFor=\"let item of categories\">\n                                        <mat-checkbox (change)=\"onQueryChange()\" class=\"example-margin\" [(ngModel)]=\"item.value\">{{item.key}}\n                                        </mat-checkbox>\n                                    </div>\n                                </div>\n                            </mat-tab>\n                            <mat-tab label=\"Type of data being sent\">\n                                <div class=\"tab-content\">\n                                    <div class=\"tab-content-item\" *ngFor=\"let item of dataTypes\">\n                                        <mat-checkbox (change)=\"onQueryChange()\" class=\"example-margin\" [(ngModel)]=\"item.value\">{{item.label}}\n                                        </mat-checkbox>\n                                    </div>\n                                </div>\n                            </mat-tab>\n                            <mat-tab label=\"Purpose of why the data is being sent\">\n                                <div class=\"tab-content\">\n                                    <div class=\"tab-content-item w33\" *ngFor=\"let item of dataPurposes\">\n                                        <mat-checkbox (change)=\"onQueryChange()\" class=\"example-margin\" [(ngModel)]=\"item.value\">{{item.shortLabel}}\n                                        </mat-checkbox>\n                                    </div>\n                                </div>\n                            </mat-tab>\n                        </mat-tab-group>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"footer-wrapper\">\n            <div class=\"footer-wrapper-left\">\n                <button mat-raised-button color=\"primary\" (click)=\"search()\">Search</button>\n                <button mat-raised-button (click)=\"closeModal()\">Cancel</button>\n            </div>\n            <div class=\"footer-wrapper-right\">\n                <button mat-raised-button (click)=\"clearAllSelections()\">Clear</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src-ui/app/search-filter-modal/search-filter-modal.component.scss":
/*!***************************************************************************!*\
  !*** ./src-ui/app/search-filter-modal/search-filter-modal.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-filter-content .radio-container {\n  width: 100%;\n  margin: 15px 0 5px 0; }\n  .search-filter-content .radio-container /deep/ .mat-radio-button:first-of-type {\n    margin-right: 30px; }\n  .search-filter-content .input-container {\n  width: 100%;\n  height: 36px;\n  border: 1px solid #d0d0d0;\n  position: relative; }\n  .search-filter-content .input-container input {\n    line-height: 34px;\n    width: 100%;\n    background: transparent;\n    border: none;\n    padding: 0 15px; }\n  .search-filter-content .input-container input::-webkit-input-placeholder {\n      /* Chrome/Opera/Safari */\n      color: #909090;\n      font-size: small;\n      font-style: italic;\n      text-align: left; }\n  .search-filter-content .input-container input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: #909090;\n      font-size: small;\n      font-style: italic;\n      text-align: left; }\n  .search-filter-content .input-container input:-ms-input-placeholder {\n      /* IE 10+ */\n      color: #909090;\n      font-size: small;\n      font-style: italic;\n      text-align: left; }\n  .search-filter-content .input-container input:-moz-placeholder {\n      /* Firefox 18- */\n      color: #909090;\n      font-size: small;\n      font-style: italic;\n      text-align: left; }\n  .search-filter-content .input-container i {\n    position: absolute;\n    right: 0;\n    top: 0;\n    line-height: 34px;\n    width: 36px;\n    text-align: center;\n    font-size: medium;\n    color: #909090; }\n  .search-filter-content .tabs-container {\n  margin: 0px 0 0 0; }\n  .search-filter-content .tabs-container label {\n    margin: 0; }\n  .search-filter-content .tabs-container .tab-content {\n    width: 100%;\n    display: flex;\n    flex-flow: row wrap;\n    padding: 15px 0; }\n  .search-filter-content .tabs-container .tab-content .tab-content-item {\n      width: 25%; }\n  .search-filter-content .tabs-container .tab-content .tab-content-item.w33 {\n        width: 33%; }\n"

/***/ }),

/***/ "./src-ui/app/search-filter-modal/search-filter-modal.component.ts":
/*!*************************************************************************!*\
  !*** ./src-ui/app/search-filter-modal/search-filter-modal.component.ts ***!
  \*************************************************************************/
/*! exports provided: SearchFilterModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterModalComponent", function() { return SearchFilterModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src-ui/app/app.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src-ui/app/data.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../builder */ "./src-ui/app/builder.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchFilterModalComponent = /** @class */ (function () {
    function SearchFilterModalComponent(appService, dataService, router) {
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
    SearchFilterModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getSearchParams().subscribe(function (data) {
            if (!lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](data.categories)) {
                _this.categories = data.categories
                    .sort(function (a, b) { return a.localeCompare(b); })
                    .map(function (item) {
                    return { key: item, value: false };
                });
            }
            if (!lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](data.types)) {
                _this.dataTypes = Object(_builder__WEBPACK_IMPORTED_MODULE_5__["GetMappedTaxonomies"])(data.types.map(function (item) { return item._id; }));
            }
            if (!lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](data.types) && !lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](data.purposes)) {
                _this.dataPurposes = Object(_builder__WEBPACK_IMPORTED_MODULE_5__["GetMappedTaxonomyPurposes"])(_this.dataTypes, data.purposes.map(function (item) { return item._id; }));
            }
        });
        this.appService.advancedFilterShown$.subscribe(function (data) {
            setTimeout(function () {
                // tslint:disable-next-line:no-unused-expression
                data && _this.openModal();
                // tslint:disable-next-line:no-unused-expression
                !data && _this.closeModal();
            });
        });
    };
    SearchFilterModalComponent.prototype.openModal = function () {
        document.body.classList.add('overflow-hidden');
        this.modalOpened = true;
        this.clearAllSelections();
    };
    SearchFilterModalComponent.prototype.clearAllSelections = function () {
        this.categories.forEach(function (x) { return x.value = false; });
        this.dataPurposes.forEach(function (x) { return x.value = false; });
        this.dataTypes.forEach(function (x) { return x.value = false; });
    };
    SearchFilterModalComponent.prototype.closeModal = function () {
        document.body.classList.remove('overflow-hidden');
        this.modalOpened = false;
    };
    SearchFilterModalComponent.prototype.search = function () {
        var categories = this.categories.filter(function (x) { return x.value; }).map(function (x) { return x.key; });
        var types = this.dataTypes.filter(function (x) { return x.value; }).map(function (x) { return x.dualKey; });
        var purposes = this.dataPurposes.filter(function (x) { return x.value; }).map(function (x) { return x.key; });
        if (categories.length > 0 || types.length > 0 || purposes.length > 0) {
            var params = {};
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
    };
    SearchFilterModalComponent.prototype.onQueryChange = function () {
        this.activeParams = [];
        var categories = this.categories.filter(function (x) { return x.value; });
        var types = this.dataTypes.filter(function (x) { return x.value; });
        var purposes = this.dataPurposes.filter(function (x) { return x.value; });
        if (categories.length > 0) {
            this.activeParams.push({ id: 'categories', items: categories });
        }
        if (types.length > 0) {
            this.activeParams.push({ id: 'types', items: types });
        }
        if (purposes.length > 0) {
            this.activeParams.push({ id: 'purposes', items: purposes });
        }
    };
    SearchFilterModalComponent.prototype.remove = function (group, item) {
        var target = null;
        switch (group) {
            case 'categories': {
                target = this.categories.find(function (x) { return x.key === item.key; });
                break;
            }
            case 'types': {
                target = this.dataTypes.find(function (x) { return x.key === item.key; });
                break;
            }
            case 'purposes': {
                target = this.dataPurposes.find(function (x) { return x.key === item.key; });
                break;
            }
        }
        if (target) {
            target.value = false;
            this.onQueryChange();
        }
    };
    SearchFilterModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-filter-modal',
            template: __webpack_require__(/*! ./search-filter-modal.component.html */ "./src-ui/app/search-filter-modal/search-filter-modal.component.html"),
            styles: [__webpack_require__(/*! ./search-filter-modal.component.scss */ "./src-ui/app/search-filter-modal/search-filter-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SearchFilterModalComponent);
    return SearchFilterModalComponent;
}());



/***/ }),

/***/ "./src-ui/environments/environment.ts":
/*!********************************************!*\
  !*** ./src-ui/environments/environment.ts ***!
  \********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src-ui/main.ts":
/*!************************!*\
  !*** ./src-ui/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src-ui/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src-ui/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src-ui/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/asitparida/Codes/android-networktrace-ui/src-ui/main.ts */"./src-ui/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
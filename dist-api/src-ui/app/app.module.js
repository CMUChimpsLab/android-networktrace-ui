"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const animations_1 = require("@angular/platform-browser/animations");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const highcharts_angular_1 = require("highcharts-angular");
const button_1 = require("@angular/material/button");
const menu_1 = require("@angular/material/menu");
const paginator_1 = require("@angular/material/paginator");
const input_1 = require("@angular/material/input");
const radio_1 = require("@angular/material/radio");
const tabs_1 = require("@angular/material/tabs");
const checkbox_1 = require("@angular/material/checkbox");
const tooltip_1 = require("@angular/material/tooltip");
const select_1 = require("@angular/material/select");
const progress_spinner_1 = require("@angular/material/progress-spinner");
const app_component_1 = require("./app.component");
const home_component_1 = require("./home/home.component");
const app_routing_1 = require("./app.routing");
const results_component_1 = require("./results/results.component");
const header_component_1 = require("./header/header.component");
const app_service_1 = require("./app.service");
const search_filter_modal_component_1 = require("./search-filter-modal/search-filter-modal.component");
const distribution_bar_chart_component_1 = require("./distribution-bar-chart/distribution-bar-chart.component");
const distribution_pie_chart_component_1 = require("./distribution-pie-chart/distribution-pie-chart.component");
const data_service_1 = require("./data.service");
const paginator_labels_service_1 = require("./paginator-labels.service");
const faq_component_1 = require("./faq/faq.component");
const list_component_1 = require("./list/list.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            results_component_1.ResultsComponent,
            header_component_1.HeaderComponent,
            faq_component_1.FAQComponent,
            list_component_1.ListComponent,
            search_filter_modal_component_1.SearchFilterModalComponent,
            distribution_bar_chart_component_1.DistributionBarChartComponent,
            distribution_pie_chart_component_1.DistributionPieChartComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            highcharts_angular_1.HighchartsChartModule,
            animations_1.BrowserAnimationsModule,
            app_routing_1.AppRoutingModule,
            button_1.MatButtonModule,
            menu_1.MatMenuModule,
            paginator_1.MatPaginatorModule,
            input_1.MatInputModule,
            radio_1.MatRadioModule,
            tabs_1.MatTabsModule,
            checkbox_1.MatCheckboxModule,
            tooltip_1.MatTooltipModule,
            select_1.MatSelectModule,
            progress_spinner_1.MatProgressSpinnerModule
        ],
        providers: [
            app_service_1.AppService,
            data_service_1.DataService,
            {
                provide: paginator_1.MatPaginatorIntl, useClass: paginator_labels_service_1.MatPaginatorIntlCro
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

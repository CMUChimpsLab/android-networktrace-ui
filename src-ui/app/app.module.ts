import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import {
  MatPaginatorModule,
  MatPaginatorIntl
} from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app.routing";
import { ResultsComponent } from "./results/results.component";
import { HeaderComponent } from "./header/header.component";
import { AppService } from "./app.service";
import { SearchFilterModalComponent } from "./search-filter-modal/search-filter-modal.component";
import { DistributionBarChartComponent } from "./distribution-bar-chart/distribution-bar-chart.component";
import { DistributionPieChartComponent } from "./distribution-pie-chart/distribution-pie-chart.component";
import { DataService } from "./data.service";
import { MatPaginatorIntlCro } from "./paginator-labels.service";
import { FAQComponent } from "./faq/faq.component";
import { ListComponent } from "./list/list.component";
import { VizComponent } from "./viz/viz.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
    HeaderComponent,
    FAQComponent,
    ListComponent,
    SearchFilterModalComponent,
    DistributionBarChartComponent,
    DistributionPieChartComponent,
    VizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatInputModule,
    MatRadioModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AppService,
    DataService,
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorIntlCro
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

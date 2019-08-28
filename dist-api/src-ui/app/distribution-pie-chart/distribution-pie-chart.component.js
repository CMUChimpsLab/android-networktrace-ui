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
const Highcharts = __importStar(require("highcharts"));
const app_service_1 = require("../app.service");
let DistributionPieChartComponent = class DistributionPieChartComponent {
    constructor(appService) {
        this.appService = appService;
        this.modalOpened = false;
        this.Highcharts = Highcharts;
        this.showChart = false;
        this.chartOptions = Object.assign({}, exports.SimpleConfig);
        this.sortOptions = [
            { value: 'no-of-apps', viewValue: 'No. of apps' },
            { value: 'app-names', viewValue: 'Category Name' },
        ];
        this.selectedOption = this.sortOptions[0].value;
    }
    ngOnInit() {
        this.appService.pieChartModalShown$.subscribe((data) => {
            setTimeout(() => {
                // tslint:disable-next-line:no-unused-expression
                data && this.openModal();
                // tslint:disable-next-line:no-unused-expression
                !data && this.closeModal();
            });
        });
    }
    onSelectionChnage() {
        this.populateData(this.selectedOption);
    }
    populateData(currentSortOption = 'no-of-apps') {
        this.showChart = false;
        let data = this.appService.pieChartModalData;
        if (currentSortOption === 'no-of-apps') {
            data = data.sort((a, b) => b[1] - a[1]);
        }
        else {
            data = data.sort((a, b) => a[0].localeCompare(b[0]));
        }
        const colors = palette('tol-rainbow', data.length);
        this.chartOptions.colorByPoint = true;
        this.chartOptions.colors = colors.map(c => `#${c}`);
        this.chartOptions.series[0].data = data;
        window.requestAnimationFrame(() => {
            this.showChart = true;
        });
    }
    openModal() {
        document.body.classList.add('overflow-hidden');
        this.modalOpened = true;
        setTimeout(() => {
            this.populateData();
        });
    }
    closeModal() {
        document.body.classList.remove('overflow-hidden');
        this.modalOpened = false;
    }
};
DistributionPieChartComponent = __decorate([
    core_1.Component({
        selector: 'app-distribution-pie-chart',
        templateUrl: './distribution-pie-chart.component.html',
        styleUrls: ['./distribution-pie-chart.component.scss']
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], DistributionPieChartComponent);
exports.DistributionPieChartComponent = DistributionPieChartComponent;
exports.SimpleConfig = {
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
exports.MockBarChartData = [
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

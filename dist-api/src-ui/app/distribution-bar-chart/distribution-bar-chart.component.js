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
let DistributionBarChartComponent = class DistributionBarChartComponent {
    constructor(appService) {
        this.appService = appService;
        this.modalOpened = false;
        this.Highcharts = Highcharts;
        this.showChart = false;
        this.chartOptions = Object.assign({}, exports.SimpleBarConfig);
        this.sortOptions = [
            { value: 'no-of-apps', viewValue: 'No. of apps' },
            { value: 'app-names', viewValue: 'Category Name' },
        ];
        this.selectedOption = this.sortOptions[0].value;
    }
    ngOnInit() {
        this.appService.barChartModalShown$.subscribe((data) => {
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
        let data = this.appService.barChartModalData;
        if (currentSortOption === 'no-of-apps') {
            data = data.sort((a, b) => b[1] - a[1]);
        }
        else {
            data = data.sort((a, b) => a[0].localeCompare(b[0]));
        }
        const colors = palette('tol-rainbow', data.length);
        this.chartOptions.plotOptions.bar.colorByPoint = true;
        this.chartOptions.plotOptions.bar.colors = colors.map(c => `#${c}`);
        this.chartOptions.series[0].data = data;
        setTimeout(() => {
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
DistributionBarChartComponent = __decorate([
    core_1.Component({
        selector: 'app-distribution-bar-chart',
        templateUrl: './distribution-bar-chart.component.html',
        styleUrls: ['./distribution-bar-chart.component.scss']
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], DistributionBarChartComponent);
exports.DistributionBarChartComponent = DistributionBarChartComponent;
exports.SimpleBarConfig = {
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
exports.MockBarChartData = [
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

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AppService } from '../app.service';
import * as _ from 'lodash';
declare var palette;

@Component({
    selector: 'app-distribution-pie-chart',
    templateUrl: './distribution-pie-chart.component.html',
    styleUrls: ['./distribution-pie-chart.component.scss']
})
export class DistributionPieChartComponent implements OnInit {

    modalOpened = false;
    Highcharts = Highcharts;
    showChart = false;
    chartOptions: any = Object.assign({}, SimpleConfig);
    sortOptions = [
        { value: 'no-of-apps', viewValue: 'No. of apps' },
        { value: 'app-names', viewValue: 'Category Name' },
    ];
    selectedOption = this.sortOptions[0].value;
    constructor(private appService: AppService) { }

    ngOnInit() {
        this.appService.pieChartModalShown$.subscribe((data: boolean) => {
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
            data = data.sort((a, b) => (b[1] as number) - (a[1] as number));
        } else {
            data = data.sort((a, b) => (a[0] as string).localeCompare((b[0] as string)));
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
}

export const SimpleConfig = {
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
            format: '{point.name} {point.percentage:.1f} %', // one decimal
            y: 0, // 10 pixels down from the top
            style: {
                fontSize: '11px',
                fontFamily: '"Open Sans", sans-serif'
            }
        }
    }]
};

// tslint:disable:quotemark
export const MockBarChartData = [
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

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AppService } from '../app.service';
declare var palette;

@Component({
    selector: 'app-distribution-bar-chart',
    templateUrl: './distribution-bar-chart.component.html',
    styleUrls: ['./distribution-bar-chart.component.scss']
})
export class DistributionBarChartComponent implements OnInit {

    modalOpened = false;
    Highcharts = Highcharts;
    showChart = false;
    chartOptions: any = Object.assign({}, SimpleBarConfig);
    sortOptions = [
        { value: 'no-of-apps', viewValue: 'No. of apps' },
        { value: 'app-names', viewValue: 'Category Name' },
      ];
    selectedOption = this.sortOptions[0].value;
    constructor(private appService: AppService) { }

    ngOnInit() {
        this.appService.barChartModalShown$.subscribe((data: boolean) => {
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
            data = data.sort((a, b) => (b[1] as number) - (a[1] as number));
        } else {
            data = data.sort((a, b) => (a[0] as string).localeCompare((b[0] as string)));
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

}

export const SimpleBarConfig = {
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
            format: '{point.y}', // one decimal
            y: 0, // 10 pixels down from the top
            style: {
                fontSize: '11px',
                fontFamily: '"Raleway", sans-serif'
            }
        }
    }]
};

// tslint:disable:quotemark
export const MockBarChartData = [
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

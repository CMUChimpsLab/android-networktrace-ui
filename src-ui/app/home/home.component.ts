import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { DataService } from '../data.service';
import { BuildRowGroups, SortRowGroups } from '../builder';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    title = 'myHighchart';

    data = [{
        name: 'General ID',
        data: [12500, 2000]
    }, {
        name: 'Device',
        data: [11000, 2100]
    }, {
        name: 'Network',
        data: [9000, 2000]
    }, {
        name: 'Account',
        data: [6000, 1900]
    }, {
        name: 'Location',
        data: [8000, 1800]
    }];

    highcharts = Highcharts;
    chartOptions = {
        chart: {
            type: "bar"
        },
        title: {
            text: ""
        },
        xAxis: {
            categories: ["Google", "Facebook"]
        },
        yAxis: {
            title: {
                text: "Total Number of Apps"
            },
            tickInterval: 3500
        },
        series: this.data
    };

    itemsThree = [1, 2, 3];
    itemsFive = [1, 2, 3, 4, 5];
    params = {
        'apps': [
            'com.facebook.katana',
            'com.google.android.talk',
            'com.google.android.apps.cloudprint',
            'com.twitter.android',
            'com.zhiliaoapp.musically',
        ]
    };
    queries = [
        {
            label: 'Which apps send data to Facebook services ? ', params: {
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
        }, {
            label: 'What data is collected by Google ? ', params: {
                'group': ['google']
            },
            groupNavigation: true
        }
    ];
    rowGroups = [];
    constructor(
        private appService: AppService,
        private dataService: DataService,
        private router: Router,
    ) { }
    diagrams = [
        {
            source: '../../assets/diagram1.png',
            text: 'view details'
        },
        {
            source: '../../assets/diagram2.png',
            text: 'go back'
        }
    ];
    Image = this.diagrams[0];

    ngOnInit() {
        this.appService.toggleHomePage(true);
        this.appService.showLoader();
        this.appService.hideHeader();
        this.dataService.getBaseRelationships(this.params, 0, 100).subscribe((data: any) => this.buildRows(data, true));

    }
    ngOnDestroy() {
        this.appService.toggleHomePage(false);
    }
    openLink(query) {
        if (!query.groupNavigation && !_.isEmpty(query.params)) {
            this.router.navigate(['results'], {
                queryParams: query.params
            });
        } else if (query.groupNavigation) {
            this.router.navigate([`/results/group/${query.params.group[0]}`]);
        }
    }
    openAdvancedModal() {
        this.appService.showAdvancedFilter();
    }
    buildRows(data: Array<any>, forceExpand = false) {
        const groupData = BuildRowGroups(data, forceExpand);
        this.rowGroups = SortRowGroups(groupData.rowGroups, 'what', 'ASC');
        this.appService.hideLoader();
    }

    item = 0;
    changeImage() {
        this.item++;
        if (this.item > 1) {
            this.item = 0;
        }
        this.Image = this.diagrams[this.item];

    }
}
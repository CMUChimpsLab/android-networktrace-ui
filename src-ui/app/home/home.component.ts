import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { DataService } from '../data.service';
import { BuildRowGroups, SortRowGroups } from '../builder';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { update } from 'lodash';
import { updateStyleProp } from '@angular/core/src/render3/styling';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


    title = 'myHighchart';

    /*The following are sets of data that have been listed statically for the bar graph on the home page*/
    //This shows overall number of apps per company
    dataCompanyOverview = [{
        name: 'Apps',
        data: [17714, 12228, 4455, 3313]
    }];

    //This has a break down by datatype per company -- not complete or accurate
    dataCompanyDetailed = [{
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

    //This shows the number of apps per cloud service -- not complete or accurate
    dataCloudOverview = [{
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

    //This shows the type of data per cloud service -- not complete or accurate
    dataCloudDetailed = [{
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

    //This is the code for constructing the bar graph
    data = this.dataCompanyOverview;
    highcharts = Highcharts;
    chartOptions = {
        chart: {
            type: "bar"
        },
        title: {
            text: ""
        },
        xAxis: {
            //The categories may change depending on the merging of the two data sets
            categories: ["Google", "StartApp", "Facebook", "SeattleCloud"]
        },
        yAxis: {
            title: {
                text: "Total Number of Apps"
            },
            tickInterval: 3500
        },
        //I've been changing the series variable to determine what the graphs look like
        series: this.dataCompanyOverview
    };

    /*The following is code from the original dev that is supposed to help dynamically query to create the fun arrow diagram -- currently not used*/
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

    /*The following is code for the diagram on the top of the home page*/

    //These are the images for the first diagram on the front page
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

    //Here is a function to flip between the diagrams on click
    item = 0;
    changeImage() {
        this.item++;
        if (this.item > 1) {
            this.item = 0;
        }
        this.Image = this.diagrams[this.item];
    }

    /*The following is code to change the data in the graph depending on the options a user selects -- not functioning*/
    company = true;
    overview = true;

    updateChart() {
        debugger
        if (this.company) {
            if (this.overview) {
                console.log("Company Overview\n");
                this.data = this.dataCompanyOverview;
                this.chartOptions.series = this.dataCompanyOverview;
            }
            else {
                console.log("Company Detailed\n");
                this.data = this.dataCompanyDetailed;
                this.chartOptions.series = this.data;

            }
        } else {
            if (this.overview) {
                console.log("Cloud Overview\n");
                this.data = this.dataCloudOverview;
                this.chartOptions.series = this.data;

            } else {
                console.log("Cloud Detailed\n");
                this.data = this.dataCloudDetailed;
                this.chartOptions.series = this.data;

            }
        }
    }
    serviceChanged(item) {
        debugger
        console.log(item);
        if (item == "Companies") {
            this.company = true;
        } else {
            this.company = false;
        }
        this.updateChart();
    }


    detailChanged(item) {
        debugger;
        console.log(item);
        if (item == "Overview") {
            this.overview = true;
        } else {
            this.overview = false;
        }
        this.updateChart();
    }
}
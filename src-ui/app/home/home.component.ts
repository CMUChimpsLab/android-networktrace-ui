import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { DataService } from '../data.service';
import { BuildRowGroups, SortRowGroups } from '../builder';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
    rowGroups = [];
    constructor(
        private appService: AppService,
        private dataService: DataService,
        private router: Router
    ) { }

    ngOnInit() {
        this.appService.showLoader();
        this.appService.hideHeader();
        this.dataService.getBaseRelationships(this.params, 0, 100).subscribe((data: any) => this.buildRows(data, true));
    }
    openLink(query) {
        if (!_.isEmpty(query.params)) {
            this.router.navigate(['results'], {
                queryParams: query.params
            });
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
}

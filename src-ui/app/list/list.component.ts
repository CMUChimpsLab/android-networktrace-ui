import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PageEvent } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: [
        './list.component.scss',
        '../results/results.component.scss'
    ]
})
export class ListComponent implements OnInit {
    currentTypeDetails;
    apps = [];
    skip = 0;
    pageSize = 60;
    page = -1;
    showPaginator = true;
    totalSize = 16000;
    pageSizeOptions: number[] = [30, 60, 120, 180];
    pageEvent: PageEvent | undefined;
    constructor(
        private dataService: DataService,
        private appService: AppService,
        private activatedRoute: ActivatedRoute) {}
    ngOnInit() {
        this.appService.showLoader();
        this.activatedRoute.params.subscribe((data: any) => {
            if (data.type === 'apps') {
                this.currentTypeDetails = 'app-list';
            } else if (data.type === 'hosts') {
                this.currentTypeDetails = 'host-list';
            }
            this.loadNextPage();
        });
    }
    loadNextPage(event?: PageEvent) {
        this.appService.showLoader();
        this.skip = event ? event.pageIndex * (event.pageSize) : 0;
        this.pageSize = event ? event.pageSize : 60;
        if (this.currentTypeDetails === 'app-list') {
            this.dataService.getApps(this.skip, this.pageSize).subscribe((data: Array<any>) => {
                if (data.length > 0) {
                    (data as Array<any>).forEach(item => {
                        item.icon = item.icon ? item.icon : 'assets/playstore.png';
                    });
                }
                this.apps = data;
                this.appService.hideLoader();
            });
        } else if (this.currentTypeDetails === 'host-list') {
            this.dataService.getHosts(this.skip, this.pageSize).subscribe((data: Array<any>) => {
                const result = [];
                if (data.length > 0) {
                    (data as Array<any>).forEach(item => {
                        result.push({
                            app: item.host,
                            title: item.who_company ? item.who_company : '',
                            icon: item.icon ? item.icon :  'assets/worldwide_256.png'
                        });
                    });
                }
                this.apps = result;
                this.appService.hideLoader();
            });
        }
    }
    onPageEvent(event: PageEvent) {
        this.loadNextPage(event);
    }
}

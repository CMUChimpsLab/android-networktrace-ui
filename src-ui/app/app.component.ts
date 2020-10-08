import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    showHeader = true;
    title = 'privacy-analytics-v2';
    loaderShown = false;
    constructor(private appService: AppService, private dataService: DataService) { }
    ngOnInit() {
        this.appService.headerShown$.subscribe(() => {
            setTimeout(() => {
                // this.showHeader = data;
            });
        });
        this.appService.loaderShown$.subscribe(data => {
            window.requestAnimationFrame(() => {
                this.loaderShown = data;
            });
        });
    }
}

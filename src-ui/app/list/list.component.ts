import { Component, OnInit } from '@angular/core';

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
    apps = new Array(20).fill({
        id: Math.random() * 10e6,
        app: 'com.preapsovath.khmersexystar',
        title: 'Preap Sovath Songs',
        icon: 'https://lh5.ggpht.com/O1u9rv7RPrAVdvyvD3EFr224k_SdYVq3cQ3CeIYqT1m9Lqm6A_Wz3XHSnSopTWCs7-HD'
    });
    constructor() {}
    ngOnInit() {
        this.currentTypeDetails = 'app-list';
    }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {
    private headerShown = new Subject();
    headerShown$ = this.headerShown.asObservable();
    private advancedFilterShown = new Subject();
    advancedFilterShown$ = this.advancedFilterShown.asObservable();
    private barChartModalShown = new Subject();
    barChartModalData = null;
    barChartModalShown$ = this.barChartModalShown.asObservable();
    private pieChartModalShown = new Subject();
    pieChartModalData = null;
    pieChartModalShown$ = this.pieChartModalShown.asObservable();
    private loaderShown = new Subject<boolean>();
    loaderShown$ = this.loaderShown.asObservable();
    private paginatorLabel = new Subject();
    paginatorLabel$ = this.paginatorLabel.asObservable();
    showHeader() {
        this.headerShown.next(true);
    }
    hideHeader() {
        this.headerShown.next(false);
    }
    showAdvancedFilter() {
        this.advancedFilterShown.next(true);
    }
    hideAdvancedFilter() {
        this.advancedFilterShown.next(false);
    }
    showChartModalFilter(data) {
        this.barChartModalData = data;
        this.barChartModalShown.next(true);
    }
    hideChartModalFilter() {
        this.barChartModalData = null;
        this.barChartModalShown.next(false);
    }
    showPieChartModalFilter(data) {
        this.pieChartModalData = data;
        this.pieChartModalShown.next(true);
    }
    hidePieChartModalFilter() {
        this.pieChartModalShown.next(false);
    }
    showLoader() {
        this.loaderShown.next(true);
    }
    hideLoader() {
        this.loaderShown.next(false);
    }
}

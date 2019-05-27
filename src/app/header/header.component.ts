import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';
import { DataService } from '../data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    itemsThree = [1, 2, 3 ];
    searchToken = 'All apps';
    advancedFilterOn = true;
    showResultsBar = false;
    apps = [];
    hosts = [];
    onDebouncedSearchTokenChanged = _.debounce(this.onSearchTokenChanged, 100);
    onDOMEventListener = (e: MouseEvent) => {
        if (e.target) {
            const target  = e.target;
            if ((target as HTMLElement).closest('[data-tag="search-wrapper"]') === null) {
                this.closeResultsBar();
            }
        }
    }
    constructor(
        private appService: AppService,
        private dataService: DataService,
        private router: Router,
        private activatedRouter: ActivatedRoute) { }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.closeResultsBar();
            }
        });
        this.activatedRouter.params.subscribe(params => {
            this.advancedFilterOn = true;
            this.searchToken = 'All apps';
            if (!params || !params['type']) {
                this.advancedFilterOn = false;
                this.searchToken = '';
            }
        });
    }
    onInputFocus() {
        this.openResultsBar();
    }
    onSearchTokenChanged() {
        if (!_.isEmpty(this.searchToken)) {
            this.dataService.getSearchResults(this.searchToken.trim(), 0, 4).subscribe((data: any) => {
                this.apps = data.apps || [];
                this.hosts = data.hosts || [];
                if (this.apps.length > 0) {
                    this.apps = _.sortBy(this.apps, 'title');
                    this.apps.forEach(x => {
                        if (!x.title) { x.title = x.app; }
                        if (!x.icon) { x.icon = 'assets/playstore.png'; }
                    });
                }
                if (this.hosts.length > 0) {
                    this.hosts = _.sortBy(this.hosts, 'title');
                    this.hosts.forEach(x => {
                        if (!x.icon) { x.icon = 'assets/worldwide.png'; }
                    });
                }
                if (this.apps.length > 0 || this.hosts.length > 0) {
                    this.openResultsBar();
                }
            });
        } else {
            this.apps = [];
            this.hosts = [];
            this.closeResultsBar();
        }
    }

    openResultsBar() {
        this.showResultsBar = true;
        document.addEventListener('click', this.onDOMEventListener);
    }
    closeResultsBar() {
        document.removeEventListener('click', this.onDOMEventListener);
        this.showResultsBar = false;
    }

    openAdvancedModal() {
        this.appService.showAdvancedFilter();
    }

}

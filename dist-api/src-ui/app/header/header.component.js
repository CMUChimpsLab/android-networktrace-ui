"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const app_service_1 = require("../app.service");
const router_1 = require("@angular/router");
const _ = __importStar(require("lodash"));
const data_service_1 = require("../data.service");
let HeaderComponent = class HeaderComponent {
    constructor(appService, dataService, router, activatedRouter) {
        this.appService = appService;
        this.dataService = dataService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.itemsThree = [1, 2, 3];
        this.searchToken = 'All apps';
        this.advancedFilterOn = true;
        this.showResultsBar = false;
        this.apps = [];
        this.hosts = [];
        this.onDebouncedSearchTokenChanged = _.debounce(this.onSearchTokenChanged, 100);
        this.onDOMEventListener = (e) => {
            if (e.target) {
                const target = e.target;
                if (target.closest('[data-tag="search-wrapper"]') === null) {
                    this.closeResultsBar();
                }
            }
        };
    }
    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof router_1.NavigationEnd) {
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
            this.dataService.getSearchResults(this.searchToken.trim(), 0, 4).subscribe((data) => {
                this.apps = data.apps || [];
                this.hosts = data.hosts || [];
                if (this.apps.length > 0) {
                    this.apps = _.sortBy(this.apps, 'title');
                    this.apps.forEach(x => {
                        if (!x.title) {
                            x.title = x.app;
                        }
                        if (!x.icon) {
                            x.icon = 'assets/playstore.png';
                        }
                    });
                }
                if (this.hosts.length > 0) {
                    this.hosts = _.sortBy(this.hosts, 'title');
                    this.hosts.forEach(x => {
                        if (!x.icon) {
                            x.icon = 'assets/worldwide.png';
                        }
                    });
                }
                if (this.apps.length > 0 || this.hosts.length > 0) {
                    this.openResultsBar();
                }
            });
        }
        else {
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
};
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    }),
    __metadata("design:paramtypes", [app_service_1.AppService,
        data_service_1.DataService,
        router_1.Router,
        router_1.ActivatedRoute])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;

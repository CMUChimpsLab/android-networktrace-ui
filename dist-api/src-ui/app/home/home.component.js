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
const data_service_1 = require("../data.service");
const builder_1 = require("../builder");
const _ = __importStar(require("lodash"));
const router_1 = require("@angular/router");
let HomeComponent = class HomeComponent {
    constructor(appService, dataService, router) {
        this.appService = appService;
        this.dataService = dataService;
        this.router = router;
        this.itemsThree = [1, 2, 3];
        this.itemsFive = [1, 2, 3, 4, 5];
        this.params = {
            'apps': [
                'com.facebook.katana',
                'com.google.android.talk',
                'com.google.android.apps.cloudprint',
                'com.twitter.android',
                'com.zhiliaoapp.musically',
            ]
        };
        this.queries = [
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
        this.rowGroups = [];
    }
    ngOnInit() {
        this.appService.showLoader();
        this.appService.hideHeader();
        this.dataService.getBaseRelationships(this.params, 0, 100).subscribe((data) => this.buildRows(data, true));
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
    buildRows(data, forceExpand = false) {
        const groupData = builder_1.BuildRowGroups(data, forceExpand);
        this.rowGroups = builder_1.SortRowGroups(groupData.rowGroups, 'what', 'ASC');
        this.appService.hideLoader();
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    }),
    __metadata("design:paramtypes", [app_service_1.AppService,
        data_service_1.DataService,
        router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;

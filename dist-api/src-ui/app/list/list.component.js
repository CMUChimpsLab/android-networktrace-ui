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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ListComponent = class ListComponent {
    constructor() {
        this.apps = new Array(20).fill({
            id: Math.random() * 10e6,
            app: 'com.preapsovath.khmersexystar',
            title: 'Preap Sovath Songs',
            icon: 'https://lh5.ggpht.com/O1u9rv7RPrAVdvyvD3EFr224k_SdYVq3cQ3CeIYqT1m9Lqm6A_Wz3XHSnSopTWCs7-HD'
        });
    }
    ngOnInit() {
        this.currentTypeDetails = 'app-list';
    }
};
ListComponent = __decorate([
    core_1.Component({
        selector: 'app-list',
        templateUrl: './list.component.html',
        styleUrls: [
            './list.component.scss',
            '../results/results.component.scss'
        ]
    }),
    __metadata("design:paramtypes", [])
], ListComponent);
exports.ListComponent = ListComponent;

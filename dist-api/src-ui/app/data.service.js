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
const http_1 = require("@angular/common/http");
const constants_1 = require("./constants");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.currentSearchParams = {};
        this.cancelPendingRequests$ = new rxjs_1.Subject();
    }
    clearSearchParams() {
        this.currentSearchParams = {};
    }
    getSampleData() {
        const url = constants_1.API_URL + '/api/relationships?host=pagead2.googlesyndication.com';
        return this.http.post(url, {});
    }
    getSearchParams() {
        const url = constants_1.API_URL + '/api/meta/searchparams';
        return this.http.get(url);
    }
    getRelationships(skip = 0, limit = 10) {
        const url = constants_1.API_URL + `/api/relationships?skip=${skip}&limit=${limit}`;
        return this.http.post(url, {});
    }
    getTotalNoOfApps() {
        const url = constants_1.API_URL + '/api/apps/count';
        return this.http.get(url);
    }
    getAppRelationships(app, skip = 0, limit = 10, count = false) {
        const url = constants_1.API_URL + `/api/relationships?app=${app}&skip=${skip}&limit=${limit}&count=${count}`;
        return this.http.post(url, {});
    }
    getHostRelationships(host, skip = 0, limit = 25, count = false) {
        const url = constants_1.API_URL + `/api/relationships?host=${host}&skip=${skip}&limit=${limit}&count=${count}`;
        return this.http.post(url, {});
    }
    getBaseRelationships(params, skip = 0, limit = 10, count = false) {
        const url = constants_1.API_URL + `/api/relationships?&skip=${skip}&limit=${limit}&count=${count}`;
        return this.http.post(url, params);
    }
    getAppDetails(app) {
        const url = constants_1.API_URL + `/api/apps`;
        return this.http.post(url, {
            app: app
        });
    }
    getHostDetails(host) {
        const url = constants_1.API_URL + `/api/hosts`;
        return this.http.post(url, {
            host: host
        });
    }
    getSearchResults(token, skip = 0, limit = 5) {
        this.cancelPendingRequests$.next();
        const url = constants_1.API_URL + `/api/search/${token}?skip=${skip}&limit=${limit}`;
        return this.http.get(url)
            .pipe(operators_1.takeUntil(this.cancelPendingRequests$.asObservable()));
    }
    getPurposeDistribution(params) {
        const url = constants_1.API_URL + `/api/distribution/purposes`;
        return this.http.post(url, params);
    }
    getCategoryWiseDistribution(params) {
        const url = constants_1.API_URL + `/api/distribution/categories`;
        return this.http.post(url, params);
    }
    getStats(params) {
        const url = constants_1.API_URL + `/api/statistics`;
        return this.http.post(url, params);
    }
};
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], DataService);
exports.DataService = DataService;

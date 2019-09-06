import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './constants';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export class DataService {
    currentSearchParams = {};
    private cancelPendingRequests$ = new Subject<void>();
    constructor(private http: HttpClient) { }
    clearSearchParams() {
        this.currentSearchParams = {};
    }
    getSampleData() {
        const url = API_URL + '/api/relationships?host=pagead2.googlesyndication.com';
        return this.http.post(url, {});
    }
    getSearchParams() {
        const url = API_URL + '/api/meta/searchparams';
        return this.http.get(url);
    }
    getRelationships(skip = 0, limit = 10) {
        const url = API_URL + `/api/relationships?skip=${skip}&limit=${limit}`;
        return this.http.post(url, {});
    }
    getTotalNoOfApps() {
        const url = API_URL + '/api/apps/count';
        return this.http.get(url);
    }
    getAppRelationships(app, skip = 0, limit = 10, count = false) {
        const url = API_URL + `/api/relationships?app=${app}&skip=${skip}&limit=${limit}&count=${count}`;
        return this.http.post(url, {});
    }
    getHostRelationships(host, skip = 0, limit = 25, count = false) {
        const url = API_URL + `/api/relationships?host=${host}&skip=${skip}&limit=${limit}&count=${count}`;
        return this.http.post(url, {});
    }
    getGroupRelationships(group, skip = 0, limit = 25, count = false) {
        const url = API_URL + `/api/relationships`;
        return this.http.post(url, {
            group: group,
            skip: skip || 0,
            limit: limit || 0
        });
    }
    getBaseRelationships(params, skip = 0, limit = 10, count = false) {
        const url = API_URL + `/api/relationships?&skip=${skip}&limit=${limit}&count=${count}`;
        return this.http.post(url, params);
    }
    getAppDetails(app) {
        const url = API_URL + `/api/apps`;
        return this.http.post(url, {
            app: app
        });
    }
    getHostDetails(host) {
        const url = API_URL + `/api/hosts`;
        return this.http.post(url, {
            host: host
        });
    }
    getGroupDetails(group) {
        const url = API_URL + `/api/groups`;
        return this.http.post(url, {
            group: group
        });
    }
    getApps(skip = 0, limit = 0) {
        const url = API_URL + `/api/apps`;
        return this.http.post(url, {
            limit: limit,
            skip: skip
        });
    }
    getHosts(skip = 0, limit = 0) {
        const url = API_URL + `/api/hosts`;
        return this.http.post(url, {
            limit: limit,
            skip: skip
        });
    }
    getSearchResults(token, skip = 0, limit = 5) {
        this.cancelPendingRequests$.next();
        const url = API_URL + `/api/search/${token}?skip=${skip}&limit=${limit}`;
        return this.http.get(url)
            .pipe(takeUntil(this.cancelPendingRequests$.asObservable()));
    }
    getPurposeDistribution(params) {
        const url = API_URL + `/api/distribution/purposes`;
        return this.http.post(url, params);
    }
    getCategoryWiseDistribution(params) {
        const url = API_URL + `/api/distribution/categories`;
        return this.http.post(url, params);
    }
    getStats(params) {
        const url = API_URL + `/api/statistics`;
        return this.http.post(url, params);
    }
}

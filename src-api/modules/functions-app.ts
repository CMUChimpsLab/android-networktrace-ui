// tslint:disable:quotemark
// tslint:disable:max-line-length
import { CleanupMongoClient } from "./client";
import { GetAppsCollection, GetHostsCollection } from "./constants";
import * as _ from 'lodash';
// tslint:disable:radix

export async function GetAppDetails(client: any, params: any, callback: Function) {
    const appsCollection = GetAppsCollection(client);
    let data = null;
    if (params['app']) {
        data = await appsCollection.find({ app: params['app'] }).toArray();
        CleanupMongoClient(client);
        if (data.length > 0) {
            callback(data[0]);
        } else {
            callback(null);
        }
    } else {
        let skip = 0, limit = 10;
        if (_.isFinite(params.skip)) { skip = parseInt(params.skip) || 0; }
        if (_.isFinite(params.limit)) { limit = parseInt(params.limit) || 10; }
        data = await appsCollection.find({}).skip(skip).limit(limit).toArray();
        CleanupMongoClient(client);
        if (data.length > 0) {
            callback(data);
        } else {
            callback(null);
        }
    }
}

export async function GetHostDetails(client: any, params: any, callback: Function) {
    const hostsCollection = GetHostsCollection(client);
    if (params['host']) {
        const data = await hostsCollection.find({ host: params['host'] }).toArray();
        CleanupMongoClient(client);
        if (data.length > 0) {
            callback(data[0]);
        } else {
            callback(null);
        }
    } else {
        let skip = 0, limit = 10;
        if (_.isFinite(params.skip)) { skip = parseInt(params.skip) || 0; }
        if (_.isFinite(params.limit)) { limit = parseInt(params.limit) || 10; }
        const data = await hostsCollection.find({}).skip(skip).limit(limit).toArray();
        CleanupMongoClient(client);
        if (data.length > 0) {
            callback(data);
        } else {
            callback(null);
        }
    }
}

// tslint:disable:quotemark
// tslint:disable:max-line-length
import { CleanupMongoClient } from "./client";
import { GetAppsCollection, GetHostsCollection } from "./constants";
import * as _ from 'lodash';

export async function GetAppDetails(client: any, params: any, callback: Function) {
    const appsCollection = GetAppsCollection(client);
    const data = await appsCollection.find( { app: params['app']}).toArray();
    CleanupMongoClient(client);
    if (data.length > 0) {
        callback(data[0]);
    } else {
        callback(null);
    }
}

export async function GetHostDetails(client: any, params: any, callback: Function) {
    const hostsCollection = GetHostsCollection(client);
    const data = await hostsCollection.find( { host: params['host']}).toArray();
    CleanupMongoClient(client);
    if (data.length > 0) {
        callback(data[0]);
    } else {
        callback(null);
    }
}

// tslint:disable:quotemark
// tslint:disable:max-line-length
// tslint:disable:curly
// tslint:disable:prefer-const
// tslint:disable:radix
import { CleanupMongoClient } from "./client";
import { GetAppsCollection, GetHostsCollection } from "./constants";
import * as _ from 'lodash';

export async function GetSearchToken(client: any, params: any, callback: Function) {
    const appsCollection = GetAppsCollection(client);
    const hostsCollection = GetHostsCollection(client);
    let skip = 0, limit = 5;
    if (!_.isEmpty(params.skip)) skip = parseInt(params.skip) || 0;
    if (!_.isEmpty(params.limit)) limit = parseInt(params.limit) || 10;
    const appsData = await appsCollection.aggregate([
        {
            "$match": Object.assign({}, {
                'app': { $regex: params['token'] },
            })
        },
        { "$skip": skip || 0 },
        { "$limit": limit || 10 },
        { "$project": {
            'app': 1,
            'icon': 1,
            'title': 1
        } },
    ]).toArray();
    const hostsData = await hostsCollection.aggregate([
        {
            "$match": Object.assign({}, {
                'host': { $regex: params['token'] },
            })
        },
        { "$skip": skip || 0 },
        { "$limit": limit || 10 },
        { "$project": {
            'host': 1,
            'icon': 1,
            'title': 1
        } },
    ]).toArray();
    CleanupMongoClient(client);
    callback({
        apps: appsData,
        hosts: hostsData
    });
}

// tslint:disable:quotemark
// tslint:disable:max-line-length
// tslint:disable:curly
// tslint:disable:prefer-const
// tslint:disable:radix
import { CleanupMongoClient } from "./client";
import { AppProjection, HostProjection, GetAppsCollection, GetHostsCollection, LookUpExpressionForRelationshipsUsingApp, LookUpExpressionForRelationshipsUsingHost, LookUpExpressionForAppsFromRelationships, LookUpExpressionForHostsFromRelationships, GetRelationshipCollection, CombinedProjectionFromRels } from "./constants";
import * as _ from 'lodash';

async function GetRelationshipsGivenAppList(collection: any, params: any, appList: string[]) {
    let skip = 0, limit = 0;
    if (_.isFinite(params.skip)) skip = parseInt(params.skip) || 0;
    if (_.isFinite(params.limit)) limit = parseInt(params.limit) || 10;
    if (_.isFinite(params.nolimit)) limit = 100000;
    let AggregateExpressions = [
        {
            "$match": {
                'title': { $ne: null },
                'app': { $in: appList }
            }
        },
        { "$sort": { "title": -1 } },
        { "$lookup": LookUpExpressionForRelationshipsUsingApp },
        { "$unwind": "$relinfo" },
        { "$skip": skip || 0 },
        { "$limit": limit || 10 },
        { "$project": AppProjection }
    ];
    return collection.aggregate(AggregateExpressions).toArray();
}

async function GetRelationshipsGivenApp(collection: any, params: any, app: string) {
    let skip = 0, limit = 0;
    if (_.isFinite(params.skip)) skip = parseInt(params.skip) || 0;
    if (_.isFinite(params.limit)) limit = parseInt(params.limit) || 10;
    if (_.isFinite(params.nolimit)) limit = 100000;
    let AggregateExpressions = [
        {
            "$match": {
                'app': { $eq: app }
            }
        },
        { "$sort": { "title": -1 } },
        { "$lookup": LookUpExpressionForRelationshipsUsingApp },
        { "$unwind": "$relinfo" },
        { "$skip": skip || 0 },
        { "$limit": limit || 10 },
        { "$project": AppProjection }
    ];
    return collection.aggregate(AggregateExpressions).toArray();
}

async function GetRelationshipsGivenHost(collection: any, params: any, host: string, count = false) {
    let skip = 0, limit = 0;
    if (_.isFinite(params.skip)) skip = parseInt(params.skip) || 0;
    if (_.isFinite(params.limit)) limit = parseInt(params.limit) || 10;
    if (_.isFinite(params.nolimit)) limit = 100000;
    let AggregateExpressions: any[] = [];
    if (!count) {
        AggregateExpressions = [
            {
                "$match": {
                    'host': { $eq: host }
                }
            },
            { "$sort": { "host": -1 } },
            { "$lookup": LookUpExpressionForRelationshipsUsingHost },
            { "$unwind": "$relinfo" },
            { "$skip": skip || 0 },
            { "$limit": limit || 10 },
            {
                "$lookup": {
                    "localField": "relinfo.app",
                    "from": "apps",
                    "foreignField": "app",
                    "as": "appinfo"
                }
            },
            { "$unwind": "$appinfo" },
            { "$project": HostProjection }
        ];
        return collection.aggregate(AggregateExpressions).toArray();
    } else {
        AggregateExpressions = [
            {
                "$match": {
                    'host': { $eq: host }
                }
            },
            { "$sort": { "host": -1 } },
            { "$lookup": LookUpExpressionForRelationshipsUsingHost },
            { "$unwind": "$relinfo" },
            {
                "$lookup": {
                    "localField": "relinfo.app",
                    "from": "apps",
                    "foreignField": "app",
                    "as": "appinfo"
                }
            },
            { "$unwind": "$appinfo" },
            { "$count": "count" },
        ];
        return collection.aggregate(AggregateExpressions).toArray();
    }
}

async function GetRelationshipsGivenAppAndHost(collection: any, params: any, app: string, host: string) {
    let skip = 0, limit = 0;
    if (_.isFinite(params.skip)) skip = parseInt(params.skip) || 0;
    if (_.isFinite(params.limit)) limit = parseInt(params.limit) || 10;
    if (_.isFinite(params.nolimit)) limit = 100000;
    let HostMatchExpression = [
        { "$match": { 'relinfo.host': { '$eq': host } } }
    ];
    let AggregateExpressions = [
        {
            "$match": {
                'title': { $ne: null },
                'app': { $eq: app }
            }
        },
        { "$sort": { "title": -1 } },
        { "$lookup": LookUpExpressionForRelationshipsUsingApp },
        { "$unwind": "$relinfo" },
        ...HostMatchExpression,
        { "$skip": skip || 0 },
        { "$limit": limit || 10 },
        { "$project": AppProjection }
    ];
    return collection.aggregate(AggregateExpressions).toArray();
}

async function GetRelationshipsGivenNothing(client: any, params: any) {
    let skip = 0, limit = 0, categories = [], types = [], purposes = [], hosts = [], apps = [];
    if (_.isFinite(params.skip)) skip = parseInt(params.skip) || 0;
    if (_.isFinite(params.limit)) limit = parseInt(params.limit) || 10;
    if (_.isFinite(params.nolimit)) limit = 100000;
    if (!_.isEmpty(params.categories)) categories = params.categories;
    if (!_.isEmpty(params.types)) types = params.types;
    if (!_.isEmpty(params.purposes)) purposes = params.purposes;
    if (!_.isEmpty(params.hosts)) hosts = params.hosts;
    if (!_.isEmpty(params.apps)) apps = params.apps;
    if (
        _.isEmpty(params.categories) &&
        _.isEmpty(params.types) &&
        _.isEmpty(params.purposes) &&
        _.isEmpty(params.hosts) &&
        _.isEmpty(params.apps)
    ) {
        let AggregateExpressions = [
            {
                "$match": {
                    'title': { $ne: null }
                }
            },
            { "$sort": { "title": -1 } },
            { "$skip": skip || 0 },
            { "$limit": limit || 10 },
            { "$lookup": LookUpExpressionForRelationshipsUsingApp },
            { "$unwind": "$relinfo" },
            { "$project": AppProjection }
        ];
        return GetAppsCollection(client).aggregate(AggregateExpressions).toArray();
    } else if (
        !_.isEmpty(params.categories) &&
        _.isEmpty(params.types) &&
        _.isEmpty(params.purposes) &&
        _.isEmpty(params.hosts) &&
        _.isEmpty(params.apps)
    ) {
        let matchExpressions = [];
        if (!_.isEmpty(params.categories)) {
            matchExpressions.push({'genre': { '$in': params.categories }});
        }
        let AggregateExpressions = [
            {
                "$match": Object.assign({}, {
                }, ...matchExpressions)
            },
            { "$skip": skip || 0 },
            { "$limit": limit || 10 },
            { "$lookup": LookUpExpressionForRelationshipsUsingApp },
            { "$unwind": "$relinfo" },
            { "$project": AppProjection }
        ];
        return GetAppsCollection(client).aggregate(AggregateExpressions).toArray();
    } else if (
        _.isEmpty(params.categories) &&
        ( !_.isEmpty(params.types) || !_.isEmpty(params.purposes)) &&
        _.isEmpty(params.hosts) &&
        _.isEmpty(params.apps)
    ) {
        let matchExpressions = [];
        if (!_.isEmpty(params.types)) {
            matchExpressions.push({'type': { '$in': params.types} });
        }
        if (!_.isEmpty(params.purposes)) {
            matchExpressions.push({'purpose': { '$in': params.purposes} });
        }
        let AggregateExpressions = [
            {
                "$match": Object.assign({}, {
                }, ...matchExpressions)
            },
            { "$skip": skip || 0 },
            { "$limit": limit || 10 },
            { "$lookup": LookUpExpressionForAppsFromRelationships },
            { "$unwind": "$appinfo" },
            { "$sort": { 'appinfo.title': 1} },
            { "$lookup": LookUpExpressionForHostsFromRelationships },
            { "$unwind": "$hostinfo" },
            { "$project": Object.assign({}, CombinedProjectionFromRels) }
        ];
        return GetRelationshipCollection(client).aggregate(AggregateExpressions).toArray();
    } else {
        let matchExpressions = [];
        let relationshipxpressions = [];
        if (!_.isEmpty(params.categories)) {
            matchExpressions.push({'appinfo.genre': { '$in': params.categories }});
        }
        if (!_.isEmpty(params.types)) {
            relationshipxpressions.push({'type': { '$in': params.types} });
        }
        if (!_.isEmpty(params.purposes)) {
            relationshipxpressions.push({ 'purpose': { '$in': params.purposes} });
        }
        if (!_.isEmpty(params.hosts)) {
            relationshipxpressions.push({'host': { $in: hosts }});
        }
        if (!_.isEmpty(params.apps)) {
            relationshipxpressions.push({'app': { $in: apps }});
        }
        let AggregateExpressions = [
            {
                "$match": Object.assign({}, {
                    // 'appinfo.title': { $ne: null },
                }, ...relationshipxpressions)
            },
            { "$lookup": LookUpExpressionForAppsFromRelationships },
            { "$unwind": "$appinfo" },
            { "$lookup": LookUpExpressionForHostsFromRelationships },
            { "$unwind": "$hostinfo" },
            {
                "$match": Object.assign({}, {
                    // 'appinfo.title': { $ne: null },
                }, ...matchExpressions)
            },
            { "$skip": skip || 0 },
            { "$limit": limit || 10 },
            { "$project": CombinedProjectionFromRels }
        ];
        return GetRelationshipCollection(client).aggregate(AggregateExpressions).toArray();
    }
}

export async function GetRelationships(client: any, params: any, callback: Function) {
    const appsCollection = GetAppsCollection(client);
    const hostsCollection = GetHostsCollection(client);
    let app = null, host = null, appList = [], useCount = false, count = null;
    if (!_.isEmpty(params.app)) app = params.app;
    if (!_.isEmpty(params.host)) host = params.host;
    if (!_.isEmpty(params.appList)) appList = params.appList;
    if (!_.isEmpty(params.count)) useCount = params.count === 'true';
    let data = [];
    if (appList.length > 0) {
        data = await GetRelationshipsGivenAppList(appsCollection, params, appList);
    } else if (app && host) {
        data = await GetRelationshipsGivenAppAndHost(appsCollection, params, app, host);
    } else if (app && !host) {
        data = await GetRelationshipsGivenApp(appsCollection, params, app);
    } else if (!app && host) {
        data = await GetRelationshipsGivenHost(hostsCollection, params, host, useCount);
    } else if (!app && !host) {
        data = await GetRelationshipsGivenNothing(client, params);
    }
    CleanupMongoClient(client);
    callback(data);
}

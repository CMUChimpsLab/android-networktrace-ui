// tslint:disable:quotemark
// tslint:disable:max-line-length
// tslint:disable:curly
// tslint:disable:prefer-const
// tslint:disable:radix
import { CleanupMongoClient } from "./client";
import { AppProjection, HostProjection, GetAppsCollection, GetHostsCollection, LookUpExpressionForRelationshipsUsingApp, LookUpExpressionForRelationshipsUsingHost, LookUpExpressionForAppsFromRelationships, LookUpExpressionForHostsFromRelationships, GetRelationshipCollection, CombinedProjectionFromRels, GetGroupsCollection, RelationshipProjection } from "./constants";
import * as _ from 'lodash';

async function GetRelationshipsGivenAppList(collection: any, params: any, appList: string[]) {
    let skip = 0, limit = 0;
    if (_.isFinite(params.skip)) skip = parseInt(params.skip) || 0;
    if (_.isFinite(params.limit)) limit = parseInt(params.limit) || 100;
    if (_.isFinite(params.nolimit)) limit = 100000;
    let AggregateExpressions = [
        {
            "$match": {
                'app': { $in: appList }
            }
        },
        // { "$sort": { "title": -1 } },
        { "$lookup": LookUpExpressionForAppsFromRelationships },
        { "$lookup": LookUpExpressionForHostsFromRelationships },
        { "$unwind": { path: "$appinfo", preserveNullAndEmptyArrays: true }},
        { "$unwind": { path: "$hostinfo", preserveNullAndEmptyArrays: true }},
        { "$skip": skip },
        { "$limit": limit || 100 },
        { "$project": RelationshipProjection }
    ];
    console.log(1);
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
        { "$skip": skip },
        { "$limit": limit || 10 },
        { "$project": AppProjection }
    ];
    console.log(2);
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
            { "$skip": skip },
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
        console.log(3);
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
        console.log(4);
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
        { "$skip": skip },
        { "$limit": limit || 10 },
        { "$project": AppProjection }
    ];
    console.log(4);
    return collection.aggregate(AggregateExpressions).toArray();
}

async function GetRelationshipsGivenNothing(client: any, params: any) {
    let skip = 0, limit = 10, categories = [], types = [], purposes = [], hosts = [], apps = [];
    if (!_.isEmpty(params.skip)) skip = parseInt(params.skip) || 0;
    if (!_.isEmpty(params.limit)) limit = parseInt(params.limit) || 10;
    if (!_.isEmpty(params.nolimit)) limit = 100000;
    if (!_.isEmpty(params.categories)) categories = params.categories;
    if (!_.isEmpty(params.types)) types = params.types;
    if (!_.isEmpty(params.purposes)) purposes = params.purposes;
    if (!_.isEmpty(params.hosts)) hosts = params.hosts;
    if (!_.isEmpty(params.apps)) apps = params.apps;
    console.log(!_.isEmpty(params.skip), skip);
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
            { "$skip": skip },
            { "$limit": limit || 10 },
            { "$lookup": LookUpExpressionForRelationshipsUsingApp },
            { "$unwind": "$relinfo" },
            { "$project": AppProjection }
        ];
        console.log(5);
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
            { "$skip": skip },
            { "$limit": limit || 10 },
            { "$lookup": LookUpExpressionForRelationshipsUsingApp },
            { "$unwind": "$relinfo" },
            { "$project": AppProjection }
        ];
        console.log(6, skip);
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
            { "$skip": skip },
            { "$limit": limit || 10 },
            { "$lookup": LookUpExpressionForAppsFromRelationships },
            { "$unwind": "$appinfo" },
            { "$sort": { 'appinfo.title': 1} },
            { "$lookup": LookUpExpressionForHostsFromRelationships },
            { "$unwind": "$hostinfo" },
            { "$project": Object.assign({}, CombinedProjectionFromRels) }
        ];
        console.log(7);
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
            { "$skip": skip },
            { "$limit": limit || 10 },
            { "$project": CombinedProjectionFromRels }
        ];
        console.log(8);
        return GetRelationshipCollection(client).aggregate(AggregateExpressions).toArray();
    }
}

export async function GetGroupRelationships(groupsCollection: any, relationshipsCollection: any, params: any, callback: Function) {
    let group = null;
    if (!_.isEmpty(params.group)) group = params.group;
    let skip = 0, limit = 0;
    if (_.isFinite(params.skip)) skip = parseInt(params.skip) || 0;
    if (_.isFinite(params.limit)) limit = parseInt(params.limit) || 10;
    let data: any[] = [];
    if (group) {
        const groupData = await groupsCollection.find({ 'group': group }).toArray();
        let AggregateExpressions: any[] = [];
        AggregateExpressions = [
            {
                "$match": {
                    'host': { $in: groupData[0].hosts }
                }
            },
            { "$sort": { "host": -1 } },
            { "$lookup": LookUpExpressionForRelationshipsUsingHost },
            { "$unwind": "$relinfo" },
            { "$skip": skip },
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
        console.log(9);
        return relationshipsCollection.aggregate(AggregateExpressions).toArray();
    }
}


export async function GetRelationships(client: any, params: any, callback: Function) {
    const appsCollection = GetAppsCollection(client);
    const hostsCollection = GetHostsCollection(client);
    const groupsCollection = GetGroupsCollection(client);
    const relationshipsCollection = GetRelationshipCollection(client);
    let app = null, host = null, group = null, appList = [], useCount = false, count = null;
    if (!_.isEmpty(params.group)) group = params.group;
    if (!_.isEmpty(params.app)) app = params.app;
    if (!_.isEmpty(params.host)) host = params.host;
    if (!_.isEmpty(params.apps)) appList = params.apps;
    if (!_.isEmpty(params.count)) useCount = params.count === 'true';
    let data = [];
    // console.log(params);
    if (group) {
        console.log(101);
        data = await GetGroupRelationships(groupsCollection, relationshipsCollection, params, group);
    } else if (appList.length > 0) {
        console.log(102);
        data = await GetRelationshipsGivenAppList(relationshipsCollection, params, appList);
    } else if (app && host) {
        console.log(103);
        data = await GetRelationshipsGivenAppAndHost(appsCollection, params, app, host);
    } else if (app && !host) {
        console.log(104);
        data = await GetRelationshipsGivenApp(appsCollection, params, app);
    } else if (!app && host) {
        console.log(105);
        data = await GetRelationshipsGivenHost(hostsCollection, params, host, useCount);
    } else if (!app && !host) {
        console.log(106);
        data = await GetRelationshipsGivenNothing(client, params);
    }
    CleanupMongoClient(client);
    callback(data);
}

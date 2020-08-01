"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:quotemark
// tslint:disable:max-line-length
// tslint:disable:curly
// tslint:disable:prefer-const
// tslint:disable:radix
const client_1 = require("./client");
const constants_1 = require("./constants");
const _ = __importStar(require("lodash"));
function GetRelationshipsGivenAppList(collection, params, appList) {
    return __awaiter(this, void 0, void 0, function* () {
        let skip = 0, limit = 0;
        if (_.isFinite(params.skip))
            skip = parseInt(params.skip) || 0;
        if (_.isFinite(params.limit))
            limit = parseInt(params.limit) || 100;
        if (_.isFinite(params.nolimit))
            limit = 100000;
        let AggregateExpressions = [
            {
                "$match": {
                    'app': { $in: appList }
                }
            },
            // { "$sort": { "title": -1 } },
            { "$lookup": constants_1.LookUpExpressionForAppsFromRelationships },
            { "$lookup": constants_1.LookUpExpressionForHostsFromRelationships },
            { "$unwind": { path: "$appinfo", preserveNullAndEmptyArrays: true } },
            { "$unwind": { path: "$hostinfo", preserveNullAndEmptyArrays: true } },
            { "$skip": skip },
            { "$limit": limit || 100 },
            { "$project": constants_1.RelationshipProjection }
        ];
        console.log(1);
        return collection.aggregate(AggregateExpressions).toArray();
    });
}
function GetRelationshipsGivenApp(collection, params, app) {
    return __awaiter(this, void 0, void 0, function* () {
        let skip = 0, limit = 0;
        if (_.isFinite(params.skip))
            skip = parseInt(params.skip) || 0;
        if (_.isFinite(params.limit))
            limit = parseInt(params.limit) || 10;
        if (_.isFinite(params.nolimit))
            limit = 100000;
        let AggregateExpressions = [
            {
                "$match": {
                    'app': { $eq: app }
                }
            },
            { "$sort": { "title": -1 } },
            { "$lookup": constants_1.LookUpExpressionForRelationshipsUsingApp },
            { "$unwind": "$relinfo" },
            { "$skip": skip },
            { "$limit": limit || 10 },
            { "$project": constants_1.AppProjection }
        ];
        console.log(2);
        return collection.aggregate(AggregateExpressions).toArray();
    });
}
function GetRelationshipsGivenHost(collection, params, host, count = false) {
    return __awaiter(this, void 0, void 0, function* () {
        let skip = 0, limit = 0;
        if (_.isFinite(params.skip))
            skip = parseInt(params.skip) || 0;
        if (_.isFinite(params.limit))
            limit = parseInt(params.limit) || 10;
        if (_.isFinite(params.nolimit))
            limit = 100000;
        let AggregateExpressions = [];
        if (!count) {
            AggregateExpressions = [
                {
                    "$match": {
                        'host': { $eq: host }
                    }
                },
                { "$sort": { "host": -1 } },
                { "$lookup": constants_1.LookUpExpressionForRelationshipsUsingHost },
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
                { "$project": constants_1.HostProjection }
            ];
            console.log(3);
            return collection.aggregate(AggregateExpressions).toArray();
        }
        else {
            AggregateExpressions = [
                {
                    "$match": {
                        'host': { $eq: host }
                    }
                },
                { "$sort": { "host": -1 } },
                { "$lookup": constants_1.LookUpExpressionForRelationshipsUsingHost },
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
    });
}
function GetRelationshipsGivenAppAndHost(collection, params, app, host) {
    return __awaiter(this, void 0, void 0, function* () {
        let skip = 0, limit = 0;
        if (_.isFinite(params.skip))
            skip = parseInt(params.skip) || 0;
        if (_.isFinite(params.limit))
            limit = parseInt(params.limit) || 10;
        if (_.isFinite(params.nolimit))
            limit = 100000;
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
            { "$lookup": constants_1.LookUpExpressionForRelationshipsUsingApp },
            { "$unwind": "$relinfo" },
            ...HostMatchExpression,
            { "$skip": skip },
            { "$limit": limit || 10 },
            { "$project": constants_1.AppProjection }
        ];
        console.log(4);
        return collection.aggregate(AggregateExpressions).toArray();
    });
}
function GetRelationshipsGivenNothing(client, params) {
    return __awaiter(this, void 0, void 0, function* () {
        let skip = 0, limit = 10, categories = [], types = [], purposes = [], hosts = [], apps = [];
        if (!_.isEmpty(params.skip))
            skip = parseInt(params.skip) || 0;
        if (!_.isEmpty(params.limit))
            limit = parseInt(params.limit) || 10;
        if (!_.isEmpty(params.nolimit))
            limit = 100000;
        if (!_.isEmpty(params.categories))
            categories = params.categories;
        if (!_.isEmpty(params.types))
            types = params.types;
        if (!_.isEmpty(params.purposes))
            purposes = params.purposes;
        if (!_.isEmpty(params.hosts))
            hosts = params.hosts;
        if (!_.isEmpty(params.apps))
            apps = params.apps;
        console.log(!_.isEmpty(params.skip), skip);
        if (_.isEmpty(params.categories) &&
            _.isEmpty(params.types) &&
            _.isEmpty(params.purposes) &&
            _.isEmpty(params.hosts) &&
            _.isEmpty(params.apps)) {
            let AggregateExpressions = [
                {
                    "$match": {
                        'title': { $ne: null }
                    }
                },
                { "$sort": { "title": -1 } },
                { "$skip": skip },
                { "$limit": limit || 10 },
                { "$lookup": constants_1.LookUpExpressionForRelationshipsUsingApp },
                { "$unwind": "$relinfo" },
                { "$project": constants_1.AppProjection }
            ];
            console.log(5);
            return constants_1.GetAppsCollection(client).aggregate(AggregateExpressions).toArray();
        }
        else if (!_.isEmpty(params.categories) &&
            _.isEmpty(params.types) &&
            _.isEmpty(params.purposes) &&
            _.isEmpty(params.hosts) &&
            _.isEmpty(params.apps)) {
            let matchExpressions = [];
            if (!_.isEmpty(params.categories)) {
                matchExpressions.push({ 'genre': { '$in': params.categories } });
            }
            let AggregateExpressions = [
                {
                    "$match": Object.assign({}, {}, ...matchExpressions)
                },
                { "$skip": skip },
                { "$limit": limit || 10 },
                { "$lookup": constants_1.LookUpExpressionForRelationshipsUsingApp },
                { "$unwind": "$relinfo" },
                { "$project": constants_1.AppProjection }
            ];
            console.log(6, skip);
            return constants_1.GetAppsCollection(client).aggregate(AggregateExpressions).toArray();
        }
        else if (_.isEmpty(params.categories) &&
            (!_.isEmpty(params.types) || !_.isEmpty(params.purposes)) &&
            _.isEmpty(params.hosts) &&
            _.isEmpty(params.apps)) {
            let matchExpressions = [];
            if (!_.isEmpty(params.types)) {
                matchExpressions.push({ 'type': { '$in': params.types } });
            }
            if (!_.isEmpty(params.purposes)) {
                matchExpressions.push({ 'purpose': { '$in': params.purposes } });
            }
            let AggregateExpressions = [
                {
                    "$match": Object.assign({}, {}, ...matchExpressions)
                },
                { "$skip": skip },
                { "$limit": limit || 10 },
                { "$lookup": constants_1.LookUpExpressionForAppsFromRelationships },
                { "$unwind": "$appinfo" },
                { "$sort": { 'appinfo.title': 1 } },
                { "$lookup": constants_1.LookUpExpressionForHostsFromRelationships },
                { "$unwind": "$hostinfo" },
                { "$project": Object.assign({}, constants_1.CombinedProjectionFromRels) }
            ];
            console.log(7);
            return constants_1.GetRelationshipCollection(client).aggregate(AggregateExpressions).toArray();
        }
        else {
            let matchExpressions = [];
            let relationshipxpressions = [];
            if (!_.isEmpty(params.categories)) {
                matchExpressions.push({ 'appinfo.genre': { '$in': params.categories } });
            }
            if (!_.isEmpty(params.types)) {
                relationshipxpressions.push({ 'type': { '$in': params.types } });
            }
            if (!_.isEmpty(params.purposes)) {
                relationshipxpressions.push({ 'purpose': { '$in': params.purposes } });
            }
            if (!_.isEmpty(params.hosts)) {
                relationshipxpressions.push({ 'host': { $in: hosts } });
            }
            if (!_.isEmpty(params.apps)) {
                relationshipxpressions.push({ 'app': { $in: apps } });
            }
            let AggregateExpressions = [
                {
                    "$match": Object.assign({}, {
                    // 'appinfo.title': { $ne: null },
                    }, ...relationshipxpressions)
                },
                { "$lookup": constants_1.LookUpExpressionForAppsFromRelationships },
                { "$unwind": "$appinfo" },
                { "$lookup": constants_1.LookUpExpressionForHostsFromRelationships },
                { "$unwind": "$hostinfo" },
                {
                    "$match": Object.assign({}, {
                    // 'appinfo.title': { $ne: null },
                    }, ...matchExpressions)
                },
                { "$skip": skip },
                { "$limit": limit || 10 },
                { "$project": constants_1.CombinedProjectionFromRels }
            ];
            console.log(8);
            return constants_1.GetRelationshipCollection(client).aggregate(AggregateExpressions).toArray();
        }
    });
}
function GetGroupRelationships(groupsCollection, relationshipsCollection, params, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        let group = null;
        if (!_.isEmpty(params.group))
            group = params.group;
        let skip = 0, limit = 0;
        if (_.isFinite(params.skip))
            skip = parseInt(params.skip) || 0;
        if (_.isFinite(params.limit))
            limit = parseInt(params.limit) || 10;
        let data = [];
        if (group) {
            const groupData = yield groupsCollection.find({ 'group': group }).toArray();
            let AggregateExpressions = [];
            AggregateExpressions = [
                {
                    "$match": {
                        'host': { $in: groupData[0].hosts }
                    }
                },
                { "$sort": { "host": -1 } },
                { "$lookup": constants_1.LookUpExpressionForRelationshipsUsingHost },
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
                { "$project": constants_1.HostProjection }
            ];
            console.log(9);
            return relationshipsCollection.aggregate(AggregateExpressions).toArray();
        }
    });
}
exports.GetGroupRelationships = GetGroupRelationships;
function GetRelationships(client, params, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const appsCollection = constants_1.GetAppsCollection(client);
        const hostsCollection = constants_1.GetHostsCollection(client);
        const groupsCollection = constants_1.GetGroupsCollection(client);
        const relationshipsCollection = constants_1.GetRelationshipCollection(client);
        let app = null, host = null, group = null, appList = [], useCount = false, count = null;
        if (!_.isEmpty(params.group))
            group = params.group;
        if (!_.isEmpty(params.app))
            app = params.app;
        if (!_.isEmpty(params.host))
            host = params.host;
        if (!_.isEmpty(params.apps))
            appList = params.apps;
        if (!_.isEmpty(params.count))
            useCount = params.count === 'true';
        let data = [];
        // console.log(params);
        if (group) {
            console.log(101);
            data = yield GetGroupRelationships(groupsCollection, relationshipsCollection, params, group);
        }
        else if (appList.length > 0) {
            console.log(102);
            data = yield GetRelationshipsGivenAppList(relationshipsCollection, params, appList);
        }
        else if (app && host) {
            console.log(103);
            data = yield GetRelationshipsGivenAppAndHost(appsCollection, params, app, host);
        }
        else if (app && !host) {
            console.log(104);
            data = yield GetRelationshipsGivenApp(appsCollection, params, app);
        }
        else if (!app && host) {
            console.log(105);
            data = yield GetRelationshipsGivenHost(hostsCollection, params, host, useCount);
        }
        else if (!app && !host) {
            console.log(106);
            data = yield GetRelationshipsGivenNothing(client, params);
        }
        client_1.CleanupMongoClient(client);
        callback(data);
    });
}
exports.GetRelationships = GetRelationships;

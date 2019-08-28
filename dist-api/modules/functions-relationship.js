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
            limit = parseInt(params.limit) || 10;
        if (_.isFinite(params.nolimit))
            limit = 100000;
        let AggregateExpressions = [
            {
                "$match": {
                    'title': { $ne: null },
                    'app': { $in: appList }
                }
            },
            { "$sort": { "title": -1 } },
            { "$lookup": constants_1.LookUpExpressionForRelationshipsUsingApp },
            { "$unwind": "$relinfo" },
            { "$skip": skip || 0 },
            { "$limit": limit || 10 },
            { "$project": constants_1.AppProjection }
        ];
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
            { "$skip": skip || 0 },
            { "$limit": limit || 10 },
            { "$project": constants_1.AppProjection }
        ];
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
                { "$project": constants_1.HostProjection }
            ];
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
            { "$skip": skip || 0 },
            { "$limit": limit || 10 },
            { "$project": constants_1.AppProjection }
        ];
        return collection.aggregate(AggregateExpressions).toArray();
    });
}
function GetRelationshipsGivenNothing(client, params) {
    return __awaiter(this, void 0, void 0, function* () {
        let skip = 0, limit = 0, categories = [], types = [], purposes = [], hosts = [], apps = [];
        if (_.isFinite(params.skip))
            skip = parseInt(params.skip) || 0;
        if (_.isFinite(params.limit))
            limit = parseInt(params.limit) || 10;
        if (_.isFinite(params.nolimit))
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
                { "$skip": skip || 0 },
                { "$limit": limit || 10 },
                { "$lookup": constants_1.LookUpExpressionForRelationshipsUsingApp },
                { "$unwind": "$relinfo" },
                { "$project": constants_1.AppProjection }
            ];
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
                { "$skip": skip || 0 },
                { "$limit": limit || 10 },
                { "$lookup": constants_1.LookUpExpressionForRelationshipsUsingApp },
                { "$unwind": "$relinfo" },
                { "$project": constants_1.AppProjection }
            ];
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
                { "$skip": skip || 0 },
                { "$limit": limit || 10 },
                { "$lookup": constants_1.LookUpExpressionForAppsFromRelationships },
                { "$unwind": "$appinfo" },
                { "$sort": { 'appinfo.title': 1 } },
                { "$lookup": constants_1.LookUpExpressionForHostsFromRelationships },
                { "$unwind": "$hostinfo" },
                { "$project": Object.assign({}, constants_1.CombinedProjectionFromRels) }
            ];
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
                { "$skip": skip || 0 },
                { "$limit": limit || 10 },
                { "$project": constants_1.CombinedProjectionFromRels }
            ];
            return constants_1.GetRelationshipCollection(client).aggregate(AggregateExpressions).toArray();
        }
    });
}
function GetRelationships(client, params, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const appsCollection = constants_1.GetAppsCollection(client);
        const hostsCollection = constants_1.GetHostsCollection(client);
        let app = null, host = null, appList = [], useCount = false, count = null;
        if (!_.isEmpty(params.app))
            app = params.app;
        if (!_.isEmpty(params.host))
            host = params.host;
        if (!_.isEmpty(params.appList))
            appList = params.appList;
        if (!_.isEmpty(params.count))
            useCount = params.count === 'true';
        let data = [];
        if (appList.length > 0) {
            data = yield GetRelationshipsGivenAppList(appsCollection, params, appList);
        }
        else if (app && host) {
            data = yield GetRelationshipsGivenAppAndHost(appsCollection, params, app, host);
        }
        else if (app && !host) {
            data = yield GetRelationshipsGivenApp(appsCollection, params, app);
        }
        else if (!app && host) {
            data = yield GetRelationshipsGivenHost(hostsCollection, params, host, useCount);
        }
        else if (!app && !host) {
            data = yield GetRelationshipsGivenNothing(client, params);
        }
        client_1.CleanupMongoClient(client);
        callback(data);
    });
}
exports.GetRelationships = GetRelationships;

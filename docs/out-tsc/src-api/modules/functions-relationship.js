var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// tslint:disable:quotemark
// tslint:disable:max-line-length
// tslint:disable:curly
// tslint:disable:prefer-const
// tslint:disable:radix
import { CleanupMongoClient } from "./client";
import { AppProjection, HostProjection, GetAppsCollection, GetHostsCollection, LookUpExpressionForRelationshipsUsingApp, LookUpExpressionForRelationshipsUsingHost, LookUpExpressionForAppsFromRelationships, LookUpExpressionForHostsFromRelationships, GetRelationshipCollection, CombinedProjectionFromRels } from "./constants";
import * as _ from 'lodash';
function GetRelationshipsGivenAppList(collection, params, appList) {
    return __awaiter(this, void 0, void 0, function () {
        var skip, limit, AggregateExpressions;
        return __generator(this, function (_a) {
            skip = 0, limit = 0;
            if (!_.isEmpty(params.skip))
                skip = parseInt(params.skip) || 0;
            if (!_.isEmpty(params.limit))
                limit = parseInt(params.limit) || 10;
            if (!_.isEmpty(params.nolimit))
                limit = 100000;
            AggregateExpressions = [
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
            return [2 /*return*/, collection.aggregate(AggregateExpressions).toArray()];
        });
    });
}
function GetRelationshipsGivenApp(collection, params, app) {
    return __awaiter(this, void 0, void 0, function () {
        var skip, limit, AggregateExpressions;
        return __generator(this, function (_a) {
            skip = 0, limit = 0;
            if (!_.isEmpty(params.skip))
                skip = parseInt(params.skip) || 0;
            if (!_.isEmpty(params.limit))
                limit = parseInt(params.limit) || 10;
            if (!_.isEmpty(params.nolimit))
                limit = 100000;
            AggregateExpressions = [
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
            return [2 /*return*/, collection.aggregate(AggregateExpressions).toArray()];
        });
    });
}
function GetRelationshipsGivenHost(collection, params, host, count) {
    if (count === void 0) { count = false; }
    return __awaiter(this, void 0, void 0, function () {
        var skip, limit, AggregateExpressions;
        return __generator(this, function (_a) {
            skip = 0, limit = 0;
            if (!_.isEmpty(params.skip))
                skip = parseInt(params.skip) || 0;
            if (!_.isEmpty(params.limit))
                limit = parseInt(params.limit) || 10;
            if (!_.isEmpty(params.nolimit))
                limit = 100000;
            AggregateExpressions = [];
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
                return [2 /*return*/, collection.aggregate(AggregateExpressions).toArray()];
            }
            else {
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
                return [2 /*return*/, collection.aggregate(AggregateExpressions).toArray()];
            }
            return [2 /*return*/];
        });
    });
}
function GetRelationshipsGivenAppAndHost(collection, params, app, host) {
    return __awaiter(this, void 0, void 0, function () {
        var skip, limit, HostMatchExpression, AggregateExpressions;
        return __generator(this, function (_a) {
            skip = 0, limit = 0;
            if (!_.isEmpty(params.skip))
                skip = parseInt(params.skip) || 0;
            if (!_.isEmpty(params.limit))
                limit = parseInt(params.limit) || 10;
            if (!_.isEmpty(params.nolimit))
                limit = 100000;
            HostMatchExpression = [
                { "$match": { 'relinfo.host': { '$eq': host } } }
            ];
            AggregateExpressions = [
                {
                    "$match": {
                        'title': { $ne: null },
                        'app': { $eq: app }
                    }
                },
                { "$sort": { "title": -1 } },
                { "$lookup": LookUpExpressionForRelationshipsUsingApp },
                { "$unwind": "$relinfo" }
            ].concat(HostMatchExpression, [
                { "$skip": skip || 0 },
                { "$limit": limit || 10 },
                { "$project": AppProjection }
            ]);
            return [2 /*return*/, collection.aggregate(AggregateExpressions).toArray()];
        });
    });
}
function GetRelationshipsGivenNothing(client, params) {
    return __awaiter(this, void 0, void 0, function () {
        var skip, limit, categories, types, purposes, hosts, apps, AggregateExpressions, matchExpressions, AggregateExpressions, matchExpressions, AggregateExpressions, matchExpressions, relationshipxpressions, AggregateExpressions;
        return __generator(this, function (_a) {
            skip = 0, limit = 0, categories = [], types = [], purposes = [], hosts = [], apps = [];
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
            if (_.isEmpty(params.categories) &&
                _.isEmpty(params.types) &&
                _.isEmpty(params.purposes) &&
                _.isEmpty(params.hosts) &&
                _.isEmpty(params.apps)) {
                AggregateExpressions = [
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
                return [2 /*return*/, GetAppsCollection(client).aggregate(AggregateExpressions).toArray()];
            }
            else if (!_.isEmpty(params.categories) &&
                _.isEmpty(params.types) &&
                _.isEmpty(params.purposes) &&
                _.isEmpty(params.hosts) &&
                _.isEmpty(params.apps)) {
                matchExpressions = [];
                if (!_.isEmpty(params.categories)) {
                    matchExpressions.push({ 'genre': { '$in': params.categories } });
                }
                AggregateExpressions = [
                    {
                        "$match": Object.assign.apply(Object, [{}, {}].concat(matchExpressions))
                    },
                    { "$skip": skip || 0 },
                    { "$limit": limit || 10 },
                    { "$lookup": LookUpExpressionForRelationshipsUsingApp },
                    { "$unwind": "$relinfo" },
                    { "$project": AppProjection }
                ];
                return [2 /*return*/, GetAppsCollection(client).aggregate(AggregateExpressions).toArray()];
            }
            else if (_.isEmpty(params.categories) &&
                (!_.isEmpty(params.types) || !_.isEmpty(params.purposes)) &&
                _.isEmpty(params.hosts) &&
                _.isEmpty(params.apps)) {
                matchExpressions = [];
                if (!_.isEmpty(params.types)) {
                    matchExpressions.push({ 'type': { '$in': params.types } });
                }
                if (!_.isEmpty(params.purposes)) {
                    matchExpressions.push({ 'purpose': { '$in': params.purposes } });
                }
                AggregateExpressions = [
                    {
                        "$match": Object.assign.apply(Object, [{}, {}].concat(matchExpressions))
                    },
                    { "$skip": skip || 0 },
                    { "$limit": limit || 10 },
                    { "$lookup": LookUpExpressionForAppsFromRelationships },
                    { "$unwind": "$appinfo" },
                    { "$sort": { 'appinfo.title': 1 } },
                    { "$lookup": LookUpExpressionForHostsFromRelationships },
                    { "$unwind": "$hostinfo" },
                    { "$project": Object.assign({}, CombinedProjectionFromRels) }
                ];
                return [2 /*return*/, GetRelationshipCollection(client).aggregate(AggregateExpressions).toArray()];
            }
            else {
                matchExpressions = [];
                relationshipxpressions = [];
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
                AggregateExpressions = [
                    {
                        "$match": Object.assign.apply(Object, [{}, {
                            // 'appinfo.title': { $ne: null },
                            }].concat(relationshipxpressions))
                    },
                    { "$lookup": LookUpExpressionForAppsFromRelationships },
                    { "$unwind": "$appinfo" },
                    { "$lookup": LookUpExpressionForHostsFromRelationships },
                    { "$unwind": "$hostinfo" },
                    {
                        "$match": Object.assign.apply(Object, [{}, {
                            // 'appinfo.title': { $ne: null },
                            }].concat(matchExpressions))
                    },
                    { "$skip": skip || 0 },
                    { "$limit": limit || 10 },
                    { "$project": CombinedProjectionFromRels }
                ];
                return [2 /*return*/, GetRelationshipCollection(client).aggregate(AggregateExpressions).toArray()];
            }
            return [2 /*return*/];
        });
    });
}
export function GetRelationships(client, params, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var appsCollection, hostsCollection, app, host, appList, useCount, count, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appsCollection = GetAppsCollection(client);
                    hostsCollection = GetHostsCollection(client);
                    app = null, host = null, appList = [], useCount = false, count = null;
                    if (!_.isEmpty(params.app))
                        app = params.app;
                    if (!_.isEmpty(params.host))
                        host = params.host;
                    if (!_.isEmpty(params.appList))
                        appList = params.appList;
                    if (!_.isEmpty(params.count))
                        useCount = params.count === 'true';
                    data = [];
                    if (!(appList.length > 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, GetRelationshipsGivenAppList(appsCollection, params, appList)];
                case 1:
                    data = _a.sent();
                    return [3 /*break*/, 10];
                case 2:
                    if (!(app && host)) return [3 /*break*/, 4];
                    return [4 /*yield*/, GetRelationshipsGivenAppAndHost(appsCollection, params, app, host)];
                case 3:
                    data = _a.sent();
                    return [3 /*break*/, 10];
                case 4:
                    if (!(app && !host)) return [3 /*break*/, 6];
                    return [4 /*yield*/, GetRelationshipsGivenApp(appsCollection, params, app)];
                case 5:
                    data = _a.sent();
                    return [3 /*break*/, 10];
                case 6:
                    if (!(!app && host)) return [3 /*break*/, 8];
                    return [4 /*yield*/, GetRelationshipsGivenHost(hostsCollection, params, host, useCount)];
                case 7:
                    data = _a.sent();
                    return [3 /*break*/, 10];
                case 8:
                    if (!(!app && !host)) return [3 /*break*/, 10];
                    return [4 /*yield*/, GetRelationshipsGivenNothing(client, params)];
                case 9:
                    data = _a.sent();
                    _a.label = 10;
                case 10:
                    CleanupMongoClient(client);
                    callback(data);
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=functions-relationship.js.map
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
function GetSearchToken(client, params, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const appsCollection = constants_1.GetAppsCollection(client);
        const hostsCollection = constants_1.GetHostsCollection(client);
        let skip = 0, limit = 5;
        if (_.isFinite(params.skip))
            skip = parseInt(params.skip) || 0;
        if (_.isFinite(params.limit))
            limit = parseInt(params.limit) || 10;
        const appsData = yield appsCollection.aggregate([
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
        const hostsData = yield hostsCollection.aggregate([
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
        client_1.CleanupMongoClient(client);
        callback({
            apps: appsData,
            hosts: hostsData
        });
    });
}
exports.GetSearchToken = GetSearchToken;

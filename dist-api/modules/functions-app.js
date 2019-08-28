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
const client_1 = require("./client");
const constants_1 = require("./constants");
const _ = __importStar(require("lodash"));
// tslint:disable:radix
function GetAppDetails(client, params, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const appsCollection = constants_1.GetAppsCollection(client);
        let data = null;
        if (params['app']) {
            data = yield appsCollection.find({ app: params['app'] }).toArray();
            client_1.CleanupMongoClient(client);
            if (data.length > 0) {
                callback(data[0]);
            }
            else {
                callback(null);
            }
        }
        else {
            let skip = 0, limit = 10;
            if (_.isFinite(params.skip)) {
                skip = parseInt(params.skip) || 0;
            }
            if (_.isFinite(params.limit)) {
                limit = parseInt(params.limit) || 10;
            }
            data = yield appsCollection.find({}).skip(skip).limit(limit).toArray();
            client_1.CleanupMongoClient(client);
            if (data.length > 0) {
                callback(data);
            }
            else {
                callback(null);
            }
        }
    });
}
exports.GetAppDetails = GetAppDetails;
function GetHostDetails(client, params, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const hostsCollection = constants_1.GetHostsCollection(client);
        if (params['host']) {
            const data = yield hostsCollection.find({ host: params['host'] }).toArray();
            client_1.CleanupMongoClient(client);
            if (data.length > 0) {
                callback(data[0]);
            }
            else {
                callback(null);
            }
        }
        else {
            let skip = 0, limit = 10;
            if (_.isFinite(params.skip)) {
                skip = parseInt(params.skip) || 0;
            }
            if (_.isFinite(params.limit)) {
                limit = parseInt(params.limit) || 10;
            }
            const data = yield hostsCollection.find({}).skip(skip).limit(limit).toArray();
            client_1.CleanupMongoClient(client);
            if (data.length > 0) {
                callback(data);
            }
            else {
                callback(null);
            }
        }
    });
}
exports.GetHostDetails = GetHostDetails;

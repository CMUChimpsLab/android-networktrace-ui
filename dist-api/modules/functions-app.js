"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:quotemark
// tslint:disable:max-line-length
const client_1 = require("./client");
const constants_1 = require("./constants");
function GetAppDetails(client, params, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const appsCollection = constants_1.GetAppsCollection(client);
        const data = yield appsCollection.find({ app: params['app'] }).toArray();
        client_1.CleanupMongoClient(client);
        if (data.length > 0) {
            callback(data[0]);
        }
        else {
            callback(null);
        }
    });
}
exports.GetAppDetails = GetAppDetails;
function GetHostDetails(client, params, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const hostsCollection = constants_1.GetHostsCollection(client);
        const data = yield hostsCollection.find({ host: params['host'] }).toArray();
        client_1.CleanupMongoClient(client);
        if (data.length > 0) {
            callback(data[0]);
        }
        else {
            callback(null);
        }
    });
}
exports.GetHostDetails = GetHostDetails;

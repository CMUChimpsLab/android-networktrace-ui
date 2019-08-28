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
function GetAppsCount(client, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const appsCollection = constants_1.GetAppsCollection(client);
        const length = (yield appsCollection.count()) || 0;
        client_1.CleanupMongoClient(client);
        callback(length);
    });
}
exports.GetAppsCount = GetAppsCount;
function GetAppsWithValidTitleCount(client, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const appsCollection = constants_1.GetAppsCollection(client);
        const length = (yield appsCollection.find({ 'title': { $ne: null } }).count()) || 0;
        client_1.CleanupMongoClient(client);
        callback(length);
    });
}
exports.GetAppsWithValidTitleCount = GetAppsWithValidTitleCount;
function GetCategories(client, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const appsCollection = constants_1.GetAppsCollection(client);
        const data = yield appsCollection.distinct('genre');
        client_1.CleanupMongoClient(client);
        callback(data);
    });
}
exports.GetCategories = GetCategories;
function GetDataTypesAndPurposes(client, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const appsCollection = constants_1.GetRelationshipCollection(client);
        const typesData = yield appsCollection.aggregate([
            { '$group': { _id: "$type", count: { $sum: 1 } } }
        ]).toArray();
        const purposeData = yield appsCollection.aggregate([
            { '$group': { _id: "$purpose", count: { $sum: 1 } } }
        ]).toArray();
        client_1.CleanupMongoClient(client);
        callback({
            types: typesData,
            purposes: purposeData
        });
    });
}
exports.GetDataTypesAndPurposes = GetDataTypesAndPurposes;
function GetDataForBuildingParams(client, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const appsCollection = constants_1.GetAppsCollection(client);
        const relationshipCollection = constants_1.GetRelationshipCollection(client);
        const categories = yield appsCollection.distinct('genre');
        const typesData = yield relationshipCollection.aggregate([
            { '$group': { _id: "$type", count: { $sum: 1 } } }
        ]).toArray();
        const purposeData = yield relationshipCollection.aggregate([
            { '$group': { _id: "$purpose", count: { $sum: 1 } } }
        ]).toArray();
        client_1.CleanupMongoClient(client);
        callback({
            categories: categories,
            types: typesData,
            purposes: purposeData
        });
    });
}
exports.GetDataForBuildingParams = GetDataForBuildingParams;

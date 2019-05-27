// tslint:disable:quotemark
// tslint:disable:max-line-length
import { CleanupMongoClient } from "./client";
import { GetAppsCollection, GetRelationshipCollection } from "./constants";
import * as _ from 'lodash';

export async function GetAppsCount(client: any, callback: Function) {
    const appsCollection = GetAppsCollection(client);
    const length = await appsCollection.count() || 0;
    CleanupMongoClient(client);
    callback(length);
}

export async function GetAppsWithValidTitleCount(client: any, callback: Function) {
    const appsCollection = GetAppsCollection(client);
    const length = await appsCollection.find({ 'title': { $ne: null } }).count() || 0;
    CleanupMongoClient(client);
    callback(length);
}

export async function GetCategories(client: any, callback: Function) {
    const appsCollection = GetAppsCollection(client);
    const data = await appsCollection.distinct('genre');
    CleanupMongoClient(client);
    callback(data);
}

export async function GetDataTypesAndPurposes(client: any, callback: Function) {
    const appsCollection = GetRelationshipCollection(client);
    const typesData = await appsCollection.aggregate([
        { '$group' : { _id : "$type", count: { $sum: 1 } } }
    ]).toArray();
    const purposeData = await appsCollection.aggregate([
        { '$group' : { _id : "$purpose", count: { $sum: 1 } } }
    ]).toArray();
    CleanupMongoClient(client);
    callback({
        types: typesData,
        purposes: purposeData
    });
}

export async function GetDataForBuildingParams(client: any, callback: Function) {
    const appsCollection = GetAppsCollection(client);
    const relationshipCollection = GetRelationshipCollection(client);
    const categories = await appsCollection.distinct('genre');
    const typesData = await relationshipCollection.aggregate([
        { '$group' : { _id : "$type", count: { $sum: 1 } } }
    ]).toArray();
    const purposeData = await relationshipCollection.aggregate([
        { '$group' : { _id : "$purpose", count: { $sum: 1 } } }
    ]).toArray();
    CleanupMongoClient(client);
    callback({
        categories: categories,
        types: typesData,
        purposes: purposeData
    });
}

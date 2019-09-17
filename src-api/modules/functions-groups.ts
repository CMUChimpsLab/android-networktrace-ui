// tslint:disable:quotemark
// tslint:disable:max-line-length
// tslint:disable:curly
// tslint:disable:prefer-const
// tslint:disable:radix
import { CleanupMongoClient } from "./client";
import { AppProjection, HostProjection, GetAppsCollection, GetHostsCollection, LookUpExpressionForRelationshipsUsingApp, LookUpExpressionForRelationshipsUsingHost, LookUpExpressionForAppsFromRelationships, LookUpExpressionForHostsFromRelationships, GetRelationshipCollection, CombinedProjectionFromRels, GetGroupsCollection } from "./constants";
import * as _ from 'lodash';

export async function GetGroupDetails(client: any, params: any, callback: Function) {
    const groupsCollection = GetGroupsCollection(client);
    let data = null;
    if (params['group']) {
        data = await groupsCollection.find({ group: params['group'] }).toArray();
        CleanupMongoClient(client);
        if (data.length > 0) {
            callback(data[0]);
        } else {
            callback(null);
        }
    }
    callback(null);
}

export async function GetGroupRelationships(client: any, params: any, callback: Function) {
    const groupsCollection = GetGroupsCollection(client);
    const relationshipsCollection = GetRelationshipCollection(client);
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
        data = await relationshipsCollection.aggregate(AggregateExpressions).toArray();
    }
    CleanupMongoClient(client);
    callback(data);
}

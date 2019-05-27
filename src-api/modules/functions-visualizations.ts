// tslint:disable:quotemark
// tslint:disable:max-line-length
// tslint:disable:curly
// tslint:disable:prefer-const
// tslint:disable:radix
import { CleanupMongoClient } from "./client";
import { GetRelationshipCollection, GetHostsCollection, LookUpExpressionForAppsFromRelationships } from "./constants";
import * as _ from 'lodash';

export async function GetPurposeDistribution(client: any, params: any, callback: Function) {
    const collection = GetRelationshipCollection(client);
    let MatchExpressions = [];
    if (!_.isEmpty(params['apps'])) {
        MatchExpressions.push({
            'app': { $in: params['apps'] }
        });
    }
    if (!_.isEmpty(params['hosts'])) {
        MatchExpressions.push({
            'host': { $in: params['hosts'] }
        });
    }
    const data = await collection.aggregate([
        {
            '$match': Object.assign({}, ...MatchExpressions)
        },
        {
            '$project':
            {
                type: 1,
                purpose: 1,
                host: 1,
                app: 1,
            }
        },
        {
            '$group': {
                _id: { purpose: '$purpose', type: '$type' },
                count: { $sum: 1 }
            }
        }
    ]).toArray();
    CleanupMongoClient(client);
    callback(data);
}

export async function GetCatgegoryWiseDistribution(client: any, params: any, callback: Function) {
    const collection = GetRelationshipCollection(client);
    let MatchExpressions = [];
    if (!_.isEmpty(params['hosts'])) {
        MatchExpressions.push({
            'host': { $in: params['hosts'] }
        });
    }
    const data = await collection.aggregate([
        {
            '$match': Object.assign({}, ...MatchExpressions)
        },
        { "$lookup": LookUpExpressionForAppsFromRelationships },
        {
            '$project': {
                genre: '$appinfo.genre',
            }
        },
        {
            '$group': {
                _id: { genre: '$genre' },
                count: { $sum: 1 }
            }
        }
    ]).toArray();
    CleanupMongoClient(client);
    callback(data);
}

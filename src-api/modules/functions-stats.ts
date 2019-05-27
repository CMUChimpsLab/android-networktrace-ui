import { CleanupMongoClient } from './client';
import { GetRelationshipCollection, GetHostsCollection, LookUpExpressionForAppsFromRelationships } from './constants';
import * as _ from 'lodash';

export async function GetPopularTypeAndPurpose(client: any, params: any, callback: Function) {
    const collection = GetRelationshipCollection(client);
    const MatchExpressions = [];
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
    if (!_.isEmpty(params['types'])) {
        MatchExpressions.push({
            'type': { $in: params['types'] }
        });
    }
    if (!_.isEmpty(params['purposes'])) {
        MatchExpressions.push({
            'purpose': { $in: params['purposes'] }
        });
    }
    const facets: any[] = [];
    facets.push({
        'POPULAR_TYPE': [
            { '$group': { _id: '$type', count: { $sum: 1 } } },
            { '$sort': { 'count': -1 } },
            { '$limit': 1 },
            { '$project': { '_id': '$_id' } }
        ]
    });
    facets.push({
        'POPULAR_PURPOSE': [
            { '$group': { _id: { type: '$type', purpose: '$purpose' }, count: { $sum: 1 } } },
            { '$sort': { 'count': -1 } },
            { '$limit': 1 },
            { '$project': { '_id': '$_id' } }
        ]
    });
    facets.push({
        'POPULAR_HOST': [
            { '$group': { _id: '$host', count: { $sum: 1 } } },
            { '$sort': { 'count': -1 } },
            { '$limit': 1 },
            {
                '$lookup': {
                    'localField': '_id',
                    'from': 'hosts',
                    'foreignField': 'host',
                    'as': 'hostinfo'
                }
            },
            { '$unwind': '$hostinfo' },
            { '$project': { '_id': '$hostinfo' } }
        ]
    });
    facets.push({
        'POPULAR_APP': [
            { '$group': { _id: '$app', count: { $sum: 1 } } },
            { '$sort': { 'count': -1 } },
            { '$limit': 1 },
            {
                '$lookup': {
                    'localField': '_id',
                    'from': 'apps',
                    'foreignField': 'app',
                    'as': 'appinfo'
                }
            },
            { '$unwind': '$appinfo' },
            { '$project': { '_id': '$appinfo' } }
        ]
    });
    const FacetsObjectsInfo = Object.assign({}, ...facets);
    if (!_.isEmpty(params['apps'])) {
        delete FacetsObjectsInfo['POPULAR_APP'];
    }
    if (!_.isEmpty(params['hosts'])) {
        delete FacetsObjectsInfo['POPULAR_HOST'];
    }
    if (!_.isEmpty(params['types'])) {
        delete FacetsObjectsInfo['POPULAR_TYPE'];
    }
    if (!_.isEmpty(params['purposes'])) {
        delete FacetsObjectsInfo['POPULAR_PURPOSE'];
    }
    const ProjectionInfo = Object.getOwnPropertyNames(FacetsObjectsInfo).reduce((prev, curr) => {
        return Object.assign({}, prev, {
            [curr]: { '$arrayElemAt': [`$${curr}`, 0] }
        });
    }, {});
    const AggregateExpressions: any[] = [
        {
            '$match': Object.assign({}, ...MatchExpressions)
        },
        {
            '$facet': FacetsObjectsInfo
        },
        {
            '$project': ProjectionInfo
        }
    ];
    console.log(AggregateExpressions);
    const data = await collection.aggregate(AggregateExpressions).toArray();
    CleanupMongoClient(client);
    callback(data);
}

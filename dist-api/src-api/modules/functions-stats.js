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
const client_1 = require("./client");
const constants_1 = require("./constants");
const _ = __importStar(require("lodash"));
function GetPopularTypeAndPurpose(client, params, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = constants_1.GetRelationshipCollection(client);
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
        const facets = [];
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
        const AggregateExpressions = [
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
        const data = yield collection.aggregate(AggregateExpressions).toArray();
        client_1.CleanupMongoClient(client);
        callback(data);
    });
}
exports.GetPopularTypeAndPurpose = GetPopularTypeAndPurpose;

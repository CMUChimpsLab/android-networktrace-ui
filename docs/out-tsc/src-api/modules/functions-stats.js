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
import { CleanupMongoClient } from './client';
import { GetRelationshipCollection } from './constants';
import * as _ from 'lodash';
export function GetPopularTypeAndPurpose(client, params, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, MatchExpressions, facets, FacetsObjectsInfo, ProjectionInfo, AggregateExpressions, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    collection = GetRelationshipCollection(client);
                    MatchExpressions = [];
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
                    facets = [];
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
                    FacetsObjectsInfo = Object.assign.apply(Object, [{}].concat(facets));
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
                    ProjectionInfo = Object.getOwnPropertyNames(FacetsObjectsInfo).reduce(function (prev, curr) {
                        var _a;
                        return Object.assign({}, prev, (_a = {},
                            _a[curr] = { '$arrayElemAt': ["$" + curr, 0] },
                            _a));
                    }, {});
                    AggregateExpressions = [
                        {
                            '$match': Object.assign.apply(Object, [{}].concat(MatchExpressions))
                        },
                        {
                            '$facet': FacetsObjectsInfo
                        },
                        {
                            '$project': ProjectionInfo
                        }
                    ];
                    console.log(AggregateExpressions);
                    return [4 /*yield*/, collection.aggregate(AggregateExpressions).toArray()];
                case 1:
                    data = _a.sent();
                    CleanupMongoClient(client);
                    callback(data);
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=functions-stats.js.map
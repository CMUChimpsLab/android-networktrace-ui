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
function GetPurposeDistribution(client, params, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = constants_1.GetRelationshipCollection(client);
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
        const data = yield collection.aggregate([
            {
                '$match': Object.assign({}, ...MatchExpressions)
            },
            {
                '$project': {
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
        client_1.CleanupMongoClient(client);
        callback(data);
    });
}
exports.GetPurposeDistribution = GetPurposeDistribution;
function GetCatgegoryWiseDistribution(client, params, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = constants_1.GetRelationshipCollection(client);
        let MatchExpressions = [];
        if (!_.isEmpty(params['hosts'])) {
            MatchExpressions.push({
                'host': { $in: params['hosts'] }
            });
        }
        const data = yield collection.aggregate([
            {
                '$match': Object.assign({}, ...MatchExpressions)
            },
            { "$lookup": constants_1.LookUpExpressionForAppsFromRelationships },
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
        client_1.CleanupMongoClient(client);
        callback(data);
    });
}
exports.GetCatgegoryWiseDistribution = GetCatgegoryWiseDistribution;

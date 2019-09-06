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
function GetGroupRelationships(client, params, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const groupsCollection = constants_1.GetGroupsCollection(client);
        const relationshipsCollection = constants_1.GetRelationshipCollection(client);
        let group = null;
        if (!_.isEmpty(params.group))
            group = params.group;
        let skip = 0, limit = 0;
        if (_.isFinite(params.skip))
            skip = parseInt(params.skip) || 0;
        if (_.isFinite(params.limit))
            limit = parseInt(params.limit) || 10;
        let data = [];
        if (group) {
            const groupData = yield groupsCollection.find({ 'group': group }).toArray();
            let AggregateExpressions = [];
            AggregateExpressions = [
                {
                    "$match": {
                        'host': { $in: groupData[0].hosts }
                    }
                },
                { "$sort": { "host": -1 } },
                { "$lookup": constants_1.LookUpExpressionForRelationshipsUsingHost },
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
                { "$project": constants_1.HostProjection }
            ];
            data = yield relationshipsCollection.aggregate(AggregateExpressions).toArray();
        }
        client_1.CleanupMongoClient(client);
        callback(data);
    });
}
exports.GetGroupRelationships = GetGroupRelationships;

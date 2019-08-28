"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const MongoClientRequest = __importStar(require("mongodb"));
const constants_1 = require("./constants");
const MongoClient = MongoClientRequest.MongoClient;
const AppAPIs = __importStar(require("./functions-app"));
const MetaAPIs = __importStar(require("./functions-meta"));
const RelationshipAPIs = __importStar(require("./functions-relationship"));
const SearchAPIs = __importStar(require("./functions-search"));
const VisualizationAPIs = __importStar(require("./functions-visualizations"));
const StatsAPIs = __importStar(require("./functions-stats"));
function CleanupMongoClient(client) {
    client.close();
    console.log('CLIENT CLOSED');
}
exports.CleanupMongoClient = CleanupMongoClient;
function GetMongoDbClient(callback) {
    console.log('CLIENT CONNECTION CREATED');
    const client = new MongoClient(constants_1.MongoURL);
    client.connect(function (err) {
        callback(client);
    });
}
exports.GetMongoDbClient = GetMongoDbClient;
exports.Apps = AppAPIs;
exports.Meta = MetaAPIs;
exports.Relationship = RelationshipAPIs;
exports.Search = SearchAPIs;
exports.Visualization = VisualizationAPIs;
exports.Stats = StatsAPIs;

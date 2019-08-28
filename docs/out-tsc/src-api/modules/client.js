import * as MongoClientRequest from 'mongodb';
import { MongoURL } from './constants';
var MongoClient = MongoClientRequest.MongoClient;
import * as AppAPIs from './functions-app';
import * as MetaAPIs from './functions-meta';
import * as RelationshipAPIs from './functions-relationship';
import * as SearchAPIs from './functions-search';
import * as VisualizationAPIs from './functions-visualizations';
import * as StatsAPIs from './functions-stats';
export function CleanupMongoClient(client) {
    client.close();
    console.log('CLIENT CLOSED');
}
export function GetMongoDbClient(callback) {
    console.log('CLIENT CONNECTION CREATED');
    var client = new MongoClient(MongoURL);
    client.connect(function (err) {
        callback(client);
    });
}
export var Apps = AppAPIs;
export var Meta = MetaAPIs;
export var Relationship = RelationshipAPIs;
export var Search = SearchAPIs;
export var Visualization = VisualizationAPIs;
export var Stats = StatsAPIs;
//# sourceMappingURL=client.js.map
import * as fs from 'fs';
import * as MongoClientRequest from 'mongodb';
import * as _ from 'lodash';
import { MongoURL } from './constants';
const MongoClient = MongoClientRequest.MongoClient;
import * as AppAPIs from './functions-app';
import * as MetaAPIs from './functions-meta';
import * as RelationshipAPIs from './functions-relationship';
import * as SearchAPIs from './functions-search';
import * as VisualizationAPIs from './functions-visualizations';
import * as StatsAPIs from './functions-stats';


export function CleanupMongoClient(client: any) {
    client.close();
    console.log('CLIENT CLOSED');
}

export function GetMongoDbClient (callback: any) {
    console.log('CLIENT CONNECTION CREATED');
    const client = new MongoClient(MongoURL);
    client.connect(function (err) {
        callback(client);
    });
}

export const Apps = AppAPIs;
export const Meta = MetaAPIs;
export const Relationship = RelationshipAPIs;
export const Search = SearchAPIs;
export const Visualization = VisualizationAPIs;
export const Stats = StatsAPIs;


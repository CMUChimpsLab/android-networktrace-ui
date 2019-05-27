// tslint:disable:quotemark
// tslint:disable:max-line-length
export const APPS_COLLECTION_NAME = 'apps';
export const HOST_COLLECTION_NAME = 'hosts';
export const RELATIONSHIPS_COLLECTION_NAME = 'relationships';
// export const DB_NAME = 'privacy-analytics-v2';
// export const MongoURL = 'mongodb://admin:super-admin-1234@cmu-projects-cluster-shard-00-00-ylevo.mongodb.net:27017,cmu-projects-cluster-shard-00-01-ylevo.mongodb.net:27017,cmu-projects-cluster-shard-00-02-ylevo.mongodb.net:27017/test?ssl=true&replicaSet=CMU-PROJECTS-CLUSTER-shard-0&authSource=admin&retryWrites=true';
export const DB_NAME = 'privacy-analytics';
// tslint:disable-next-line:max-line-length
export const MongoURL = 'mongodb://admin:super-admin-1234@cluster0-shard-00-00-qcwmy.mongodb.net:27017,cluster0-shard-00-01-qcwmy.mongodb.net:27017,cluster0-shard-00-02-qcwmy.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
export const AppProjection = {
    "app": 1,
    'relinfo': {
        app: '$relinfo.app',
        host: '$relinfo.host',
        type: '$relinfo.type',
        purpose: '$relinfo.purpose',
    },
    'appinfo': {
        title: '$title',
        app: '$app',
        summary: '$summary',
        icon: '$icon',
        genre: '$genre'
    }
};
export const AppDetailsProjection = {
    "app": 1,
    "title": 1,
    "description": 1,
    "installs": 1,
    "scoreText": 1,
    "priceText": 1,
    "genre": 1,
    "relinfo.host": 1,
    "relinfo.app": 1,
    "relinfo.type": 1,
    "relinfo.purpose": 1
};
export const HostProjection = {
    "host": 1,
    "app": '$appinfo.app',
    "relinfo.host": 1,
    "relinfo.app": 1,
    "relinfo.type": 1,
    "relinfo.purpose": 1,
    "appinfo.title": 1,
    "appinfo.app": 1,
    "appinfo.description": 1,
    "appinfo.summary": 1,
    "appinfo.icon": 1
};

export const CombinedProjectionFromRels = {
    'app': 1,
    'host': 1,
    'relinfo': {
        app: '$app',
        host: '$host',
        type: '$type',
        purpose: '$purpose'
    },
    'appinfo': {
        title: '$appinfo.title',
        app: '$appinfo.app',
        summary: '$appinfo.summary',
        icon: '$appinfo.icon'
    },
    'hostinfo': {
        host: '$hostinfo.host'
    }
};

const DEFAULT_TAXONOMIES = [{ "key": "ID", "value": ["GENERALID"] }, { "key": "PHONE", "value": ["BATTERY", "DEVICE", "RUNNINGSTATE", "NOTIFICATION", "NETWORK"] }, { "key": "PERSONAL", "value": ["ACCOUNT", "CALENDAR", "CONTACTS", 'SMS', 'STORAGE'] }, { 'key': 'SENSOR', 'value': ['CAMERA', 'PROXIMITY', 'LOCATION', 'MICROPHONE', 'INERTIAL'] }];

const ratings = [
    { key: 'A+', value: 'A+' },
    { key: 'A', value: 'A' },
    { key: 'B', value: 'B' },
    { key: 'C', value: 'C' },
    { key: 'D', value: 'D' },
    { key: 'UNKNOWN', value: '' }
];


export function GetAppsCollection(client: any) {
    return client.db(DB_NAME).collection(APPS_COLLECTION_NAME);
}

export function GetHostsCollection(client: any) {
    return client.db(DB_NAME).collection(HOST_COLLECTION_NAME);
}

export function GetRelationshipCollection(client: any) {
    return client.db(DB_NAME).collection(RELATIONSHIPS_COLLECTION_NAME);
}

export let LookUpExpressionForRelationshipsUsingApp = {
    'localField': 'app',
    'from': 'relationships',
    'foreignField': 'app',
    'as': 'relinfo'
};
export let LookUpExpressionForRelationshipsUsingHost = {
    'localField': 'host',
    'from': 'relationships',
    'foreignField': 'host',
    'as': 'relinfo'
};

export let LookUpExpressionForAppsFromRelationships = {
    'localField': 'app',
    'from': 'apps',
    'foreignField': 'app',
    'as': 'appinfo'
};

export let LookUpExpressionForHostsFromRelationships = {
    'localField': 'host',
    'from': 'hosts',
    'foreignField': 'host',
    'as': 'hostinfo'
};

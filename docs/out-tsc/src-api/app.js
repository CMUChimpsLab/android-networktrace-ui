import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import * as MC from './modules/client';
import { Cacher } from './modules/cacher';
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var jsonParser = bodyParser.json();
function GetQueryParams(req) {
    var params = {};
    if (req.query) {
        // tslint:disable-next-line:forin
        for (var prop in req.query) {
            params[prop] = req.query[prop];
        }
    }
    return params;
}
app.get('/api/meta/categories', Cacher(), function (req, res) {
    MC.GetMongoDbClient(function (client) {
        MC.Meta.GetCategories(client, function (data) {
            res.json(data);
        });
    });
});
app.get('/api/meta/typesAndPurposes', Cacher(), function (req, res) {
    MC.GetMongoDbClient(function (client) {
        MC.Meta.GetDataTypesAndPurposes(client, function (data) {
            res.json(data);
        });
    });
});
app.get('/api/meta/searchparams', Cacher(), function (req, res) {
    MC.GetMongoDbClient(function (client) {
        MC.Meta.GetDataForBuildingParams(client, function (data) {
            res.json(data);
        });
    });
});
app.get('/api/apps/count', Cacher(), function (req, res) {
    MC.GetMongoDbClient(function (client) {
        MC.Meta.GetAppsCount(client, function (data) {
            res.json(data);
        });
    });
});
app.post('/api/apps', Cacher(), function (req, res) {
    var params = Object.assign({}, GetQueryParams(req), req.body);
    MC.GetMongoDbClient(function (client) {
        MC.Apps.GetAppDetails(client, params, function (data) {
            res.json(data);
        });
    });
});
app.post('/api/hosts', Cacher(), function (req, res) {
    var params = Object.assign({}, GetQueryParams(req), req.params, req.body);
    MC.GetMongoDbClient(function (client) {
        MC.Apps.GetHostDetails(client, params, function (data) {
            res.json(data);
        });
    });
});
app.get('/api/apps/countWithValidTitle', Cacher(), function (req, res) {
    MC.GetMongoDbClient(function (client) {
        MC.Meta.GetAppsWithValidTitleCount(client, function (data) {
            res.json(data);
        });
    });
});
app.post('/api/relationships/', function (req, res) {
    var params = Object.assign({}, GetQueryParams(req), req.body);
    MC.GetMongoDbClient(function (client) {
        MC.Relationship.GetRelationships(client, params, function (data) {
            res.json(data);
        });
    });
});
app.get('/api/search/:token', function (req, res) {
    var params = Object.assign({}, GetQueryParams(req), req.params, req.body);
    MC.GetMongoDbClient(function (client) {
        MC.Search.GetSearchToken(client, params, function (data) {
            res.json(data);
        });
    });
});
app.post('/api/statistics', function (req, res) {
    var params = Object.assign({}, GetQueryParams(req), req.params, req.body);
    MC.GetMongoDbClient(function (client) {
        MC.Stats.GetPopularTypeAndPurpose(client, params, function (data) {
            res.json(data);
        });
    });
});
/// VISUALIZATION FUNCTIONS
app.post('/api/distribution/purposes', Cacher(), function (req, res) {
    var params = Object.assign({}, GetQueryParams(req), req.params, req.body);
    MC.GetMongoDbClient(function (client) {
        MC.Visualization.GetPurposeDistribution(client, params, function (data) {
            res.json(data);
        });
    });
});
app.post('/api/distribution/categories', Cacher(), function (req, res) {
    var params = Object.assign({}, GetQueryParams(req), req.params, req.body);
    MC.GetMongoDbClient(function (client) {
        MC.Visualization.GetCatgegoryWiseDistribution(client, params, function (data) {
            res.json(data);
        });
    });
});
export default app;
//# sourceMappingURL=app.js.map
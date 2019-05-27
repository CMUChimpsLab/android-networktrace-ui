"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bodyParser = __importStar(require("body-parser"));
const MC = __importStar(require("./modules/client"));
const cacher_1 = require("./modules/cacher");
const app = express_1.default();
app.use(cors_1.default());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const jsonParser = bodyParser.json();
function GetQueryParams(req) {
    const params = {};
    if (req.query) {
        // tslint:disable-next-line:forin
        for (const prop in req.query) {
            params[prop] = req.query[prop];
        }
    }
    return params;
}
app.get('/api/meta/categories', cacher_1.Cacher(), (req, res) => {
    MC.GetMongoDbClient((client) => {
        MC.Meta.GetCategories(client, (data) => {
            res.json(data);
        });
    });
});
app.get('/api/meta/typesAndPurposes', cacher_1.Cacher(), (req, res) => {
    MC.GetMongoDbClient((client) => {
        MC.Meta.GetDataTypesAndPurposes(client, (data) => {
            res.json(data);
        });
    });
});
app.get('/api/meta/searchparams', cacher_1.Cacher(), (req, res) => {
    MC.GetMongoDbClient((client) => {
        MC.Meta.GetDataForBuildingParams(client, (data) => {
            res.json(data);
        });
    });
});
app.get('/api/apps/count', cacher_1.Cacher(), (req, res) => {
    MC.GetMongoDbClient((client) => {
        MC.Meta.GetAppsCount(client, (data) => {
            res.json(data);
        });
    });
});
app.post('/api/apps', cacher_1.Cacher(), (req, res) => {
    const params = Object.assign({}, GetQueryParams(req), req.body);
    MC.GetMongoDbClient((client) => {
        MC.Apps.GetAppDetails(client, params, (data) => {
            res.json(data);
        });
    });
});
app.post('/api/hosts', cacher_1.Cacher(), (req, res) => {
    const params = Object.assign({}, GetQueryParams(req), req.params, req.body);
    MC.GetMongoDbClient((client) => {
        MC.Apps.GetHostDetails(client, params, (data) => {
            res.json(data);
        });
    });
});
app.get('/api/apps/countWithValidTitle', cacher_1.Cacher(), (req, res) => {
    MC.GetMongoDbClient((client) => {
        MC.Meta.GetAppsWithValidTitleCount(client, (data) => {
            res.json(data);
        });
    });
});
app.post('/api/relationships/', (req, res) => {
    const params = Object.assign({}, GetQueryParams(req), req.body);
    MC.GetMongoDbClient((client) => {
        MC.Relationship.GetRelationships(client, params, (data) => {
            res.json(data);
        });
    });
});
app.get('/api/search/:token', (req, res) => {
    const params = Object.assign({}, GetQueryParams(req), req.params, req.body);
    MC.GetMongoDbClient((client) => {
        MC.Search.GetSearchToken(client, params, (data) => {
            res.json(data);
        });
    });
});
app.post('/api/statistics', (req, res) => {
    const params = Object.assign({}, GetQueryParams(req), req.params, req.body);
    MC.GetMongoDbClient((client) => {
        MC.Stats.GetPopularTypeAndPurpose(client, params, (data) => {
            res.json(data);
        });
    });
});
/// VISUALIZATION FUNCTIONS
app.post('/api/distribution/purposes', cacher_1.Cacher(), (req, res) => {
    const params = Object.assign({}, GetQueryParams(req), req.params, req.body);
    MC.GetMongoDbClient((client) => {
        MC.Visualization.GetPurposeDistribution(client, params, (data) => {
            res.json(data);
        });
    });
});
app.post('/api/distribution/categories', cacher_1.Cacher(), (req, res) => {
    const params = Object.assign({}, GetQueryParams(req), req.params, req.body);
    MC.GetMongoDbClient((client) => {
        MC.Visualization.GetCatgegoryWiseDistribution(client, params, (data) => {
            res.json(data);
        });
    });
});
exports.default = app;

import express, { Request, Response } from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import * as MC from './modules/client';
import { Cacher } from './modules/cacher';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const jsonParser = bodyParser.json();

function GetQueryParams(req: any) {
    const params: any = {};
    if (req.query) {
        // tslint:disable-next-line:forin
        for (const prop in req.query) {
            params[prop] = req.query[prop];
        }
    }
    return params;
}
app.get('/api/meta/categories', Cacher(), (req, res) => {
    MC.GetMongoDbClient((client: any) => {
        MC.Meta.GetCategories(client, (data: any) => {
            res.json(data);
        });
    });
});
app.get('/api/meta/typesAndPurposes', Cacher(), (req, res) => {
    MC.GetMongoDbClient((client: any) => {
        MC.Meta.GetDataTypesAndPurposes(client, (data: any) => {
            res.json(data);
        });
    });
});
app.get('/api/meta/searchparams', Cacher(), (req, res) => {
    MC.GetMongoDbClient((client: any) => {
        MC.Meta.GetDataForBuildingParams(client, (data: any) => {
            res.json(data);
        });
    });
});
app.get('/api/apps/count', Cacher(), (req, res) => {
    MC.GetMongoDbClient((client: any) => {
        MC.Meta.GetAppsCount(client, (data: any) => {
            res.json(data);
        });
    });
});
app.post('/api/apps', Cacher(), (req, res) => {
    const params = Object.assign({},
        GetQueryParams(req),
        req.body);
    MC.GetMongoDbClient((client: any) => {
        MC.Apps.GetAppDetails(client, params, (data: any) => {
            res.json(data);
        });
    });
});
app.post('/api/hosts', Cacher(), (req, res) => {
    const params = Object.assign({},
        GetQueryParams(req),
        req.params,
        req.body);
    MC.GetMongoDbClient((client: any) => {
        MC.Apps.GetHostDetails(client, params, (data: any) => {
            res.json(data);
        });
    });
});
app.get('/api/apps/countWithValidTitle', Cacher(), (req, res) => {
    MC.GetMongoDbClient((client: any) => {
        MC.Meta.GetAppsWithValidTitleCount(client, (data: any) => {
            res.json(data);
        });
    });
});
app.post('/api/relationships/', (req, res) => {
    const params = Object.assign({},
        GetQueryParams(req),
        req.body);
    MC.GetMongoDbClient((client: any) => {
        MC.Relationship.GetRelationships(client, params, (data: any) => {
            res.json(data);
        });
    });
});
app.post('/api/groups/', (req, res) => {
    const params = Object.assign({},
        GetQueryParams(req),
        req.body);
    MC.GetMongoDbClient((client: any) => {
        MC.Groups.GetGroupDetails(client, params, (data: any) => {
            res.json(data);
        });
    });
});

app.get('/api/search/:token', (req, res) => {
    const params = Object.assign({},
        GetQueryParams(req),
        req.params,
        req.body);
    MC.GetMongoDbClient((client: any) => {
        MC.Search.GetSearchToken(client, params, (data: any) => {
            res.json(data);
        });
    });
});
app.post('/api/statistics', (req, res) => {
    const params = Object.assign({},
        GetQueryParams(req),
        req.params,
        req.body);
    MC.GetMongoDbClient((client: any) => {
        MC.Stats.GetPopularTypeAndPurpose(client, params, (data: any) => {
            res.json(data);
        });
    });
});

/// VISUALIZATION FUNCTIONS
app.post('/api/distribution/purposes', Cacher(), (req, res) => {
    const params = Object.assign({},
        GetQueryParams(req),
        req.params,
        req.body);
    MC.GetMongoDbClient((client: any) => {
        MC.Visualization.GetPurposeDistribution(client, params, (data: any) => {
            res.json(data);
        });
    });
});
app.post('/api/distribution/categories', Cacher(), (req, res) => {
    const params = Object.assign({},
        GetQueryParams(req),
        req.params,
        req.body);
    MC.GetMongoDbClient((client: any) => {
        MC.Visualization.GetCatgegoryWiseDistribution(client, params, (data: any) => {
            res.json(data);
        });
    });
});

export default app;

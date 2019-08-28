// tslint:disable:quotemark
// tslint:disable:max-line-length
// tslint:disable:prefer-const
var cache = function (skip) {
    if (skip === void 0) { skip = false; }
    var cachedBody = {};
    return function (req, res, next) {
        var key = '__express__' + (req.originalUrl || req.url) + ("" + JSON.stringify(req.params)) + ("" + JSON.stringify(req.query)) + ("" + JSON.stringify(req.body));
        if (cachedBody[key] && !skip) {
            var result = JSON.parse(cachedBody[key]);
            res.json(result);
            return;
        }
        else {
            res.sendResponse = res.send;
            res.send = function (body) {
                cachedBody[key] = body;
                res.sendResponse(body);
            };
            next();
        }
    };
};
export var Cacher = cache;
//# sourceMappingURL=cacher.js.map
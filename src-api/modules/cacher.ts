// tslint:disable:quotemark
// tslint:disable:max-line-length
// tslint:disable:prefer-const
let cache = (skip: boolean = false) => {
    const cachedBody: any = {};
    return (req: any, res: any, next: any) => {
        let key = '__express__' + (req.originalUrl || req.url) + `${JSON.stringify(req.params)}` + `${JSON.stringify(req.query)}` + `${JSON.stringify(req.body)}`;
        if (cachedBody[key] && !skip) {
            let result = JSON.parse(cachedBody[key]);
            res.json(result);
            return;
        } else {
            res.sendResponse = res.send;
            res.send = (body: any) => {
                cachedBody[key] = body;
                res.sendResponse(body);
            };
            next();
        }
    };
};
export const Cacher = cache;

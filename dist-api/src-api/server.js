"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
app_1.default.use(helmet_1.default()); // set well-known security-related HTTP headers
app_1.default.use(compression_1.default());
app_1.default.disable('x-powered-by');
const server = app_1.default.listen(process.env.PORT || 8081, () => console.log('Starting ExpressJS API server on Port 8081'));
exports.default = server;

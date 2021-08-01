"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.interceptClientRequest = void 0;
var http_1 = __importDefault(require("http"));
var https_1 = __importDefault(require("https"));
var ClientRequestOverride_1 = require("./ClientRequestOverride");
var debug = require('debug')('http override');
// Store a pointer to the original `http.ClientRequest` class
// so it can be mutated during runtime, affecting any subsequent calls.
var originalClientRequest;
function handleRequest(protocol, originalMethod, middleware, context, args) {
    var _a;
    //The first time we execute this, I'll save the original ClientRequest.
    //This because is used to restore the dafault one later
    if (!originalClientRequest) {
        originalClientRequest = http_1.default.ClientRequest;
    }
    var ClientRequestOverride = ClientRequestOverride_1.createClientRequestOverrideClass(middleware, context, originalMethod, originalClientRequest);
    debug('patching native http.ClientRequest...');
    //Only http.ClientRequest is overridden because https uses http
    //@ts-ignore
    http_1.default.ClientRequest = ClientRequestOverride;
    debug('new http.ClientRequest (origin: %s)', protocol);
    // @ts-ignore
    return new ((_a = http_1.default.ClientRequest).bind.apply(_a, __spreadArrays([void 0], args)))();
}
/**
 * Intercepts requests issued by native `http` and `https` modules.
 */
exports.interceptClientRequest = function (middleware, context) {
    var patchedModules = {};
    var modules = ['http', 'https'];
    modules.forEach(function (protocol) {
        var requestModule = protocol === 'https' ? https_1.default : http_1.default;
        var originalRequest = requestModule.request, originalGet = requestModule.get;
        // Wrap an original `http.request`/`https.request`
        // so that its invocations can be debugged.
        function proxiedOriginalRequest() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            debug('%s.request original call', protocol);
            // @ts-ignore
            return originalRequest.apply(void 0, args);
        }
        debug('patching "%s" module...', protocol);
        // @ts-ignore
        requestModule.request = function requestOverride() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            debug('%s.request proxy call', protocol);
            return handleRequest(protocol, proxiedOriginalRequest.bind(requestModule), middleware, context, args);
        };
        // @ts-ignore
        requestModule.get = function getOverride() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            debug('%s.get call', protocol);
            var req = handleRequest(protocol, originalGet.bind(requestModule), middleware, context, args);
            req.end();
            return req;
        };
        patchedModules[protocol] = {
            requestModule: requestModule,
            request: originalRequest,
            get: originalGet,
        };
    });
    return function () {
        debug('restoring patches...');
        Object.values(patchedModules).forEach(function (_a) {
            var requestModule = _a.requestModule, request = _a.request, get = _a.get;
            requestModule.request = request;
            requestModule.get = get;
        });
        patchedModules = {};
    };
};
//# sourceMappingURL=index.js.map
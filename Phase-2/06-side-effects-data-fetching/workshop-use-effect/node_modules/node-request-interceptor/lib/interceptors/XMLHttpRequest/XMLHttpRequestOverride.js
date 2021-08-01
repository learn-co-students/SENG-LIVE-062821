"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createXMLHttpRequestOverride = void 0;
/**
 * XMLHttpRequest override class.
 * Inspired by https://github.com/marvinhagemeister/xhr-mocklet.
 */
var until_1 = require("@open-draft/until");
var headers_utils_1 = require("headers-utils");
var parseJson_1 = require("../../utils/parseJson");
var createEvent_1 = require("./helpers/createEvent");
var createDebug = require('debug');
exports.createXMLHttpRequestOverride = function (middleware, context, XMLHttpRequestPristine) {
    var _a;
    var debug = createDebug('XHR');
    return _a = /** @class */ (function () {
            function XMLHttpRequestOverride() {
                this.requestHeaders = {};
                this.responseHeaders = {};
                // Collection of events modified by `addEventListener`/`removeEventListener` calls.
                this._events = [];
                this.UNSENT = 0;
                this.OPENED = 1;
                this.HEADERS_RECEIVED = 2;
                this.LOADING = 3;
                this.DONE = 4;
                this.onreadystatechange = null;
                /* Events */
                this.onabort = null;
                this.onerror = null;
                this.onload = null;
                this.onloadend = null;
                this.onloadstart = null;
                this.onprogress = null;
                this.ontimeout = null;
                this.url = '';
                this.method = 'GET';
                this.readyState = this.UNSENT;
                this.withCredentials = false;
                this.status = 200;
                this.statusText = 'OK';
                this.data = '';
                this.response = '';
                this.responseType = 'text';
                this.responseText = '';
                this.responseXML = null;
                this.responseURL = '';
                this.upload = null;
                this.timeout = 0;
            }
            XMLHttpRequestOverride.prototype.triggerReadyStateChange = function (options) {
                if (this.onreadystatechange) {
                    this.onreadystatechange.call(this, createEvent_1.createEvent(options, this, 'readystatechange'));
                }
            };
            XMLHttpRequestOverride.prototype.trigger = function (eventName, options) {
                debug('trigger', eventName);
                this.triggerReadyStateChange(options);
                var loadendEvent = this._events.find(function (event) { return event.name === 'loadend'; });
                if (this.readyState === this.DONE && (this.onloadend || loadendEvent)) {
                    var listener = this.onloadend || (loadendEvent === null || loadendEvent === void 0 ? void 0 : loadendEvent.listener);
                    listener === null || listener === void 0 ? void 0 : listener.call(this, createEvent_1.createEvent(options, this, 'loadend'));
                }
                // Call the direct callback, if present.
                var directCallback = this["on" + eventName];
                directCallback === null || directCallback === void 0 ? void 0 : directCallback.call(this, createEvent_1.createEvent(options, this, eventName));
                // Check in the list of events attached via `addEventListener`.
                for (var _i = 0, _a = this._events; _i < _a.length; _i++) {
                    var event_1 = _a[_i];
                    if (event_1.name === eventName) {
                        event_1.listener.call(this, createEvent_1.createEvent(options, this, eventName));
                    }
                }
                return this;
            };
            XMLHttpRequestOverride.prototype.reset = function () {
                debug('reset');
                this.readyState = this.UNSENT;
                this.status = 200;
                this.statusText = '';
                this.requestHeaders = {};
                this.responseHeaders = {};
                this.data = '';
                this.response = null;
                this.responseText = null;
                this.responseXML = null;
            };
            XMLHttpRequestOverride.prototype.open = function (method, url, async, user, password) {
                if (async === void 0) { async = true; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        debug = createDebug("XHR " + method + " " + url);
                        debug('open', { method: method, url: url, async: async, user: user, password: password });
                        this.reset();
                        this.readyState = this.OPENED;
                        if (typeof url === 'undefined') {
                            this.url = method;
                            this.method = 'GET';
                        }
                        else {
                            this.url = url;
                            this.method = method;
                            this.async = async;
                            this.user = user;
                            this.password = password;
                        }
                        return [2 /*return*/];
                    });
                });
            };
            XMLHttpRequestOverride.prototype.send = function (data) {
                var _this = this;
                debug('send %s %s', this.method, this.url);
                this.readyState = this.LOADING;
                this.data = data || '';
                var url;
                try {
                    url = new URL(this.url);
                }
                catch (error) {
                    // Assume a relative URL, if construction of a new `URL` instance fails.
                    // Since `XMLHttpRequest` always executed in a DOM-like environment,
                    // resolve the relative request URL against the current window location.
                    url = new URL(this.url, window.location.href);
                }
                var requestHeaders = headers_utils_1.reduceHeadersObject(this.requestHeaders, function (headers, name, value) {
                    headers[name.toLowerCase()] = value;
                    return headers;
                }, {});
                debug('request headers', requestHeaders);
                // Create an intercepted request instance exposed to the request intercepting middleware.
                var req = {
                    url: url,
                    method: this.method,
                    body: this.data,
                    headers: requestHeaders,
                };
                debug('awaiting mocked response...');
                Promise.resolve(until_1.until(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, middleware(req, this)];
                }); }); })).then(function (_a) {
                    var _b;
                    var middlewareException = _a[0], mockedResponse = _a[1];
                    // When the request middleware throws an exception, error the request.
                    // This cancels the request and is similar to a network error.
                    if (middlewareException) {
                        debug('middleware function threw an exception!', middlewareException);
                        // No way to propagate the actual error message.
                        _this.trigger('error');
                        _this.abort();
                        return;
                    }
                    // Return a mocked response, if provided in the middleware.
                    if (mockedResponse) {
                        debug('received mocked response', mockedResponse);
                        _this.status = mockedResponse.status || 200;
                        _this.statusText = mockedResponse.statusText || 'OK';
                        _this.responseHeaders = mockedResponse.headers
                            ? headers_utils_1.flattenHeadersObject(mockedResponse.headers)
                            : {};
                        debug('assigned response status', _this.status, _this.statusText);
                        debug('assigned response headers', _this.responseHeaders);
                        // Mark that response headers has been received
                        // and trigger a ready state event to reflect received headers
                        // in a custom `onreadystatechange` callback.
                        _this.readyState = _this.HEADERS_RECEIVED;
                        _this.triggerReadyStateChange();
                        debug('response type', _this.responseType);
                        _this.response = _this.getResponseBody(mockedResponse.body);
                        _this.responseText = mockedResponse.body || '';
                        debug('assigned response body', _this.response);
                        if (mockedResponse.body && _this.response) {
                            // Presense of the mocked response implies a response body (not null).
                            // Presece of the coerced `this.response` implies the mocked body is valid.
                            var bodyBuffer = Buffer.from(mockedResponse.body);
                            // Trigger a progress event based on the mocked response body.
                            _this.trigger('progress', {
                                loaded: bodyBuffer.length,
                                total: bodyBuffer.length,
                            });
                        }
                        // Explicitly mark the request as done, so its response never hangs.
                        // @see https://github.com/mswjs/node-request-interceptor/issues/13
                        _this.readyState = _this.DONE;
                        _this.trigger('loadstart');
                        _this.trigger('load');
                        _this.trigger('loadend');
                        context.emitter.emit('response', req, {
                            status: _this.status,
                            statusText: _this.statusText,
                            headers: mockedResponse.headers || {},
                            body: mockedResponse.body,
                        });
                    }
                    else {
                        debug('no mocked response received');
                        // Perform an original request, when the request middleware returned no mocked response.
                        var originalRequest_1 = new XMLHttpRequestPristine();
                        debug('opening an original request %s %s', _this.method, _this.url);
                        originalRequest_1.open(_this.method, _this.url, (_b = _this.async) !== null && _b !== void 0 ? _b : true, _this.user, _this.password);
                        // Reflect a successful state of the original request
                        // on the patched instance.
                        originalRequest_1.onload = function () {
                            debug('original onload');
                            _this.status = originalRequest_1.status;
                            _this.statusText = originalRequest_1.statusText;
                            _this.responseURL = originalRequest_1.responseURL;
                            _this.responseType = originalRequest_1.responseType;
                            _this.response = originalRequest_1.response;
                            _this.responseText = originalRequest_1.responseText;
                            _this.responseXML = originalRequest_1.responseXML;
                            debug('received original response status:', _this.status, _this.statusText);
                            debug('received original response body:', _this.response);
                            _this.trigger('loadstart');
                            _this.trigger('load');
                            var responseHeaders = originalRequest_1.getAllResponseHeaders();
                            _this.responseHeaders = headers_utils_1.flattenHeadersObject(headers_utils_1.headersToObject(headers_utils_1.stringToHeaders(responseHeaders)));
                            debug('original response headers', responseHeaders);
                            var normalizedResponseHeaders = headers_utils_1.headersToObject(headers_utils_1.stringToHeaders(responseHeaders));
                            debug('original response headers (normalized)', normalizedResponseHeaders);
                            context.emitter.emit('response', req, {
                                status: originalRequest_1.status,
                                statusText: originalRequest_1.statusText,
                                headers: normalizedResponseHeaders,
                                body: originalRequest_1.response,
                            });
                        };
                        // Assign callbacks and event listeners from the intercepted XHR instance
                        // to the original XHR instance.
                        _this.propagateCallbacks(originalRequest_1);
                        _this.propagateListeners(originalRequest_1);
                        _this.propagateHeaders(originalRequest_1, requestHeaders);
                        if (_this.async) {
                            originalRequest_1.timeout = _this.timeout;
                        }
                        debug('send', _this.data);
                        originalRequest_1.send(_this.data);
                    }
                });
            };
            XMLHttpRequestOverride.prototype.abort = function () {
                debug('abort');
                if (this.readyState > this.UNSENT && this.readyState < this.DONE) {
                    this.readyState = this.UNSENT;
                    this.trigger('abort');
                }
            };
            XMLHttpRequestOverride.prototype.dispatchEvent = function () {
                return false;
            };
            XMLHttpRequestOverride.prototype.setRequestHeader = function (name, value) {
                debug('set request header', name, value);
                this.requestHeaders[name] = value;
            };
            XMLHttpRequestOverride.prototype.getResponseHeader = function (name) {
                debug('get response header', name);
                if (this.readyState < this.HEADERS_RECEIVED) {
                    debug('cannot return a header: headers not received (state: %s)', this.readyState);
                    return null;
                }
                var headerValue = Object.entries(this.responseHeaders).reduce(function (_, _a) {
                    var headerName = _a[0], headerValue = _a[1];
                    // Ignore header name casing while still allowing to set response headers
                    // with an arbitrary casing (no normalization).
                    if ([headerName, headerName.toLowerCase()].includes(name)) {
                        return headerValue;
                    }
                    return null;
                }, null);
                debug('resolved response header', name, headerValue, this.responseHeaders);
                return headerValue;
            };
            XMLHttpRequestOverride.prototype.getAllResponseHeaders = function () {
                debug('get all response headers');
                if (this.readyState < this.HEADERS_RECEIVED) {
                    debug('cannot return headers: headers not received (state: %s)', this.readyState);
                    return '';
                }
                return Object.entries(this.responseHeaders)
                    .map(function (_a) {
                    var name = _a[0], value = _a[1];
                    return name + ": " + value + " \r\n";
                })
                    .join('');
            };
            XMLHttpRequestOverride.prototype.addEventListener = function (name, listener) {
                debug('addEventListener', name, listener);
                this._events.push({
                    name: name,
                    listener: listener,
                });
            };
            XMLHttpRequestOverride.prototype.removeEventListener = function (name, listener) {
                debug('removeEventListener', name, listener);
                this._events = this._events.filter(function (storedEvent) {
                    return storedEvent.name !== name && storedEvent.listener !== listener;
                });
            };
            XMLHttpRequestOverride.prototype.overrideMimeType = function () { };
            /**
             * Sets a proper `response` property based on the `responseType` value.
             */
            XMLHttpRequestOverride.prototype.getResponseBody = function (body) {
                // Handle an improperly set "null" value of the mocked response body.
                var textBody = body !== null && body !== void 0 ? body : '';
                debug('coerced response body to', textBody);
                switch (this.responseType) {
                    case 'json': {
                        debug('resolving response body as JSON');
                        return parseJson_1.parseJson(textBody);
                    }
                    case 'blob': {
                        var blobType = this.getResponseHeader('content-type') || 'text/plain';
                        debug('resolving response body as Blob', { type: blobType });
                        return new Blob([textBody], {
                            type: blobType,
                        });
                    }
                    case 'arraybuffer': {
                        debug('resolving response body as ArrayBuffer');
                        var buffer = Buffer.from(textBody);
                        var arrayBuffer = new Uint8Array(buffer);
                        return arrayBuffer;
                    }
                    default:
                        return textBody;
                }
            };
            /**
             * Propagates captured XHR instance callbacks to the given XHR instance.
             * @note that `onload` listener is explicitly omitted.
             */
            XMLHttpRequestOverride.prototype.propagateCallbacks = function (req) {
                req.onabort = this.abort;
                req.onerror = this.onerror;
                req.ontimeout = this.ontimeout;
                req.onloadstart = this.onloadstart;
                req.onloadend = this.onloadend;
                req.onprogress = this.onprogress;
                req.onreadystatechange = this.onreadystatechange;
            };
            XMLHttpRequestOverride.prototype.propagateListeners = function (req) {
                this._events.forEach(function (_a) {
                    var name = _a.name, listener = _a.listener;
                    req.addEventListener(name, listener);
                });
            };
            XMLHttpRequestOverride.prototype.propagateHeaders = function (req, headers) {
                var flatHeaders = headers_utils_1.flattenHeadersObject(headers);
                Object.entries(flatHeaders).forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    req.setRequestHeader(key, value);
                });
            };
            return XMLHttpRequestOverride;
        }()),
        /* Request state */
        _a.UNSENT = 0,
        _a.OPENED = 1,
        _a.HEADERS_RECEIVED = 2,
        _a.LOADING = 3,
        _a.DONE = 4,
        _a;
};
//# sourceMappingURL=XMLHttpRequestOverride.js.map
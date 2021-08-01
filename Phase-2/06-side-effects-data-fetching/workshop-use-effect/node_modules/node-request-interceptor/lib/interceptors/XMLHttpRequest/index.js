"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interceptXMLHttpRequest = void 0;
var XMLHttpRequestOverride_1 = require("./XMLHttpRequestOverride");
var debug = require('debug')('XHR');
var original = {
    XMLHttpRequest: 
    // Although executed in node, certain processes emulate the DOM-like environment
    // (i.e. `js-dom` in Jest). The `window` object would be avilable in such environments.
    typeof window === 'undefined' ? undefined : window.XMLHttpRequest,
};
/**
 * Intercepts requests issued via `XMLHttpRequest`.
 */
exports.interceptXMLHttpRequest = function (middleware, context) {
    if (original.XMLHttpRequest) {
        debug('patching "XMLHttpRequest" module...');
        var XMLHttpRequestOverride = XMLHttpRequestOverride_1.createXMLHttpRequestOverride(middleware, context, original.XMLHttpRequest);
        // @ts-ignore
        window.XMLHttpRequest = XMLHttpRequestOverride;
    }
    return function () {
        if (original.XMLHttpRequest) {
            debug('restoring patches...');
            window.XMLHttpRequest = original.XMLHttpRequest;
        }
    };
};
//# sourceMappingURL=index.js.map
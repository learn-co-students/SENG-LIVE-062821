"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Headers = void 0;
var HEADERS_INVALID_CHARACTERS = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
var Headers = /** @class */ (function () {
    function Headers(headers) {
        var _this = this;
        this.map = {};
        if ((headers === null || headers === void 0 ? void 0 : headers.constructor.name) === 'Headers') {
            headers.forEach(function (value, name) {
                _this.append(name, value);
            }, this);
        }
        else if (Array.isArray(headers)) {
            headers.forEach(function (_a) {
                var name = _a[0], value = _a[1];
                _this.append(name, Array.isArray(value) ? value.join(', ') : value);
            });
        }
        else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function (name) {
                _this.append(name, headers[name]);
            });
        }
    }
    /**
     * Sets a new value for an existing header inside a `Headers` object, or adds the header if it does not already exist.
     */
    Headers.prototype.set = function (name, value) {
        this.map[this.normalizeName(name)] = this.normalizeValue(value);
    };
    /**
     * Appends a new value onto an existing header inside a `Headers` object, or adds the header if it does not already exist.
     */
    Headers.prototype.append = function (name, value) {
        name = this.normalizeName(name);
        value = this.normalizeValue(value);
        this.map[name] = this.has(name) ? this.map[name] + ", " + value : value;
    };
    /**
     * Deletes a header from the `Headers` object.
     */
    Headers.prototype.delete = function (name) {
        delete this.map[this.normalizeName(name)];
        return this;
    };
    /**
     * Returns a `ByteString` sequence of all the values of a header with a given name.
     */
    Headers.prototype.get = function (name) {
        return this.map[this.normalizeName(name)] || null;
    };
    /**
     * Returns the map of all headers in a `Headers` object.
     */
    Headers.prototype.getAllHeaders = function () {
        return this.map;
    };
    /**
     * Returns a boolean stating whether a `Headers` object contains a certain header.
     */
    Headers.prototype.has = function (name) {
        return this.map.hasOwnProperty(this.normalizeName(name));
    };
    /**
     * Traverses the `Headers` object,
     * calling the given callback for each header.
     */
    Headers.prototype.forEach = function (callback, thisArg) {
        for (var name_1 in this.map) {
            if (this.map.hasOwnProperty(name_1)) {
                callback.call(thisArg, this.map[name_1], name_1, this);
            }
        }
    };
    Headers.prototype.normalizeName = function (name) {
        if (typeof name !== 'string') {
            name = String(name);
        }
        if (HEADERS_INVALID_CHARACTERS.test(name) || name.trim() === '') {
            throw new TypeError('Invalid character in header field name');
        }
        return name.toLowerCase();
    };
    Headers.prototype.normalizeValue = function (value) {
        if (typeof value !== 'string') {
            value = String(value);
        }
        return value;
    };
    return Headers;
}());
exports.Headers = Headers;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listToHeaders = void 0;
function listToHeaders(list) {
    var headers = new Headers();
    list.forEach(function (_a) {
        var name = _a[0], value = _a[1];
        var values = [].concat(value);
        values.forEach(function (value) {
            headers.append(name, value);
        });
    });
    return headers;
}
exports.listToHeaders = listToHeaders;

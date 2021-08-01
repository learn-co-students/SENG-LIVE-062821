"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headersToString = void 0;
var headersToList_1 = require("./headersToList");
/**
 * Converts a given `Headers` instance to its string representation.
 */
function headersToString(headers) {
    var list = headersToList_1.headersToList(headers);
    var lines = list.map(function (_a) {
        var name = _a[0], value = _a[1];
        var values = [].concat(value);
        return name + ": " + values.join(', ');
    });
    return lines.join('\r\n');
}
exports.headersToString = headersToString;

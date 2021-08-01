"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headersToList = void 0;
function headersToList(headers) {
    var headersList = [];
    headers.forEach(function (value, name) {
        var resolvedValue = value.includes(',')
            ? value.split(',').map(function (v) { return v.trim(); })
            : value;
        headersList.push([name, resolvedValue]);
    });
    return headersList;
}
exports.headersToList = headersToList;

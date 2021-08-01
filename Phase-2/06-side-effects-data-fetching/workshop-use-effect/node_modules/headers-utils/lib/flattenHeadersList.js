"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenHeadersList = void 0;
function flattenHeadersList(list) {
    return list.map(function (_a) {
        var name = _a[0], values = _a[1];
        return [name, [].concat(values).join('; ')];
    });
}
exports.flattenHeadersList = flattenHeadersList;

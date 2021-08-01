"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inheritRequestHeaders = void 0;
function inheritRequestHeaders(req, headers) {
    // Cannot write request headers once already written,
    // or when no headers are given.
    if (req.headersSent || !headers) {
        return;
    }
    Object.entries(headers).forEach(function (_a) {
        var name = _a[0], value = _a[1];
        if (value != null) {
            req.setHeader(name, value);
        }
    });
}
exports.inheritRequestHeaders = inheritRequestHeaders;
//# sourceMappingURL=inheritRequestHeaders.js.map
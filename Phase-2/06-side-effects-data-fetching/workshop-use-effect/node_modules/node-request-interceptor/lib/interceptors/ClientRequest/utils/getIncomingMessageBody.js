"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIncomingMessageBody = void 0;
function getIncomingMessageBody(res) {
    var responseBody = '';
    return new Promise(function (resolve, reject) {
        res.once('error', reject);
        res.on('data', function (chunk) { return (responseBody += chunk); });
        res.once('end', function () {
            resolve(responseBody);
        });
    });
}
exports.getIncomingMessageBody = getIncomingMessageBody;
//# sourceMappingURL=getIncomingMessageBody.js.map
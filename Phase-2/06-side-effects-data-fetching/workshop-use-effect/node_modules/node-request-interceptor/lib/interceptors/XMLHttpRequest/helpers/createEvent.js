"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = void 0;
var EventPolyfill_1 = require("../polyfills/EventPolyfill");
var ProgressEventPolyfill_1 = require("../polyfills/ProgressEventPolyfill");
var SUPPORTS_PROGRESS_EVENT = typeof ProgressEvent !== 'undefined';
function createEvent(options, target, type) {
    var progressEvents = [
        'error',
        'progress',
        'loadstart',
        'loadend',
        'load',
        'timeout',
        'abort',
    ];
    /**
     * `ProgressEvent` is not supported in React Native.
     * @see https://github.com/mswjs/node-request-interceptor/issues/40
     */
    var ProgressEventClass = SUPPORTS_PROGRESS_EVENT
        ? ProgressEvent
        : ProgressEventPolyfill_1.ProgressEventPolyfill;
    var event = progressEvents.includes(type)
        ? new ProgressEventClass(type, {
            lengthComputable: true,
            loaded: (options === null || options === void 0 ? void 0 : options.loaded) || 0,
            total: (options === null || options === void 0 ? void 0 : options.total) || 0,
        })
        : new EventPolyfill_1.EventPolyfill(type, {
            target: target,
            currentTarget: target,
        });
    return event;
}
exports.createEvent = createEvent;
//# sourceMappingURL=createEvent.js.map
import { RequestMiddleware, RequestInterceptorContext } from '../../glossary';
declare type XMLHttpRequestEventHandler = (this: XMLHttpRequest, event: ProgressEvent<any>) => void;
interface XMLHttpRequestEvent<EventMap extends any> {
    name: keyof EventMap;
    listener: XMLHttpRequestEventHandler;
}
export declare const createXMLHttpRequestOverride: (middleware: RequestMiddleware, context: RequestInterceptorContext, XMLHttpRequestPristine: typeof window.XMLHttpRequest) => {
    new (): {
        requestHeaders: Record<string, string>;
        responseHeaders: Record<string, string>;
        _events: XMLHttpRequestEvent<XMLHttpRequestEventTargetEventMap>[];
        readonly UNSENT: 0;
        readonly OPENED: 1;
        readonly HEADERS_RECEIVED: 2;
        readonly LOADING: 3;
        readonly DONE: 4;
        method: string;
        url: string;
        withCredentials: boolean;
        status: number;
        statusText: string;
        user?: string | undefined;
        password?: string | undefined;
        data: string;
        async?: boolean | undefined;
        response: any;
        responseText: string;
        responseType: XMLHttpRequestResponseType;
        responseXML: Document | null;
        responseURL: string;
        upload: XMLHttpRequestUpload;
        readyState: number;
        onreadystatechange: (this: XMLHttpRequest, ev: Event) => any;
        timeout: number;
        onabort: (this: XMLHttpRequestEventTarget, event: ProgressEvent) => any;
        onerror: (this: XMLHttpRequestEventTarget, event: Event) => any;
        onload: (this: XMLHttpRequestEventTarget, event: ProgressEvent) => any;
        onloadend: (this: XMLHttpRequestEventTarget, event: ProgressEvent) => any;
        onloadstart: (this: XMLHttpRequestEventTarget, event: ProgressEvent) => any;
        onprogress: (this: XMLHttpRequestEventTarget, event: ProgressEvent) => any;
        ontimeout: (this: XMLHttpRequestEventTarget, event: ProgressEvent) => any;
        triggerReadyStateChange(options?: any): void;
        trigger<K extends "error" | "abort" | "timeout" | "progress" | "loadstart" | "loadend" | "load">(eventName: K, options?: any): any;
        reset(): void;
        open(method: string, url: string, async?: boolean, user?: string | undefined, password?: string | undefined): Promise<void>;
        send(data?: string | undefined): void;
        abort(): void;
        dispatchEvent(): boolean;
        setRequestHeader(name: string, value: string): void;
        getResponseHeader(name: string): string | null;
        getAllResponseHeaders(): string;
        addEventListener<K_1 extends "error" | "abort" | "timeout" | "progress" | "loadstart" | "loadend" | "load">(name: K_1, listener: (event?: XMLHttpRequestEventTargetEventMap[K_1] | undefined) => void): void;
        removeEventListener<K_2 extends "error" | "abort" | "timeout" | "progress" | "loadstart" | "loadend" | "load" | "readystatechange">(name: K_2, listener: (event?: XMLHttpRequestEventMap[K_2] | undefined) => void): void;
        overrideMimeType(): void;
        /**
         * Sets a proper `response` property based on the `responseType` value.
         */
        getResponseBody(body: string | undefined): string | Record<string, any> | null;
        /**
         * Propagates captured XHR instance callbacks to the given XHR instance.
         * @note that `onload` listener is explicitly omitted.
         */
        propagateCallbacks(req: XMLHttpRequest): void;
        propagateListeners(req: XMLHttpRequest): void;
        propagateHeaders(req: XMLHttpRequest, headers: Record<string, string | string[]>): void;
    };
    readonly UNSENT: 0;
    readonly OPENED: 1;
    readonly HEADERS_RECEIVED: 2;
    readonly LOADING: 3;
    readonly DONE: 4;
};
export {};

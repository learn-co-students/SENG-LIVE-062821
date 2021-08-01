import { Interceptor, RequestInterceptorEventsMap, RequestMiddleware } from './glossary';
export declare class RequestInterceptor {
    private interceptors;
    private emitter;
    private middleware;
    constructor(interceptors: Interceptor[]);
    /**
     * Applies given request middleware to any intercepted request.
     */
    use(requestMiddleware: RequestMiddleware): void;
    on<K extends keyof RequestInterceptorEventsMap>(eventType: K, listener: RequestInterceptorEventsMap[K]): void;
    private applyMiddleware;
    /**
     * Restores original instances of patched modules.
     */
    restore(): void;
}

/// <reference types="node" />
import http from 'http';
import { RequestMiddleware, RequestInterceptorContext } from '../../glossary';
export declare function createClientRequestOverrideClass(middleware: RequestMiddleware, context: RequestInterceptorContext, performOriginalRequest: typeof http.request, originalClientRequest: typeof http.ClientRequest): (this: http.ClientRequest, url: string | import("url").URL, options: http.RequestOptions, callback?: ((res: http.IncomingMessage) => void) | undefined) => http.ClientRequest;

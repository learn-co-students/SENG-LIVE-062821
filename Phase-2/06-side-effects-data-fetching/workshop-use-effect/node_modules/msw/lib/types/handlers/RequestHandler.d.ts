import { Headers } from 'headers-utils';
import { MockedResponse, ResponseComposition } from '../response';
import { set } from '../context/set';
export declare const defaultContext: {
    status: (statusCode: number, statusText?: string | undefined) => import("../response").ResponseTransformer<any>;
    set: typeof set;
    delay: (durationOrMode?: number | import("../context/delay").DelayMode | undefined) => import("../response").ResponseTransformer<any>;
    fetch: (input: string | MockedRequest<DefaultRequestBody>, requestInit?: RequestInit) => Promise<Response>;
};
export declare type DefaultRequestMultipartBody = Record<string, string | File | (string | File)[]>;
export declare type DefaultRequestBody = Record<string, any> | DefaultRequestMultipartBody | string | undefined;
export interface MockedRequest<Body = DefaultRequestBody> {
    id: string;
    url: URL;
    method: Request['method'];
    headers: Headers;
    cookies: Record<string, string>;
    mode: Request['mode'];
    keepalive: Request['keepalive'];
    cache: Request['cache'];
    destination: Request['destination'];
    integrity: Request['integrity'];
    credentials: Request['credentials'];
    redirect: Request['redirect'];
    referrer: Request['referrer'];
    referrerPolicy: Request['referrerPolicy'];
    body: Body;
    bodyUsed: Request['bodyUsed'];
}
interface RequestHandlerDefaultInfo {
    callFrame?: string;
}
declare type RequestHandlerInfo<ExtraInfo extends Record<string, any>> = {
    header: string;
} & ExtraInfo;
declare type ContextMap = Record<string, (...args: any[]) => any>;
export declare type ResponseResolverReturnType<R> = R | undefined | void;
export declare type AsyncResponseResolverReturnType<R> = Promise<ResponseResolverReturnType<R>> | ResponseResolverReturnType<R>;
export declare type ResponseResolver<RequestType = MockedRequest, ContextType = typeof defaultContext, BodyType = any> = (req: RequestType, res: ResponseComposition<BodyType>, context: ContextType) => AsyncResponseResolverReturnType<MockedResponse<BodyType>>;
export interface RequestHandlerOptions<HandlerInfo> {
    info: RequestHandlerInfo<HandlerInfo>;
    resolver: ResponseResolver<any, any>;
    ctx?: ContextMap;
}
export interface RequestHandlerExecutionResult<PublicRequestType> {
    handler: RequestHandler;
    parsedResult: any;
    request: PublicRequestType;
    response?: MockedResponse;
}
export declare abstract class RequestHandler<HandlerInfo extends Record<string, any> = Record<string, any>, Request extends MockedRequest = MockedRequest, ParsedResult = any, PublicRequest extends MockedRequest = Request> {
    info: RequestHandlerDefaultInfo & RequestHandlerInfo<HandlerInfo>;
    private ctx;
    shouldSkip: boolean;
    protected resolver: ResponseResolver<any, any>;
    constructor(options: RequestHandlerOptions<HandlerInfo>);
    /**
     * Determine if the captured request should be mocked.
     */
    abstract predicate(request: MockedRequest, parsedResult: ParsedResult): boolean;
    /**
     * Print out the successfully handled request.
     */
    abstract log(request: Request, res: any, handler: this, parsedResult: ParsedResult): void;
    /**
     * Parse the captured request to extract additional information from it.
     * Parsed result is then exposed to other methods of this request handler.
     */
    parse(request: MockedRequest): ParsedResult;
    /**
     * Test if this handler matches the given request.
     */
    test(request: MockedRequest): boolean;
    /**
     * Derive the publicly exposed request (`req`) instance of the response resolver
     * from the captured request and its parsed result.
     */
    protected getPublicRequest(request: MockedRequest, parsedResult: ParsedResult): PublicRequest;
    markAsSkipped(shouldSkip?: boolean): void;
    /**
     * Execute this request handler and produce a mocked response
     * using the given resolver function.
     */
    run(request: MockedRequest): Promise<RequestHandlerExecutionResult<PublicRequest> | null>;
    private createExecutionResult;
}
export {};

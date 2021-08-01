import { MockedResponse } from '../response';
import { MockedRequest, RequestHandler } from '../handlers/RequestHandler';
interface ResponsePayload {
    handler?: RequestHandler;
    publicRequest?: any;
    parsedRequest?: any;
    response?: MockedResponse;
}
/**
 * Returns a mocked response for a given request using following request handlers.
 */
export declare const getResponse: <Request_1 extends MockedRequest<import("../handlers/RequestHandler").DefaultRequestBody>, Handler extends RequestHandler<Record<string, any>, MockedRequest<import("../handlers/RequestHandler").DefaultRequestBody>, any, MockedRequest<import("../handlers/RequestHandler").DefaultRequestBody>>[]>(request: Request_1, handlers: Handler) => Promise<ResponsePayload>;
export {};

import { MockedRequest } from '../../handlers/RequestHandler';
import { ServiceWorkerIncomingRequest } from '../../setupWorker/glossary';
export declare function parseWorkerRequest(rawRequest: ServiceWorkerIncomingRequest): MockedRequest;

import { ResponseWithSerializedHeaders } from '../../setupWorker/glossary';
/**
 * Formats a mocked response for introspection in browser's console.
 */
export declare function prepareResponse(res: ResponseWithSerializedHeaders<any>): {
    body: string | Record<string, any> | undefined;
    status: number;
    statusText: string;
    once: boolean;
    delay?: number | undefined;
    headers: import("headers-utils").HeadersList;
};

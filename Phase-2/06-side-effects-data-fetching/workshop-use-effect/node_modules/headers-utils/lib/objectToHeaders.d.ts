import { Headers } from './Headers';
/**
 * Converts a given headers object to a new `Headers` instance.
 */
export declare function objectToHeaders(obj: Record<string, string | string[] | undefined>): Headers;

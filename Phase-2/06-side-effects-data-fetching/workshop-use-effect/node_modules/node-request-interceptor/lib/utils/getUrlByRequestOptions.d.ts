/// <reference types="node" />
import { RequestOptions } from 'https';
import { RequestSelf } from '../glossary';
declare type IsomorphicRequestOptions = RequestOptions & RequestSelf;
export declare const DEFAULT_PATH = "/";
/**
 * Creates a `URL` instance from a given `RequestOptions` object.
 */
export declare function getUrlByRequestOptions(options: IsomorphicRequestOptions): URL;
export {};

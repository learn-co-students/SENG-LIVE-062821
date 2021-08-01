import { match } from 'node-match-path';
import { Mask } from '../../setupWorker/glossary';
/**
 * Returns the result of matching given request URL
 * against a mask.
 */
export declare function matchRequestUrl(url: URL, mask: Mask): ReturnType<typeof match>;

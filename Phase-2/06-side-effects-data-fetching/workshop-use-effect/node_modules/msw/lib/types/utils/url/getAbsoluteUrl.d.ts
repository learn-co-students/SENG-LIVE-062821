import { Mask } from '../../setupWorker/glossary';
/**
 * Returns an absolute URL based on the given relative URL, if possible.
 * Ignores regular expressions.
 */
export declare const getAbsoluteUrl: <T extends Mask>(mask: T) => T;

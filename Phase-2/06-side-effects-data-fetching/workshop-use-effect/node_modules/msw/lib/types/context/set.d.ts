import { ResponseTransformer } from '../response';
/**
 * Sets one or multiple response headers.
 * @see {@link https://mswjs.io/docs/api/context/set `ctx.set()`}
 */
export declare function set<N extends string | Record<string, string | string[]>>(...args: N extends string ? [N, string] : [N]): ResponseTransformer;

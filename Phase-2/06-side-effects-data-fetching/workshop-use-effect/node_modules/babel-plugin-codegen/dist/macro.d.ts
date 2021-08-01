declare function codegen(literals: TemplateStringsArray, ...interpolations: Array<unknown>): any;
declare function codegen(code: string): any;
declare namespace codegen {
    function require(modulePath: string, ...args: Array<unknown>): any;
}
declare const _default: typeof codegen;
export default _default;

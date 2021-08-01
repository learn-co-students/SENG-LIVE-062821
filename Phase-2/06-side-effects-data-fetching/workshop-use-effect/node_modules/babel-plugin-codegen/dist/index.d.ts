import type babelCore from '@babel/core';
declare type VisitorState = {
    file: {
        opts: babelCore.TransformOptions;
    };
};
declare function codegenPlugin(babel: typeof babelCore): babelCore.PluginObj<VisitorState>;
export default codegenPlugin;

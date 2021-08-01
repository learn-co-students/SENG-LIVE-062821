import babelCore from '@babel/core';
declare function getReplacers(babel: typeof babelCore): {
    asTag: (path: babelCore.NodePath<babelCore.types.TaggedTemplateExpression>, fileOpts: babelCore.TransformOptions) => void;
    asJSX: (path: babelCore.NodePath<babelCore.types.JSXOpeningElement>, fileOpts: babelCore.TransformOptions) => void;
    asFunction: (path: babelCore.NodePath<babelCore.types.CallExpression>, fileOpts: babelCore.TransformOptions) => void;
    asProgram: (path: babelCore.NodePath<babelCore.types.Program>, fileOpts: babelCore.TransformOptions) => void;
    asImportCall: (path: babelCore.NodePath<babelCore.types.CallExpression>, fileOpts: babelCore.TransformOptions) => void;
    asImportDeclaration: (path: babelCore.NodePath<babelCore.types.ImportDeclaration>, fileOpts: babelCore.TransformOptions) => void;
    asIdentifier: (path: babelCore.NodePath<babelCore.types.Identifier>, fileOpts: babelCore.TransformOptions) => boolean | void;
};
export { getReplacers };

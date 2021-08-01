"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _babelPluginMacros = require("babel-plugin-macros");

var _replace = require("./replace");

// import printAST from 'ast-pretty-print'
const codegenMacros = function codegenMacros({
  references,
  state,
  babel
}) {
  const {
    asIdentifier
  } = (0, _replace.getReplacers)(babel);
  const fileOpts = state.file.opts;
  references.default.forEach(referencePath => {
    if (asIdentifier(referencePath, fileOpts) === false) {
      throw referencePath.buildCodeFrameError('codegen macro must be used as a tagged template literal, function, jsx, or .require call', Error);
    }
  });
};

// Unfortunately I couldn't figure out how to add TS support for the JSX form
// Something about the overload not being supported because codegen can't be all the things or whatever
var _default = (0, _babelPluginMacros.createMacro)(codegenMacros);
/*
eslint
  @typescript-eslint/no-explicit-any: "off",
*/


exports.default = _default;
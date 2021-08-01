"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _replace = require("./replace");

var _helpers = require("./helpers");

function codegenPlugin(babel) {
  const {
    asProgram,
    asIdentifier,
    asImportDeclaration
  } = (0, _replace.getReplacers)(babel);
  return {
    name: 'codegen',
    visitor: {
      Program(path, {
        file: {
          opts: fileOpts
        }
      }) {
        var _firstNode$leadingCom;

        const firstNode = path.node.body[0] || {};
        const comments = (_firstNode$leadingCom = firstNode.leadingComments) != null ? _firstNode$leadingCom : [];
        const codegenComment = comments.find(_helpers.isCodegenComment);

        if (codegenComment) {
          codegenComment.value = ' this file was codegened';
          asProgram(path, fileOpts);
        }
      },

      Identifier(path, {
        file: {
          opts: fileOpts
        }
      }) {
        const isCodegen = path.node.name === 'codegen';

        if (isCodegen) {
          asIdentifier(path, fileOpts);
        }
      },

      ImportDeclaration(path, {
        file: {
          opts: fileOpts
        }
      }) {
        const isCodegen = (0, _helpers.looksLike)(path, {
          node: {
            source: {
              leadingComments(comments) {
                var _comments$some;

                // istanbul ignore next because the ?? false should never happen
                // because "comments" should never be null, but the types say it could...
                return (_comments$some = comments == null ? void 0 : comments.some(_helpers.isCodegenComment)) != null ? _comments$some : false;
              }

            }
          }
        });

        if (isCodegen) {
          asImportDeclaration(path, fileOpts);
        }
      }

    }
  };
}

var _default = codegenPlugin;
exports.default = _default;
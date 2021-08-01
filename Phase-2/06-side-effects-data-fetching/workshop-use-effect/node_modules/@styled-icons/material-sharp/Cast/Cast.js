"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CastDimensions = exports.Cast = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _styledIcon = require("@styled-icons/styled-icon");

var Cast = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/React.createElement(_styledIcon.StyledIconBase, (0, _extends2.default)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0zm0 0h24v24H0V0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 3H1v5h2V5h18v14h-7v2h9V3zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2a9 9 0 019 9h2c0-6.08-4.93-11-11-11z"
  }));
});
exports.Cast = Cast;
Cast.displayName = 'Cast';
var CastDimensions = {
  height: 24,
  width: 24
};
exports.CastDimensions = CastDimensions;
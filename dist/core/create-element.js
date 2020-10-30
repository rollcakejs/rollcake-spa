"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;

var _element = _interopRequireDefault(require("./element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createElement() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var tag = config.tag,
      attr = config.attr,
      props = config.props,
      children = config.children;
  return new _element["default"](tag, attr, props, children);
}
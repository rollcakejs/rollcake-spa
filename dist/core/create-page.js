"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPage = createPage;

var _page = _interopRequireDefault(require("./page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createPage() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var onInit = config.onInit,
      onUpdate = config.onUpdate,
      onDestroy = config.onDestroy,
      content = config.content,
      loadingContent = config.loadingContent;
  return new _page["default"](onInit, onUpdate, onDestroy, content, loadingContent);
}
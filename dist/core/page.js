"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rollcakeMfBroker = require("@rollcakejs/rollcake-mf-broker");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Page = /*#__PURE__*/function () {
  function Page() {
    var onInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    var onUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var onDestroy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var content = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, Page);

    this.onInit = onInit;
    this.onUpdate = onUpdate;
    this.onDestroy = onDestroy;
    this.content = content;

    this.onBeforeInit = function () {};

    this.onBeforeDestroy = function () {}; // strictly internal


    this._rollCakeMFBroker = window[_rollcakeMfBroker.WINDOW_VARIABLE.ROLLCAKE];
    this._entryDOMNode = null;
    this._childDOMNode = null;
    this._loadingContentDOMNode = null;
    this._prevStateValue = null;

    this._watchIsStoreUpdatedEvent();

    this._watchIsMicrofrontendFetchingEvent();
  }

  _createClass(Page, [{
    key: "_watchIsStoreUpdatedEvent",
    value: function _watchIsStoreUpdatedEvent() {
      var _this = this;

      var bus = this._rollCakeMFBroker[_rollcakeMfBroker.CONTEXT_ATTRIBUTE.BUS];
      bus.subscribe(_rollcakeMfBroker.INTERNAL_BUS_PUBLISH_EVENT_TYPE.IS_STORE_UPDATED, function () {
        _this._destroyContent();

        _this.onUpdate();

        _this._renderContent();
      });
    }
  }, {
    key: "_watchIsMicrofrontendFetchingEvent",
    value: function _watchIsMicrofrontendFetchingEvent() {
      var _this2 = this;

      var bus = this._rollCakeMFBroker[_rollcakeMfBroker.CONTEXT_ATTRIBUTE.BUS];
      bus.subscribe(_rollcakeMfBroker.INTERNAL_BUS_PUBLISH_EVENT_TYPE.IS_FETCHING_MICROFRONTEND, function (isFetching) {
        if (isFetching && _this2.loadingContent && !_this2._loadingContentDOMNode) {
          _this2._hideContent();

          _this2._renderLoadingContent();
        } else {
          _this2._destroyLoadingContent();

          _this2._displayContent();
        }
      });
    }
  }, {
    key: "render",
    value: function render(entryDOMNode) {
      var loadingContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.onBeforeInit();
      this._entryDOMNode = entryDOMNode;
      this.loadingContent = loadingContent;

      this._renderContent();

      this.onInit();
    }
  }, {
    key: "_renderContent",
    value: function _renderContent() {
      if (this._entryDOMNode !== null && this.content) {
        var vDOMContent = this.content();
        this._childDOMNode = vDOMContent.render(this._entryDOMNode, this);
      }
    }
  }, {
    key: "_renderLoadingContent",
    value: function _renderLoadingContent() {
      if (this._entryDOMNode !== null && this.loadingContent) {
        var vDOMContent = this.loadingContent();
        this._loadingContentDOMNode = vDOMContent.render(this._entryDOMNode, this);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.onBeforeDestroy();

      this._destroyContent();

      this._entryDOMNode = null; // Clear any openned javascript intervals

      for (var i = setTimeout(function () {}, 0); i > 0; i--) {
        window.clearInterval(i);
        window.clearTimeout(i);
        if (window.cancelAnimationFrame) window.cancelAnimationFrame(i);
      }

      this.onDestroy();
    }
  }, {
    key: "_destroyContent",
    value: function _destroyContent() {
      if (this._entryDOMNode !== null && this._childDOMNode !== null) {
        this._entryDOMNode.removeChild(this._childDOMNode);

        this._childDOMNode = null;
      }
    }
  }, {
    key: "_hideContent",
    value: function _hideContent() {
      if (this._childDOMNode !== null) {
        this._childDOMNode.setAttribute("hidden", "");
      }
    }
  }, {
    key: "_displayContent",
    value: function _displayContent() {
      if (this._childDOMNode !== null) {
        this._childDOMNode.removeAttribute("hidden");
      }
    }
  }, {
    key: "_destroyLoadingContent",
    value: function _destroyLoadingContent() {
      if (this._entryDOMNode !== null && this._loadingContentDOMNode !== null) {
        this._entryDOMNode.removeChild(this._loadingContentDOMNode);

        this._loadingContentDOMNode = null;
      }
    }
  }]);

  return Page;
}();

var _default = Page;
exports["default"] = _default;
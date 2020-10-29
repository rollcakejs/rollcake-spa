"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function get() {
    return _createElement.createElement;
  }
});
Object.defineProperty(exports, "createPage", {
  enumerable: true,
  get: function get() {
    return _createPage.createPage;
  }
});
Object.defineProperty(exports, "RollCakeSpa", {
  enumerable: true,
  get: function get() {
    return _spa["default"];
  }
});
Object.defineProperty(exports, "RollCakeRouter", {
  enumerable: true,
  get: function get() {
    return _rollcakeRouter.RollCakeRouter;
  }
});
Object.defineProperty(exports, "NAVIGATION_MODE", {
  enumerable: true,
  get: function get() {
    return _rollcakeRouter.NAVIGATION_MODE;
  }
});
Object.defineProperty(exports, "RollCakeMFBroker", {
  enumerable: true,
  get: function get() {
    return _rollcakeMfBroker.RollCakeMFBroker;
  }
});
Object.defineProperty(exports, "WINDOW_VARIABLE", {
  enumerable: true,
  get: function get() {
    return _rollcakeMfBroker.WINDOW_VARIABLE;
  }
});
Object.defineProperty(exports, "CONTEXT_ATTRIBUTE", {
  enumerable: true,
  get: function get() {
    return _rollcakeMfBroker.CONTEXT_ATTRIBUTE;
  }
});
Object.defineProperty(exports, "CUSTOM_ELEMENT_TAG", {
  enumerable: true,
  get: function get() {
    return _rollcakeMfBroker.CUSTOM_ELEMENT_TAG;
  }
});
Object.defineProperty(exports, "LOCAL_STORAGE", {
  enumerable: true,
  get: function get() {
    return _rollcakeMfBroker.LOCAL_STORAGE;
  }
});
Object.defineProperty(exports, "PUBLIC_BUS_PUBLISH_EVENT_TYPE", {
  enumerable: true,
  get: function get() {
    return _constants.PUBLIC_BUS_PUBLISH_EVENT_TYPE;
  }
});

var _createElement = require("./core/create-element");

var _createPage = require("./core/create-page");

var _spa = _interopRequireDefault(require("./core/spa"));

var _rollcakeRouter = require("@rollcakejs/rollcake-router");

var _rollcakeMfBroker = require("@rollcakejs/rollcake-mf-broker");

var _constants = require("./shared/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../shared/constants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RollCakeSpa = function RollCakeSpa(MFBroker, router, entryDOMNode, loadingContent) {
  var _this = this;

  _classCallCheck(this, RollCakeSpa);

  if (!MFBroker || !router || !entryDOMNode) throw new Error(); // strictly internal

  this._VPage = null;
  MFBroker.init();

  if (MFBroker.getBus() !== undefined && MFBroker.getBus() !== null) {
    MFBroker.getBus().subscribe(_constants.PUBLIC_BUS_PUBLISH_EVENT_TYPE.NAVIGATE_TO, function (path) {
      router.navigateTo(path);
    });
  }

  router.init(function (response) {
    if (_this._VPage !== null) {
      _this._VPage.destroy();
    }

    if (response && response.item) {
      _this._VPage = response.item();

      _this._VPage.render(entryDOMNode, loadingContent);
    } else {
      _this._VPage = null;
    }
  });
};

var _default = RollCakeSpa;
exports["default"] = _default;
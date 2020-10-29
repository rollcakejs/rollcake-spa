"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Element = /*#__PURE__*/function () {
  function Element() {
    var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var children = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, Element);

    this.tag = tag;
    this.attr = attr;
    this.props = props;
    this.children = children; // strictly internal

    this._VPage = null;
    this._DOMNode = null;
    this._childrenDOMNode = null;
  }

  _createClass(Element, [{
    key: "render",
    value: function render(parentDOMNode, VPage) {
      var _this = this;

      this._VPage = VPage;
      this._DOMNode = document.createElement(this.tag);

      if (this.attr !== null) {
        Object.keys(this.attr).forEach(function (key) {
          switch (key) {
            case 'style':
              Object.keys(_this.attr[key]).forEach(function (innerKey) {
                _this._DOMNode[key][innerKey] = _this.attr[key][innerKey];
              });
              break;

            default:
              _this._DOMNode.setAttribute(key, _this.attr[key]);

              break;
          }
        });
      }

      if (this.props !== null) {
        if (this.props.innerHTML !== undefined) {
          this._DOMNode.innerHTML = this.props.innerHTML;
        }

        if (this.props.innerText !== undefined) {
          this._DOMNode.innerText = this.props.innerText;
        }

        if (this.props.textContent !== undefined) {
          this._DOMNode.textContent = this.props.textContent;
        }

        if (this.props.eventListener !== undefined && this.props.eventHandler !== undefined) {
          this._DOMNode.addEventListener(this.props.eventListener, this.props.eventHandler);
        }
      }

      if (this.children !== null) {
        this.children.forEach(function (child) {
          child.render(_this._DOMNode, _this._VPage);
        });
      }

      parentDOMNode.appendChild(this._DOMNode);
      return this._DOMNode;
    }
  }]);

  return Element;
}();

var _default = Element;
exports["default"] = _default;
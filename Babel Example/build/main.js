"use strict";

var _transform = require("./transform");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Hello = /*#__PURE__*/function () {
  function Hello() {
    _classCallCheck(this, Hello);
  }

  _createClass(Hello, null, [{
    key: "world",
    value: function world() {
      console.log((0, _transform.toUpper)("Hello World!"));
    }
  }]);

  return Hello;
}();

Hello.world();
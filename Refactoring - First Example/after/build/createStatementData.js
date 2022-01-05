"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createStatementData;

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function createStatementData(invoice, plays) {
  var result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(aPerformance) {
    var calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
    var result = Object.assign({}, aPerformance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  } // function amountFor(aPerformance) {
  //   let result = 0;
  //   switch (aPerformance.play.type) {
  //     case "tragedy":
  //       result = 40000;
  //       if (aPerformance.audience > 30) {
  //         result += 1000 * (aPerformance.audience - 30);
  //       }
  //       break;
  //     case "comedy":
  //       result = 30000;
  //       if (aPerformance.audience > 20) {
  //         result += 10000 + 500 * (aPerformance.audience - 20);
  //       }
  //       result += 300 * aPerformance.audience;
  //       break;
  //     default:
  //       throw new Error(`Unknown type: ${aPerformance.play.type}`);
  //   }
  //   return result;
  // }
  // function volumeCreditsFor(aPerformance) {
  //   let result = 0;
  //   result += Math.max(aPerformance.audience - 30, 0);
  //   if (aPerformance.play.type === "comedy") {
  //     result += Math.floor(aPerformance.audience / 5);
  //   }
  //   return result;
  // }


  function totalAmount(data) {
    return data.performances.reduce(function (total, p) {
      return total + p.amount;
    }, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce(function (total, p) {
      return total + p.volumeCredits;
    }, 0);
  }
}

function createPerformanceCalculator(aPerformance, aPlay) {
  switch (aPlay.type) {
    case "tragedy":
      return new TragedyCalculator(aPerformance, aPlay);

    case "comedy":
      return new ComedyCalculator(aPerformance, aPlay);

    default:
      throw new Error("Unknown type: ".concat(aPlay.type));
  }
}

var PerformanceCalculator = /*#__PURE__*/function () {
  function PerformanceCalculator(aPerformance, aPlay) {
    _classCallCheck(this, PerformanceCalculator);

    this.performance = aPerformance;
    this.play = aPlay;
  }

  _createClass(PerformanceCalculator, [{
    key: "amount",
    get: function get() {
      throw new Error("Subclass responsibility");
    }
  }, {
    key: "volumeCredits",
    get: function get() {
      return Math.max(this.performance.audience - 30, 0);
    }
  }]);

  return PerformanceCalculator;
}();

var TragedyCalculator = /*#__PURE__*/function (_PerformanceCalculato) {
  _inherits(TragedyCalculator, _PerformanceCalculato);

  var _super = _createSuper(TragedyCalculator);

  function TragedyCalculator() {
    _classCallCheck(this, TragedyCalculator);

    return _super.apply(this, arguments);
  }

  _createClass(TragedyCalculator, [{
    key: "amount",
    get: function get() {
      var result = 40000;

      if (this.performance.audience > 30) {
        result += 1000 * (this.performance.audience - 30);
      }

      return result;
    }
  }]);

  return TragedyCalculator;
}(PerformanceCalculator);

var ComedyCalculator = /*#__PURE__*/function (_PerformanceCalculato2) {
  _inherits(ComedyCalculator, _PerformanceCalculato2);

  var _super2 = _createSuper(ComedyCalculator);

  function ComedyCalculator() {
    _classCallCheck(this, ComedyCalculator);

    return _super2.apply(this, arguments);
  }

  _createClass(ComedyCalculator, [{
    key: "amount",
    get: function get() {
      var result = 30000;

      if (this.performance.audience > 20) {
        result += 10000 + 500 * (this.performance.audience - 20);
      }

      result += 300 * this.performance.audience;
      return result;
    }
  }, {
    key: "volumeCredits",
    get: function get() {
      return _get(_getPrototypeOf(ComedyCalculator.prototype), "volumeCredits", this) + Math.floor(this.performance.audience / 5);
    }
  }]);

  return ComedyCalculator;
}(PerformanceCalculator);
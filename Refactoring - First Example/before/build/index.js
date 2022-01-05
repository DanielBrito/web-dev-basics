"use strict";

var _invoices = _interopRequireDefault(require("./data/invoices.json"));

var _plays = _interopRequireDefault(require("./data/plays.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function statement(invoice, plays) {
  var totalAmount = 0;
  var volumeCredits = 0;
  var result = "Statement for ".concat(invoice.customer, "\n");
  var format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format;

  var _iterator = _createForOfIteratorHelper(invoice.performances),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var perf = _step.value;
      var play = plays[perf.playID];
      var thisAmount = 0;

      switch (play.type) {
        case "tragedy":
          thisAmount = 40000;

          if (perf.audience > 30) {
            thisAmount += 1000 * (perf.audience - 30);
          }

          break;

        case "comedy":
          thisAmount = 30000;

          if (perf.audience > 20) {
            thisAmount += 10000 + 500 * (perf.audience - 20);
          }

          thisAmount += 300 * perf.audience;
          break;

        default:
          throw new Error("Unknown type: ".concat(play.type));
      }

      volumeCredits += Math.max(perf.audience - 30, 0);

      if (play.type === "comedy") {
        volumeCredits += Math.floor(perf.audience / 5);
      }

      result += "  ".concat(play.name, ": ").concat(format(thisAmount / 100), " (").concat(perf.audience, " seats)\n");
      totalAmount += thisAmount;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  result += "Amount owed is ".concat(format(totalAmount / 100), "\n");
  result += "You earned ".concat(volumeCredits, " credits\n");
  return result;
}

function main() {
  var _iterator2 = _createForOfIteratorHelper(_invoices["default"]),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var invoice = _step2.value;
      console.log(statement(invoice, _plays["default"]));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

main();
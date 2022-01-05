"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlStatement = htmlStatement;
exports.statement = statement;

var _createStatementData = _interopRequireDefault(require("./createStatementData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function statement(invoice, plays) {
  return renderPlainText((0, _createStatementData["default"])(invoice, plays));
}

function renderPlainText(data) {
  var result = "Statement for ".concat(data.customer, "\n");

  var _iterator = _createForOfIteratorHelper(data.performances),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var perf = _step.value;
      result += "  ".concat(perf.play.name, ": ").concat(perf.amount, " (").concat(perf.audience, " seats)\n");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  result += "Amount owed is ".concat(usd(data.totalAmount), "\n");
  result += "You earned ".concat(data.totalVolumeCredits, " credits\n");
  return result;
}

function htmlStatement(invoice, plays) {
  return renderHtml((0, _createStatementData["default"])(invoice, plays));
}

function renderHtml(data) {
  var result = "<h1>Statement for ".concat(data.customer, "</h1>\n");
  result += "<table>\n";
  result += "<tr><th>play</th><th>seats</th><th>costs</th></tr>\n";

  var _iterator2 = _createForOfIteratorHelper(data.performances),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var perf = _step2.value;
      result += "  <tr><td>".concat(perf.play.name, "</td><td>").concat(perf.audience, "</td><td>").concat(usd(perf.amount), "</td></tr>\n");
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  result += "</table>\n";
  result += "<p>Amount owed is <em>".concat(usd(data.totalAmount), "</em></p>\n");
  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(aNumber / 100);
}
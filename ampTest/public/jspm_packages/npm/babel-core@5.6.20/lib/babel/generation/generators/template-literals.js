/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;
exports.TaggedTemplateExpression = TaggedTemplateExpression;
exports.TemplateElement = TemplateElement;
exports.TemplateLiteral = TemplateLiteral;

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Prints TaggedTemplateExpression, prints tag and quasi.
 */

function TaggedTemplateExpression(node, print) {
  print.plain(node.tag);
  print.plain(node.quasi);
}

/**
 * Prints TemplateElement, prints value.
 */

function TemplateElement(node) {
  this._push(node.value.raw);
}

/**
 * Prints TemplateLiteral, prints quasis, and expressions.
 */

function TemplateLiteral(node, print) {
  this.push("`");

  var quasis = node.quasis;
  var len = quasis.length;

  for (var i = 0; i < len; i++) {
    print.plain(quasis[i]);

    if (i + 1 < len) {
      this.push("${ ");
      print.plain(node.expressions[i]);
      this.push(" }");
    }
  }

  this._push("`");
}
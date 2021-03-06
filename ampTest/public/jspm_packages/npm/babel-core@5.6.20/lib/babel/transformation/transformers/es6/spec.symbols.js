/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _types = require("../../../types");

var t = _interopRequireWildcard(_types);

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var metadata = {
  optional: true
};

exports.metadata = metadata;
/**
 * [Please add a description.]
 */

var visitor = {

  /**
   * [Please add a description.]
   */

  UnaryExpression: function UnaryExpression(node, parent, scope, file) {
    if (node._ignoreSpecSymbols) return;

    if (node.operator === "typeof") {
      var call = t.callExpression(file.addHelper("typeof"), [node.argument]);
      if (this.get("argument").isIdentifier()) {
        var undefLiteral = t.literal("undefined");
        var unary = t.unaryExpression("typeof", node.argument);
        unary._ignoreSpecSymbols = true;
        return t.conditionalExpression(t.binaryExpression("===", unary, undefLiteral), undefLiteral, call);
      } else {
        return call;
      }
    }
  },

  /**
   * [Please add a description.]
   */

  BinaryExpression: function BinaryExpression(node, parent, scope, file) {
    if (node.operator === "instanceof") {
      return t.callExpression(file.addHelper("instanceof"), [node.left, node.right]);
    }
  },

  /**
   * [Please add a description.]
   */

  "VariableDeclaration|FunctionDeclaration": function VariableDeclarationFunctionDeclaration(node) {
    if (node._generated) this.skip();
  }
};
exports.visitor = visitor;
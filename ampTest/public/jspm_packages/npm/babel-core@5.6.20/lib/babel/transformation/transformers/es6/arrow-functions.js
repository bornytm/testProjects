/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Turn arrow functions into normal functions.
 *
 * @example
 *
 * **In**
 *
 * ```javascript
 * arr.map(x => x * x);
 * ```
 *
 * **Out**
 *
 * ```javascript
 * arr.map(function (x) {
 *   return x * x;
 * });
 */

var visitor = {

  /**
   * Look for arrow functions and mark them as "shadow functions".
   * @see /transformation/transformers/internal/shadow-functions.js
   */

  ArrowFunctionExpression: function ArrowFunctionExpression(node) {
    this.ensureBlock();
    node.expression = false;
    node.type = "FunctionExpression";
    node.shadow = true;
  }
};
exports.visitor = visitor;
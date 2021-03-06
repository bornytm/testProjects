/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _regexpuRewritePattern = require("regexpu/rewrite-pattern");

var _regexpuRewritePattern2 = _interopRequireDefault(_regexpuRewritePattern);

var _helpersRegex = require("../../helpers/regex");

var regex = _interopRequireWildcard(_helpersRegex);

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * [Please add a description.]
 */

var visitor = {

  /**
   * [Please add a description.]
   */

  Literal: function Literal(node) {
    if (!regex.is(node, "u")) return;
    node.regex.pattern = _regexpuRewritePattern2["default"](node.regex.pattern, node.regex.flags);
    regex.pullFlag(node, "u");
  }
};
exports.visitor = visitor;
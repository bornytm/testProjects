/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _lodashLangClone = require("lodash/lang/clone");

var _lodashLangClone2 = _interopRequireDefault(_lodashLangClone);

var _types = require("../../../types");

var t = _interopRequireWildcard(_types);

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var metadata = {
  group: "builtin-pre"
};

exports.metadata = metadata;
/**
 * [Please add a description.]
 */

function buildClone(bindingKey, refKey, check) {
  return function (node) {
    if (node[bindingKey] === node[refKey] || check && check(node)) {
      node[refKey] = t.removeComments(_lodashLangClone2["default"](node[refKey]));
    }
  };
}

/**
 * [Please add a description.]
 */

function buildListClone(listKey, bindingKey, refKey) {
  var clone = buildClone(bindingKey, refKey);

  return function (node) {
    if (!node[listKey]) return;

    var _arr = node[listKey];
    for (var _i = 0; _i < _arr.length; _i++) {
      var subNode = _arr[_i];
      clone(subNode);
    }
  };
}

/**
 * [Please add a description.]
 */

var visitor = {

  /**
   * [Please add a description.]
   */

  Property: buildClone("value", "key", function (node) {
    return t.isAssignmentPattern(node.value) && node.value.left === node.key;
  }),

  /**
   * [Please add a description.]
   */

  ExportDeclaration: buildListClone("specifiers", "local", "exported"),
  ImportDeclaration: buildListClone("specifiers", "local", "imported")
};
exports.visitor = visitor;
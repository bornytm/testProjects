/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _plugin = require("./plugin");

var _plugin2 = _interopRequireDefault(_plugin);

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * [Please add a description.]
 */

var Transformer = function Transformer(key, obj) {
  _classCallCheck(this, Transformer);

  var plugin = {};

  plugin.metadata = obj.metadata;
  delete obj.metadata;

  plugin.visitor = obj;

  return new _plugin2["default"](key, plugin);
};

exports["default"] = Transformer;
module.exports = exports["default"];
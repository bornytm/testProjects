/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * [Please add a description.]
 */

exports["default"] = {
  commonStrict: require("./common-strict"),
  amdStrict: require("./amd-strict"),
  umdStrict: require("./umd-strict"),
  common: require("./common"),
  system: require("./system"),
  ignore: require("./ignore"),
  amd: require("./amd"),
  umd: require("./umd")
};
module.exports = exports["default"];
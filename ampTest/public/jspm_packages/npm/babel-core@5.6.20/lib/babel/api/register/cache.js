/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;
exports.save = save;
exports.load = load;
exports.get = get;

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _homeOrTmp = require("home-or-tmp");

var _homeOrTmp2 = _interopRequireDefault(_homeOrTmp);

var _pathExists = require("path-exists");

var _pathExists2 = _interopRequireDefault(_pathExists);

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FILENAME = process.env.BABEL_CACHE_PATH || _path2["default"].join(_homeOrTmp2["default"], ".babel.json");
var data = {};

/**
 * Write stringified cache to disk.
 */

function save() {
  _fs2["default"].writeFileSync(FILENAME, JSON.stringify(data, null, "  "));
}

/**
 * Load cache from disk and parse.
 */

function load() {
  if (process.env.BABEL_DISABLE_CACHE) return;

  process.on("exit", save);
  process.nextTick(save);

  if (!_pathExists2["default"].sync(FILENAME)) return;

  try {
    data = JSON.parse(_fs2["default"].readFileSync(FILENAME));
  } catch (err) {
    return;
  }
}

/**
 * Retrieve data from cache.
 */

function get() {
  return data;
}
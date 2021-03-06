/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;
exports.File = File;
exports.Program = Program;
exports.BlockStatement = BlockStatement;
exports.Noop = Noop;

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Print File.program
 */

function File(node, print) {
  print.plain(node.program);
}

/**
 * Print all nodes in a Program.body.
 */

function Program(node, print) {
  print.sequence(node.body);
}

/**
 * Print BlockStatement, collapses empty blocks, prints body.
 */

function BlockStatement(node, print) {
  if (node.body.length === 0) {
    this.push("{}");
  } else {
    this.push("{");
    this.newline();
    print.sequence(node.body, { indent: true });
    if (!this.format.retainLines) this.removeLast("\n");
    this.rightBrace();
  }
}

/**
 * What is my purpose?
 * Why am I here?
 * Why are any of us here?
 * Does any of this really matter?
 */

function Noop() {}
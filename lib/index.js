'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _aop = require('./aop');

if (typeof global !== 'undefined' && global) {
    global.jm && global.jm.use(_aop.module);
}

exports.default = _aop.module;
module.exports = exports['default'];
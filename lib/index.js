'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _aop = require('./aop');

if (typeof global !== 'undefined' && global) {
    global.jm && global.jm.use(_aop.module_aop);
}

exports.default = _aop.aop;
module.exports = exports['default'];
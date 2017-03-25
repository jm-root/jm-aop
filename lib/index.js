'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _aop = require('./aop');

var _aop2 = _interopRequireDefault(_aop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof global !== 'undefined' && global) {
    global.jm && global.jm.use(_aop2.default);
}

exports.default = _aop2.default;
module.exports = exports['default'];
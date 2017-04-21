(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var aop = {
    _Arguments: function _Arguments(args) {
        // convert arguments object to array
        this.value = [].slice.call(args);
    },

    arguments: function _arguments() {
        // convert arguments object to array
        return new this._Arguments(arguments);
    },

    inject: function inject(aOrgFunc, aBeforeExec, aAtferExec) {
        var self = this;
        return function () {
            var Result = void 0;
            var isDenied = false;
            var args = [].slice.call(arguments);
            if (typeof aBeforeExec == 'function') {
                Result = aBeforeExec.apply(this, args);
                if (Result instanceof self._Arguments) args = Result.value;else if (isDenied = Result !== undefined) args.push(Result);
            }
            !isDenied && args.push(aOrgFunc.apply(this, args));
            if (typeof aAtferExec == 'function') Result = aAtferExec.apply(this, args.concat(isDenied));else Result = undefined;
            return Result !== undefined ? Result : args.pop();
        };
    }
};

var moduleAop = function moduleAop($) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'aop';

    $[name] = aop;

    return {
        name: name,
        unuse: function unuse($) {
            delete $[name];
        }
    };
};

exports.default = aop;
exports.aop = aop;
exports.moduleAop = moduleAop;
},{}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _aop = require('./aop');

if (typeof global !== 'undefined' && global) {
    global.jm && global.jm.use(_aop.moduleAop);
}

exports.default = _aop.aop;
module.exports = exports['default'];
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./aop":1}]},{},[2])
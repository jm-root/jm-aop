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

var _module = function _module($) {
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
exports.module = _module;
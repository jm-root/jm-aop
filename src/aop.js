export default ($, name = 'aop') => {
    $[name] = {
        _Arguments: function (args) {
            // convert arguments object to array
            this.value = [].slice.call(args);
        },

        arguments: function () {
            // convert arguments object to array
            return new this._Arguments(arguments);
        },

        inject: function (aOrgFunc, aBeforeExec, aAtferExec) {
            let self = this;
            return function () {
                let Result;
                let isDenied = false;
                let args = [].slice.call(arguments);
                if (typeof(aBeforeExec) == 'function') {
                    Result = aBeforeExec.apply(this, args);
                    if (Result instanceof self._Arguments)
                        args = Result.value;
                    else if (isDenied = Result !== undefined)
                        args.push(Result);
                }
                !isDenied && args.push(aOrgFunc.apply(this, args));
                if (typeof(aAtferExec) == 'function')
                    Result = aAtferExec.apply(this, args.concat(isDenied));
                else
                    Result = undefined;
                return (Result !== undefined ? Result : args.pop());
            };
        },
    };

    return {
        name: name,
        unuse: function ($) {
            delete $[name];
        },
    };
};

if (typeof module !== 'undefined' && module.exports) {
    require('jm-core');
    require('../lib');
}

(function () {
    var logger = jm.logger;
    var aop = jm.aop;
    logger.debug('******** jm.aop *********');
    var add = function (v1, v2) {
        return v1 + v2;
    };
    add = aop.inject(add, function (v1, v2) {
            logger.debug('before add ' + v1 + ' + ' + v2);
            //return v1 + v1;
            return aop.arguments(4, 5);
        },
        function (v1, v2) {
            logger.debug('after add ' + v1 + ' + ' + v2);
            //return v1 + v2 + v1;
        });
    logger.debug(add(1, 2));
})();


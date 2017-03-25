import aop from './aop';

if (typeof global !== 'undefined' && global) {
    global.jm && global.jm.use(aop);
}

export default aop;

import {aop, moduleAop} from './aop';

if (typeof global !== 'undefined' && global) {
    global.jm && global.jm.use(moduleAop);
}

export default aop;

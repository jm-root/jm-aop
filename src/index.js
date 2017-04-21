import {aop, module} from './aop';

if (typeof global !== 'undefined' && global) {
    global.jm && global.jm.use(module);
}

export default aop;


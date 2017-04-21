import {aop, module_aop} from './aop';

if (typeof global !== 'undefined' && global) {
    global.jm && global.jm.use(module_aop);
}

export default aop;

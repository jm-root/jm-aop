import chai from 'chai';
let expect = chai.expect;
import JM from 'jm-core';
import {moduleAop} from '../src/aop';

let jm = new JM()
        .use(moduleAop)
    ;

let add = (v1, v2) => v1 + v2;
add = jm.aop.inject(add, (v1, v2) => {
        return jm.aop.arguments(4, 5);
    },
    (v1, v2) => {
        // return v1 + v2 + v1;
    });

let sub = (v1, v2) => v1 - v2;
sub = jm.aop.inject(sub, (v1, v2) => {
        return jm.aop.arguments(5, 4);
    },
    (v1, v2) => {
        return v1 + v2;
    });

describe('aop', function () {
    it('jm.aop', function () {
        expect(jm.aop).to.be.a('object');
        expect(moduleAop).to.be.a('function');
        expect(add(1, 2)).to.be.equal(9);
        expect(sub(2, 0)).to.be.equal(9);
    });
});

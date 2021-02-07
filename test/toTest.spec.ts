import { describe, it } from 'mocha';
import { exampleAdd, exampleBranch, exampleStringManip } from '../src/toTest';
import { expect, should } from 'chai';
const rn = require('random-number');
// import { randomnumber } from 'random-number';

const gen = rn.generator({
    min: 0,
    max: 1000
})

describe('exampleAdd', () => {
    it('Should add two numbers correctly', () => {
        let i = 0;
        while (i < 20) {
            i += 1;
            const temp = gen();
            const tempP2 = exampleAdd(temp, 2);
            let tempP1 = exampleAdd(temp, 1);
            tempP1 = exampleAdd(tempP1, 1);
            const tempP0 = exampleAdd(temp, 0);
            expect(tempP2).to.equal(tempP1) &&
                expect(tempP0).to.equal(temp) &&
                expect(tempP2).not.to.equal(temp);
        }
    });
});

describe('exampleBranch', () => {
    it("Called with true returns 1", () => {
        const result = exampleBranch(true);
        expect(result).to.equal(1);
    });
    it("Called with false returns 0", () => {
        const result = exampleBranch(false);
        expect(result).to.equal(0);
    })
});

describe('exampleStringManip', () => {
    it("Doubles the given string", () => {
        const input = "Hello";
        const expected = "HelloHello";
        const result = exampleStringManip(input);
        expect(result).to.equal(expected);
    })
})
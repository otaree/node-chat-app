var expect = require('expect');

var { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non-string value', () => {
        var res = isRealString(1);
        expect(res).toBe(false);
    });

    it('should reject with only spaces', () => {
        var res = isRealString(' ');
        expect(res).toBe(false);
    });

    it('should allow string non-space character', () => {
        var res = isRealString('LOR');
        expect(res).toBe(true);
    });
});
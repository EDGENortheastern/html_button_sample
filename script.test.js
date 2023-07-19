// Imports function numToRoman from index.js 👇
const { sqrNum } = require('./script');

test("jest is working", () => {
    expect(2+2).toBe(4);
});

describe("tests function sqrNum", () => {
    it("works for positive integers", () => {
        expect(sqrNum(2)).toBe(4);
        expect(sqrNum(10)).toBe(100);
    });

    it("works for negative integers", () => {
        expect(sqrNum(-2)).toBe(4);
        expect(sqrNum(-10)).toBe(100);
    });
})
// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe ("Caesar Tests", () => {
  describe ("Testing for errors", () => {
    it ("should return false if shift value is 0", () => {
      const shift = 0;
      const input = "TeamFour";
      const actual = caesar(input, shift, encode = true)
      expect(actual).to.be.false;
    })
    it ("should return false if shift value is less than -25", () => {
      const shift = -26;
      const input = "TeamFour"
      const actual = caesar(input, shift, encode = true);
      expect(actual).to.be.false;
    })
    it ("should return false if shift value is greater than 25", () => {
      const shift = 26;
      const input = "TeamFour";
      const actual = caesar(input, shift, encode = true);
      expect(actual).to.be.false;
    })
  })
  describe ("decoding", () => {
    it ("should maintain spaces throughout", () => {
      const shift = 2;
      const expected = "team four";
      const input = "vgco hqwt";
      const actual = caesar(input, shift, encode = false);
      expect(actual).to.equal(expected);
    })
    it ("should handle nonalphabetical symbols", () => {
      const shift = 2;
      const expected = "team four!";
      const input = "vgco hqwt!";
      const actual = caesar(input, shift, encode = false);
      expect(actual).to.equal(expected);
    })
    it ("should ignore capital letters", () => {
      const shift = 2;
      const expected = "team four";
      const input = "Vgco Hqwt";
      const actual = caesar(input, shift, encode = false);
      expect(actual).to.equal(expected);
    })
    it ("should handle shifts that go off the alphabet and should loop back around", () => {
      const shift = 2;
      const expected = "zebra";
      const input = "bgdtc";
      const actual = caesar(input, shift, encode = false);
      expect(actual).to.equal(expected);
    })
    it ("should handle a shift to the left", () => {
      const shift = -2;
      const expected = "team four";
      const input = "rcyk dmsp";
      const actual = caesar(input, shift, encode = false);
      expect(actual).to.equal(expected);
    })
  })
  describe ("Test for Encoding", () => {
    it ("should maintain spaces throughout", () => {
      const shift = 2;
      const input = "team four";
      const expected = "vgco hqwt";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
    })
    it ("should handle nonalphabetical symbols", () => {
      const shift = 2;
      const input = "team four!";
      const expected = "vgco hqwt!";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
    })
    it ("should ignore capital letters", () => {
      const shift = 2;
      const input = "Team Four";
      const expected = "vgco hqwt";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
    })
    it ("should handle shifts that go off the alphabet and should loop back around", () => {
      const shift = 2;
      const input = "zebra";
      const expected = "bgdtc";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
    })
    it ("should handle a shift to the left", () => {
      const shift = -2;
      const input = "team four";
      const expected = "rcyk dmsp";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
    })
  })
})
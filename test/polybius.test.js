// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe ("Team 4 Polybius Tests", () => {
  describe ("Testing for Encoding", () => {
    it ("should return a string", () => {
      const input = "thinkful";
      const actual = polybius(input)
      expect(actual).to.be.a("string")
    })
    it ("should maintain spaces", () =>{
      const input = "hello world";
      const expected = "3251131343 2543241341";
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    })
    it ("should account for the shared value of i & j", () => {
     const input = "thinkful" 
     const expected = "4432423352125413";
      const actual = polybius(input);
      expect(actual).to.equal(expected)
    })
  })
  describe ("Testing for Decoding", () => {
    it ("should return false if the number of characters in the string is odd", () =>{
      const input = "443242335212541";
      const expected = false;
      const actual = polybius(input, encode = false);
      expect(actual).to.equal(expected);
    })
    it ("should maintain spaces", () => {
      const input = "3251131343 2543241341";
      const expected = "hello world";
      const actual = polybius(input, encode = false);
      expect(actual).to.equal(expected); 
    })
    it ("should account for the shared value of i and j", () => {
      const input = "4432423352125413";
      const expected = "thi/jnkful";
      const actual = polybius(input, encode = false);
      expect(actual).to.equal(expected);
    })
  })
})
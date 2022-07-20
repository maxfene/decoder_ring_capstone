let { expect } = require("chai");
let { substitution } = require ("../src/substitution")

describe ("Team 4 Polybius Test", () => {
  describe ("Error Handling", () => {
    it ("should return false if the alphabet is not 26 letters long", () => {
    const input = "hello";
    const alphabet = "quvwxo";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
    })
    it ("should return false if individual characters in the alphabet parameter are not unique", () => {
    const input = "hello";
    const alphabet = "quabbbbexxxxxrrrrsssssssss";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false; 
    })
    it ("should return false if the substitution alphabet is missing", () => {
    const input = "hello";
    const alphabet = "";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;   
    })
  })
  describe ("Encoding Tests", () => {
    it ("correctly encodes the given phrase based on the alphabet passed into the function", () => {
      const input = "hello";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const expected = "itssg";
      const actual = substitution(input, alphabet);
      expect(actual).to.equal(expected);
    })
    it ("maintains spaces in the message", () => {
      const input = "hello hello";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const expected = "itssg itssg";
      const actual = substitution(input, alphabet);
      expect(actual).to.equal(expected);
    })
    it ("ignores capital letters", () => {
      const input = "Hello";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const expected = "itssg";
      const actual = substitution(input, alphabet);
      expect(actual).to.equal(expected); 
    })
    it ("should work with an alphabet that includes unique characters", () => {
      const input = "hello";
      const alphabet = "qwertyu@opasdfghjklzxcvbnm";
      const expected = "@tssg";
      const actual = substitution(input, alphabet);
      expect(actual).to.equal(expected); 
    })
  })
  describe ("Decoding Tests", () => {
    // it ("correctly decodes the given phrase based on the alphabet passed into the function", () => {
    //   const input = "itssg"; 
    //   const alphabet = "qwertyuiopasdfghjklzxcvbnm";
    //   const expected = "hello";
    //   const actual = substitution(input, alphabet, encode = false);
    //   expect(actual).to.equal(expected);
    // })
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });
    it ("maintains spaces in the message", () => {
      const input = "itssg itssg";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(input, alphabet, false);
      const expected = "hello hello";
      expect(actual).to.equal(expected);
    })
    it ("ignores capital letters", () => {
      const input = "Dsccv";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const expected = "hello";
      const actual = substitution(input, alphabet, encode = false);
      expect(actual).to.equal(expected); 
    })
    it ("should work with an alphabet that includes unique characters", () => {
      const input =  "@tssg";
      const alphabet = "qwertyu@opasdfghjklzxcvbnm";
      const expected = "hello";
      const actual = substitution(input, alphabet, encode = false);
      expect(actual).to.equal(expected); 
    })
    })
})
// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // find the index of every input letter at alphabet and return matching index in OG alphabet, or vice-versa if decoding
    if (!alphabet || alphabet.length !== 26) return false;
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i+1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }
    //return status;
    let natAlpha = 'abcdefghijklmnopqrstuvwxyz'
    let adjInput = input.toLowerCase()
    let message = ""
    if (encode) {
      for (let x = 0; x < adjInput.length; x++) {
        if (adjInput[x] === " ") {message += adjInput[x]}
      for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < natAlpha.length; j++) {
             if (adjInput[x] === natAlpha[j] && j === i) 
            {
              message += alphabet[i];
              console.log(message);
            };
          }
        }
        //console.log(i);
      } return message;
      //console.log(message)
    } else {
     for (let x = 0; x < adjInput.length; x++) {
        if (adjInput[x] === " ") {message += adjInput[x]}
      for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < natAlpha.length; j++) {
             if (adjInput[x] === alphabet[i] && j === i) 
            {
              message += natAlpha[j];
              console.log(message)
            };
          }
        }
        //console.log(i);
      } return message;
      //console.log(message)
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

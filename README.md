# decoder_ring_capstone
My first capstone project for Thinkful.


## Caesar
1. function that encodes and decodes messages by shifting the value of the letters up/down the English alphabet as specified in the parameters
2. does not take a shift count greater than 25 or less than -25


## Polybius
1. function that encodes and decodes messages based on the Polybius square
2. every letter in the alphabet is assigned a two-digit number; this won't work if there are an odd amount of numbers


## Substitution
1. function that encodes and decodes messages by substituting the letters with the characters of an alphabet with the same length
2. the alphabet passed in through the parameters has to be 26 characters in length and each character must be unique
3. characters in your alphabet can be any unique symbol

## Tests
1. tests for whether or not the code is decoding/encoding properly
2. checks for errors i.e. if the parameters aren't met appropriately
3. ensures things like spaces and special symbols work so nothing is missed in translation

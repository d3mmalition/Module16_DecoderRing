// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //step 1, if !shift or equal to 0 or less than -25 or greater than 25, the function should return false.
    if (!shift || shift === 0 || shift > 25 || shift < -25){
      return false;
    }
    if(!encode) {shift *= -1};
    return input.toLowerCase().split("").map((letter) => {
      if (letter.charCodeAt(0) < 97) {
        return letter;
      };
      let charNum = letter.charCodeAt(0) + parseInt(shift);
      if (charNum > 122) {
        charNum = 96 + (charNum - 122)
      }
      else if (charNum < 97) {
        charNum += 26
      }
      return String.fromCharCode(charNum)
      }).join("");
    }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

// performs octal to decimal conversion
  // when invoked on a string that represents an octal
    // returns a decimal version of that value as a number
    // implement the conversion yourself

function octalToDecimal(numberString) {
  let strArray = numberString.split('');
  let powers = strArray.length - 1;
  let digits = strArray.map( function(strDigit) {
     return Number(strDigit) * Math.pow(8, powers--);
  });
  return digits.reduce((sum, num) => sum + num, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9

/* =begin
PROBLEM: gien a number, check if it is valid per the Luhn Formula

input: sting
output: boolean
mutating?:

rules:
   -explicit:
    -  takes a string
    - check if string is valid per Luhn formula
    - ignore all non-numeric characters in input string
    - number is valid if
      - checksum ends in 0, or checksum % 10 === 0
    
   -implicit:
     
unclear parts of problem?:
Luhn Formula is a simple checksum forumal 
  - used to validate id numbers
  - verifies a number against its included check digit

from rightmost digit move left
  - double the value of every second digit
  - any digit >= 10, subtract 9 from result

checksum is sum of all digits in result
  - if the checksum ends in 0, the number is valid
  - verify the number against the checksum 

examples/test_cases:
1111 --> 2121
8763 --> 7733
3 (12-9) --> 3 7 (16 - 9) --> 7 --> 3377 --> 7733   
data/alg:
take string
replace all non-digit numbers
convert string to array and reverse it
iterate over string
  for each odd index multiple number by 2
    - subtract 10 from result if greater than or equal to 10
sum the difits of the array
  check if result % 10 === 0
*/

function checksum(idNumber) {
  let ignoreChars = /[\D]/g;
  idNumber = idNumber.replace(ignoreChars, '');
  let checkSum = idNumber.split('').reverse().map((num, idx) => {
    if (idx % 2 === 1) {
      let result = Number(num) * 2;
      if (result >= 10) result -= 9;
      return result;
    } else {
      return Number(num);
    }
  }).reduce((sum, num) => sum + num, 0);

    return (checkSum % 10 === 0);
}

// console.log(checksum('1111')); //false
// console.log(checksum('8763')); // true
// console.log(checksum('8ab7()6^i3|')); // true
// console.log(checksum('3210')); // true 
// console.log(checksum('2323 2005 7766 3554')); // true


// part 2
/*
write a function that
  adds a cjeck digit to make an invalid number valid per the luhn formula
  return the original number plust that digit

  - the last digit, which is the rightmost digit is not doubled
  - we can use the checksum method, or adapt it to determine the remainder of % 10

  how do we determine if the number is higher or lower than the requred checksum digit?

  if the number is not a a valid number

// 2323 2005 7766 355

//121212121212121
//553667750023232
//513365710026262 49

// 49
// to get to a multiple of 10, we can either subtract 9, or add 1
// we could iterate over numbers 0-9 to determine which number produces a valid result
// if so, add the digit and return the number

// the first number that returns zero as the digit is our digit

*/

function addCheckDigit(number) {
  if (checksum(number)) {
    return number;
  } else {
    for (let i = 0; i < 10; i++) {
      let num = number + String(i);
      if (checksum(num)) return num;
    }
  }
}

console.log(addCheckDigit('8763')); // 8763
console.log(addCheckDigit('1111')); // 11114
console.log(addCheckDigit('2323 2005 7766 355')); // 2323 2005 7766 3554

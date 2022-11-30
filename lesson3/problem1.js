/* =begin
PROBLEM: write program that cleas up user-entered phone numbers

input: string
output: string
mutating?:

rules:
   -explicit:
    - input may contain:
      -- digits
      -- special characters - ignore these
        -- spaces, dash, dot, parentheses 
    - invalid 
      -- number is less than 10 digits
      -- number is more than 11 digits
    - assume 10 digit length number is good
    
    - if number is 11 digits
      -- and leading number is 1 remove leading 1 and use last 10
      -- nad leading number is not 1
        -- invalid

    - for invlid numbers
      -- return a string of 10 0's

    - return the clean number
      - after removing the special characters and validating the number

   -implicit:
      - valid numbers are between 10 and 11 digits inclusive  

unclear parts of problem?:
  - string that is length of 10, or are we looking for specifically 10 digits
  - (123) 456---5678
  - (123) 456.7891

examples/test_cases:
enterNewNumber('123456789') // false
enterNewNumber('123456789102') // false
enterNewNumber('(123)456---5678') // true 
enterNewNumber('(123)456.7891'); // true
enterNewNumber('(123) 4567891'); // true
enterNewNumber('1 (123)456-7891'); // true
enterNewNumber('2 (123)456-7891'); // false


data/alg:
- prompt user for number
- validate number - guard clause
  - check for invalid characters
    - in invalid characters - return bad number sting
- create a regex for special characters - [()\.\-]
  - replace all valid special characters with empty space
- check the length of the number string
  - if 10
    - return number
  - if 11
    - check for leading 1
      - if 1, trim 1 and return number
      - if not 1, return bad number string
  - else
    - return bad number string  

- check for leading number for 11 digit characters
*/

const BAD_NUMBER = '0000000000' 

function enterNewNumber(number) {
  let validRegex = /[0-9()\-\.]/;
  if (!validRegex.test(number)) return BAD_NUMBER;
  
  let validSpecialChars = /[()\-\.\s]/g;
  number = number.replace(validSpecialChars, '');

  if (number.length === 10) {
    return number;
  } else if (number.length === 11) {
    return validateElevenLengthNumber(number);
  } else {
    return BAD_NUMBER;
  }
}

function validateElevenLengthNumber(number) {
  if (number[0] === '1') {
    return number.substring(1);
  } else {
    return BAD_NUMBER;
  }
}

console.log(enterNewNumber('123456789')); // '0000000000'
console.log(enterNewNumber('1234567891024')); // '0000000000'
console.log(enterNewNumber('(123)456---5678')); // '1234567891' 
console.log(enterNewNumber('(123)456.7891')); // '1234567891'
console.log(enterNewNumber('123 4567891')); // '1234567891'
console.log(enterNewNumber('1 (123)456-7891')); // '1234567891'
console.log(enterNewNumber('2 (123)456-7891')); // '0000000000'

/*
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = array.filter(element => isOddNumber(element));
console.log(oddNumbers); // [ 1, 3, 5, 7, 9 ]

function isOddNumber(number) {
  return number % 2 === 1;
}
*/

// firt class functions allow for the following refactor

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = array.filter(isOddNumber);

console.log(oddNumbers); // [ 1, 3, 5, 7, 9 ]

function isOddNumber(number) {
  return number % 2 === 1;
}

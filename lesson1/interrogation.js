/*
function odd(number) {
  return number % 2 === 1;
}

let count = [1, 2, 3, 4, 5];
count.some(odd);              // true, some numbers are odd
count.every(odd);             // false, every number is not odd

//takes a single argument, a callback function
// pass the callback three arguments on each iteration
  // value of the current array element
  // index of the current element
  // array being processed

  */


// myOwnEvery
// takes an array and a function
// return true if every element passed to the function evaluates to true
// returns true if all elements return true

function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (!func(currentValue)) {
      return false;
    }
  }

  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true




function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false

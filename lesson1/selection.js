/*
let count = [1, 2, 3, 4, 5];
let filtered = count.filter((number, index, array) => number % 2 === 0);
console.log(filtered); // logs [ 2, 4 ]

// filter also invokes callback once for each iteration, passing three arguments: current element, current index, array being iterated over

// selects elements for which vallback returns a truthy value

// returns a new array conaining element for which callback returns a truthy value
*/

// myFilter
// takes an array and a function 
// returns an array
  // of values that the function passed returns true 

function myFilter(array, func) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (func(value, i, array)) newArray.push(value);
  }

  return newArray;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

console.log(myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]



function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive)
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));  // [ 3, 5, 18, 15 ]
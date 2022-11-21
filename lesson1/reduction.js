/*
function add(previousValue, element) {
  return previousValue + element;
}

let count = [1, 2, 3, 4, 5];
console.log(count.reduce(add));            // 15

// takes a callback function
// takes an optional second argumnet - initial value
  // uses the first element of the array if none provided
// passes four arguments to the callback function on each call
  // accumulator - return value of previous callback invocation
      // initial value on first iteration
  // value of current element in array
  // current index value
  // array being processed

// returns the value returned by the final callback invocation
*/

// myReduce
// takes an array and a function  
    // optionally takes an initial value argument
      // if ommited, set first value of array as initial value
// return value returned by las invocation of the callback function


function myReduce(array, func, initial) {
  let result = (initial) ? initial : array[0]; 
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    result = func(result, currentValue);
  }

  return result;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

// console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
// console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49



// takes a list of words as an argument
// returns the word with the most characters
function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"

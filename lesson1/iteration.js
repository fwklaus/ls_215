/*
// forEach used for iteration
// invokes callback function with three arguments
  // value of current element
  // index for current element
  // array being processed

let names = ['Eunice', 'Lucas', 'Mariana'];
names.forEach((name, index, array) => console.log(name, index, array[index]));

// logs
// Eunice 0 Eunice
// Lucas 1 Lucas
// Mariana 2 Mariana

// returns undefined
*/

// myForEach
// takes an array and a function
// iterate over the array
// call function on each iteration

function myForEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    func(value, i, array)
  }
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3

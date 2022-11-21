/*
let count = [1, 2, 3, 4, 5];
let doubled = count.map((number, index, array) => number * 2); // double each number
console.log(doubled);                                          // logs [ 2, 4, 6, 8, 10 ]

// takes a callback function
// passes three arguments to the callback, once per itertion
  // value of current element in array
  // index of current element
  // array being iterated over

// returns new array of transformed elements
*/

// myMap


function myMap(array, func) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    newArray.push(func(currentValue));
  }

  return newArray;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]





function getBooksTitle(books) {
  return myMap(books, getTitle);
}

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

function getTitle(book) {
  return book['title'];
}

console.log(getBooksTitle(books));
// console output
/*
[
  "JavaScript and JQuery: Interactive Front-End Web Development",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
]
*/

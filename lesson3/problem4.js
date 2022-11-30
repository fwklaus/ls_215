/* =begin
PROBLEM: given a range of numbers, return a list of complete numbers

input: string
output: array of numbers
mutating?:

rules:
   -explicit:
    - given a string - "short-hand" range
      -only the "significant" part of the next number is written
        - the numbers are always increasing
      - range limits are inclusive
    - return an array
      - a list of complete numbers

    - seperators: [\- : (..)]
    
   -implicit:
    - numbers in range increase from first to last
    - (-) - all seperators imply a range from first to last number in range

     
unclear parts of problem?:

examples/test_cases:
- we only care about the rightmost digits of a number - significant part
- we can iterate from 1 until we populate the return array with the same number of elements as contained in the range array
  -- whenever the rightmost digit(s) matches the digit(s) in the range, add the element to the return array

"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611

1 3 7 2 4 1
[1, 3, 7, 12, 14, 21]

data/alg:
- take a string
- split array on ,
- for each element
  - create a range if necessary
    - split element on [-:(..)]
  - iterate from first number to last
      - match the string version of each number against the end of the range
        - break out of loop following match


*/

function determineRange(range) {
  range = getRange(range)
  let returnArray  = [];

  // while (true)


  debugger;
}

function getRange(range) {
  range = range.split(', ');

  range = range.reduce((array, element) => {
    element = element.split(/[\-:(..)]/)
    
    if (element.length > 1 ) element = createRange(element);


    debugger;
    array.push(...element)
    return array;
  }, []);

  return range;
}

function createRange(range) {
  let first = Number(range[0]);
  let last = Number(range[range.length - 1]);
  let newRange = [];

  for(let i = first; ; i ++) {
    newRange.push(i);

    if (String(i))
  }
}

// console.log(determineRange("1, 3, 7, 2..4, 1")); // [1, 3, 7, 12, 14, 21]
console.log(determineRange("1-3, 1-2")); // [1, 2, 3, 11, 12]
// console.log(determineRange("1:5:2")); // [1, 2, 3, 4, 5 ..., 12]
// console.log(determineRange("104-2")); // [104, 105, 106 ..., 112]
// console.log(determineRange("104-02")); // [104, 105, 106 ..., 202 ]
// console.log(determineRange("545, 64:11")); // [545, 564, 565, 566..., 611]

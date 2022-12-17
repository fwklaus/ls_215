// method returns an array describing the index position of all empty slots in a given array. If the array is empty, or there are the array is not sparse, returns an empty array

function findEmptySlots(array) {
  if (array.length === 0) return [];
  let undefinedIndexPosition = [];
  let emptySlotIndexPositions = [];

  array.forEach((element, idx) => {
    if (element === undefined) {
      undefinedIndexPosition.push(idx);
    }
  });

  let i = 0;
  for (let index of array) {
    if (index === undefined && !undefinedIndexPosition.includes(i)) {
      emptySlotIndexPositions.push(i);
    }

    i += 1;
  }

  return emptySlotIndexPositions;
}

let array = new Array(10);
array[5] = 5;
array[2] = undefined;

array; // [<2 empty slots>, undefined, <2 empty slots>, <5 empty slots>];
console.log(findEmptySlots(array)); // [0, 1, 3, 4, 6, 7, 8, 9]
console.log(findEmptySlots([])); // []
console.log(findEmptySlots([1, 2, 3])); // []

let array2 = new Array(4);
console.log(findEmptySlots(array2)); // [0, 1, 2, 3]

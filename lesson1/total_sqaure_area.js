function totalArea(array) {
  let areas = array.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((sum, num) => sum + num, 0);
}

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalArea(rectangles));    // 141


// squaresd sides are equal
function totalSquareArea(array) {
  let squares = array.filter(sides => sides[0] === sides[1]);
  return totalArea(squares);
}


let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121
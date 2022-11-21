function compareScores(score1, score2) {
  if (score1 < score2) {
    return -1;
  } else if (score1 > score2) {
    return 1;
  } else {
    return 0;
  }
}

let scores = [5, 88, 50, 9, 60, 99, 12, 23];
scores.sort(compareScores);            // [ 5, 9, 12, 23, 50, 60, 88, 99 ]
scores;                                // mutated to [ 5, 9, 12, 23, 50, 60, 88, 99 ]

// sort uses calback function to compare elements
// if calback returns -1, score1 precedes score2 in final sequence
// if  returns 1, score1 follows score2
// if returns 0, sequence is left unchanged

// sort's default sort order is according to string Unicode code points

// takes one argument, a comparison callback function
    // comparison function takes two arguments
    // defines sort order by returning specific values
      // sort only cares about the sign of the callback return value

// returns the original array sorted in place 
    // allows us to use sort for either its return value or its side effect




let studentGrades = [
  { name: 'StudentA', grade: 90.1 },
  { name: 'StudentB', grade: 92 },
  { name: 'StudentC', grade: 91.8 },
  { name: 'StudentD', grade: 95.23 },
  { name: 'StudentE', grade: 91.81 },
];

function compareGrades(student1, student2) {
  if (student1.grade < student2.grade) {
    return 1;
  } else if (student1.grade > student2.grade) {
    return -1;
  } else {
    return 0;
  }
}

studentGrades.sort(compareGrades);



// inline style
let studentGrades = [
  { name: 'StudentA', grade: 90.1 },
  { name: 'StudentB', grade: 92 },
  { name: 'StudentC', grade: 91.8 },
  { name: 'StudentD', grade: 95.23 },
  { name: 'StudentE', grade: 91.81 },
];

studentGrades.sort((student1, student2) => {
  if (student1.grade < student2.grade) {
    return 1;
  } else if (student1.grade > student2.grade) {
    return -1;
  } else {
    return 0;
  }
});

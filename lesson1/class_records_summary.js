// function takes a studentScores object
// returns a class record summary object



// determine the studen't average score from the four exams
// sum the exercise scores
// apply the weights to compute the student's final percent grade
// determine the letter grade

// return a composite object for all 5 student performances

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

//iterate the scores array - forEach
// crete a return array - student grades
// creat a return array - exam results
// for each student
  // determine the score, and the letter grade
  // determin the average score, the minimum, and the maximum score
  // add all results to the appropiate array in the apporopriate form

// studentGrade
  // returns string with grade and letter grade

// examResults
  // returns object with three key/value pairs

function generateClassRecordSummary(scores) {
  let grades = [];
  let results = [];

  Object.keys(scores).forEach(function(student) {
    let studentScores = scores[student];

    grades.push(studentGrade(studentScores));
    results.push(examResults(studentScores));
  });

  return {
    studentGrades: grades,
    exams: results, 
  }
}


function getLetterGrade(score) {
 if (score >= 93 && score <= 100) {
  return 'A';
 } else if (score >= 85 && score <= 92) {
  return 'B';
 } else if (score >= 77 && score <= 84) {
  return 'C';
 } else if (score >= 69 && score <= 76) {
  return 'D';
 } else if (score >= 60 && score <= 68) {
  return 'E';
 } else if (score < 59) {
  return 'F';
}
}

function averageScore(exams, exercises) {
  let examScore = exams.reduce((total, score) => score + total, 0) / 4;
  let exerciseScore = exercises.reduce((total, score) => score + total, 0);
  return (examScore * .65) + (exerciseScore * .35);
}

// calculate the score based on the student's exams and exercises
function studentGrade(scores) {
  let exams = scores.scores.exams;
  let exercises = scores.scores.exercises;

  let weighted = Math.round(averageScore(exams, exercises));
  let letterGrade = getLetterGrade(weighted);

  return `${weighted} (${letterGrade})`;
}

function examResults(scores) {
  let exams = scores.scores.exams;
  let exercises = scores.scores.exercises;
  let examObject = {};

  let avg = averageScore(exams, exercises);
  let min = Math.min(exams);
  let max = Math.max(exams);

  examObject.average = avg;
  examObject.minimum = min;
  examObject.maximum = max;

  return examObject;
}

console.log(generateClassRecordSummary(studentScores));

// returns:
/*
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/

// MAP, FILTER & REDUCE Interview Questions

/****************** Array.map() ***********************/

const nums = [1, 2, 3, 4];
const multiplyByThree = nums.map((i, index, arr) => i * 3);
// console.log(multiplyByThree);

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 70 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
  { name: "Roshan", rollNumber: 17, marks: 100 },
];
const studentList = students.map((i, index, arr) => i.name.toUpperCase());
// console.log(studentList);

/******************* Array.filter() *******************/

const nums2 = [1, 2, 3, 4];
const moreThanTwo = nums2.filter((i, index, arr) => i > 2);
// console.log(moreThanTwo);


// Q -> we want to get the details of students who scored more than 60 marks.
const scoredMoreThan60Marks = students
  .filter((i, index, arr) => i.marks > 60)
  .map((i) => i.name);
// console.log("scoredMoreThan60Marks", scoredMoreThan60Marks);


// Q -> Get the details of students who scored more than 60 marks and have rollNumber greater than 15.
const scored60MarksAndRollNoGreaterThan15 = students
  .filter((i, index, arr) => i.marks > 60 && i.rollNumber > 15)
  .map((i) => i.name);
// console.log(
//   "scored60MarksAndRollNoGreaterThan15",
//   scored60MarksAndRollNoGreaterThan15
// );

/******************** Array.reduce() *******************/

const nums3 = [1, 2, 3, 4];
const sumofArray = nums3.reduce((acc, curr, index, arr) => {
  return acc + curr;
}, 0);
// console.log(sumofArray);


// Q -> Sum total of the marks of the students
const totalMarks = students.reduce((acc, curr, index) => curr.marks + acc, 0);
// console.log("totalMarks", totalMarks);


// Q -> Get only the names of the students who scored more than 60 marks
const studentScoredMoreThan30 = students
  .filter((i, index, arr) => i.marks > 60)
  .map((i) => i.name);
// console.log("studentScoredMoreThan30 ", studentScoredMoreThan30);


// Q -> print the total marks of the students with marks greater than 60 after 20 marks has been added to those students who scored less than 60.
const final = students
  .map((i) => {
    if (i.marks < 60) i.marks += 20;
    return i;
  })
  .filter((i) => i.marks > 60)
  .reduce((acc, curr, index) => acc + curr.marks, 0);
console.log(final);

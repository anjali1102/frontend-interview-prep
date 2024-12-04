//IIFES

/*
(function outer(x) {
  return (function inner(y) {
    console.log(x);
  })(2);
})(1);
*/

/*
const num1 = 10;
const num2 = 20;

function multiply() {
  return num1 * num2;
}
console.log(multiply());

function getScore() {
  var num1 = 10;
  var num2 = 20;

  return function add() {
    return `name score ${num1 + num2}`;
  };
}

console.log(getScore()());
*/

for (var i = 1; i < 5; i++) {
  setTimeout((i) => {
    console.log("timer", i);
  }, 1000);
}

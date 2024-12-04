// ******************* Question 1 : Lexical Scope *******************

/*
var nameMe = "Anjali";
function lexicalScope() {
  console.log(nameMe);
}
lexicalScope();
*/

// ******************* Question 2 : Closure *******************

/*
function makeFunc() {
  var name = "🎄🍩🍫☕️🎅🏻";
  return function displayName() {
    alert(name);
  };
}
const myFunc = makeFunc();
myFunc();
*/

// ******************* Question 3 : Closure scope chain *******************

/*
function sum(n1) {
  return function (n2) {
    return function (n3) {
      return n1 + n2 + n3;
    };
  };
}
const tSum = sum(2)(4)(6);
console.log("totalSum", tSum);
*/

// ******************* Question 4 : Output *******************

/*
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count); //1
  }
  console.log(count); //0
})();
*/

// ******************* Question 5 : Write function for this addSix() *******************

/*function createBase(num) {
  return function addingSix(input) {
    console.log(input + num);
    return input + num;
  };
}

var addSix = createBase(6);
addSix(10);
addSix(21);
*/


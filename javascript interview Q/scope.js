/*
{
  var name = "anjali";
}
console.log(name); 
*/

//var is global / functional scoped 📝

/*
{
  let gender = "F";
  const age = 11;
}
console.log(gender);
console.log(age);
*/

//reference error because let and const is block-scoped 📝

/*!--------------------------VARIABLE SHADOWING-----------------------------/>*/
// a variable with the same name as a variable in a higher scope is declared in a lower scope.

/*
function test() {
  let a = "Hello";
  if (true) {
    let a = "Hi";
    console.log(a); //Hi
  }
  console.log(a); //Hello
}
*/

/*
function test() {
  var a = "Hello";
  if (true) {
    let a = "Hi";
    console.log(a);
  }
  console.log(a);
}
*/

/*
function test() {
  let a = "Hello";
  if (true) {
    var a = "Hi";
    console.log(a);
  }
  console.log(a);
}
*/
// test();

//ILLEGAL SHADOWING, CAN"T SHADOW VAR ON LET 📝

// VAR => Can redeclare, can update, functional or global scoped  📝
// LET => Cannot redeclare, can update, block scoped  📝
// CONST => Cannot redeclare, cannot update, blocl scope, should assign value during declaration 📝

/*<!---------------------------------NOT ALLOWED-------------------------------/>*/

//const wizard;

/*
const color = "blue";
color = "red";
*/

/*
let rizz;
let rizz;
*/

/*<!---------------------------------HOISTING-------------------------------/>*/

/*
console.log(season);
var season = "winter";
*/

/*
happyBirthday();
function happyBirthday() {
  console.log("happy birthday!");
}
*/

/*
console.log(animal);
let animal = "tiger";
*/

/*
console.log(plant);
const plant = "hibiscus";
*/


// TEMPORAL DEAD ZONE:
// var  let const all are hoisted, but let & const are hoisted in Temporal dead zone
// var is hoisted with default value undefined even before intialization
// let is hoisted with No default value, Thus give 'ReferenceError: Cannot access 'animal' before initialization'
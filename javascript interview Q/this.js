// create an object with a method that increments a number

/******** Q1
 * 
 * 
const calc = {
  num: 1,
  increment() {
    return this.num++;
  },
};

console.log(calc.increment());
console.log(calc.increment());
console.log(calc.increment());
*
*
*/

/*********  Q2 
*
*
*
const myDog = Object.create({
  sayName: () => {
    console.log("this is ", this);
    // return this.name;
  },
});

myDog.name = "Milo";
myDog.sayName();
*
*
*
**********/

/*********** Q3 
 * 
 *
class Planet {
  constructor(name) {
    this.name = name;
    console.log("this in constructor", this);
  }

  getName() {
    console.log(this, this === earth); // => true
    return this.name;
  }
}

const earth = new Planet("Earth");
// method invocation. the context is earth
console.log("earth ", earth);
earth.getName();
*
*
****************/

/********* Q4
 * 
 * 
 * 
function Pet(type, legs) {
  this.type = type;
  this.legs = legs;

  this.logInfo = function () {
    console.log("this is ", this, this === myCat); // => false
    console.log(`The ${this.type} has ${this.legs} legs`);
  };
}

const myCat = new Pet("Cat", 4);
console.log("myCat", myCat);
// const thisValue = myCat.logInfo();
// console.log("thisValue is ", thisValue);
// logs "The undefined has undefined legs"
// or throws a TypeError in strict mode
setTimeout(myCat.logInfo.bind(Pet), 1000);
 *
 *
 * 
**************/

/*********
 * 
 * 
 function Pet(type, legs) {
  this.type = type;
  this.legs = legs;

  this.logInfo = () => {
    console.log(this === myCat, this); // => true
    console.log(`The ${this.type} has ${this.legs} legs`);
  };
}

const myCat = new Pet("Cat", 4);
// logs "The Cat has 4 legs"
setTimeout(myCat.logInfo, 1000);
*
*
*
*****************/

/**********
 * 
 *
 *
const rabbit = { name: "White Rabbit" };

function concatName(string) {
  console.log(this === rabbit); // {name: 'White Rabbit'}
  return string + this.name;
}

// Indirect invocations
concatName.call(rabbit, "Hello "); // Hello White Rabbit
concatName.apply(rabbit, ["Bye "]); // Bye White Rabbit
*
*
*
*********************/

function Runner(name) {
  console.log(this instanceof Rabbit); // => true
  this.name = name;
}

function Rabbit(name, countLegs) {
  console.log(this instanceof Rabbit); // => true
  // Indirect invocation. Call parent constructor.
  Runner.call(this, name);
  this.countLegs = countLegs;
}

const myRabbit = new Rabbit("White Rabbit", 4);
myRabbit; // {name: 'White Rabbit', countLegs: 4}

// Runner.call(this, name) inside Rabbit makes an indirect call of the parent function to initialize the object.



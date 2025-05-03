function getFullName(country, stay) {
  return `${this.firstName}  ${this.lastName} is from ${country}, living in ${stay} 🧒`;
}

const person = {
  firstName: "Anjali",
  lastName: "Chauhan",
};

const person2 = {
  firstName: "Ankush",
  lastName: "Chauhan",
};

Function.prototype.myCall = function (context = {}, ...args) {
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

console.log(getFullName.myCall(person, "India", "Bangalore"));

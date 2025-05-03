function getFullName(city, country) {
  return `Hello! ${this.firstName} ${this.lastName} from ${city}, ${country} !`;
}

const person = {
  firstName: "Anjali",
  lastName: "Chauhan",
};

Function.prototype.myApply = function (context = {}, args = []) {
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

const result = getFullName.myApply(person, ["Pune", "India"]);
console.log(result);

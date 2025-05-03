const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function (country, state) {
    console.log(
      this.firstName + " " + this.lastName + " " + country + " " + state
    );
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member);

Function.prototype.myBind = function (context, ...args) {
  let fn = this;
  return function (...newArgs) {
    fn.apply(context, [...args, ...newArgs]);
  };
};

const result = person.fullName.myBind(member, "India", "Vasai");
result();

const arr = [10, 20, 30, 40, 50];
Array.prototype.myFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      return this[i];
    }
  }
  return "undefined";
};

const result = arr.myFind((num, i) => num > 15);
console.log(result);

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const isCherries = inventory.find((fruit, i) => fruit.name === "cherries");
console.log(isCherries);

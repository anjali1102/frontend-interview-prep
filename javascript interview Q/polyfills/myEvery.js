const array1 = [1, 30, 39, 29, 10, 4];

Array.prototype.myEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i])) {
      return false;
    }
  }
  return true;
};

const result = array1.myEvery((element, index) => element < 40);
console.log(result);

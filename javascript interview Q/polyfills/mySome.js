const array = [1, 2, 3, 4, 5];

Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      return true;
    }
  }
  return false;
};

array.mySome((element, i) => element > 3);

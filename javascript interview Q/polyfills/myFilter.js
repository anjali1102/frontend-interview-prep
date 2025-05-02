const arr = [10, 20, 30, 40, 50, 60, 70];

Array.prototype.myFilter = function (cb) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      newArray.push(this[i]);
    }
  }
  console.log(newArray);
  return newArray;
};
arr.myFilter((num) => num > 50);

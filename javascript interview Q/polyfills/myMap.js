const arr = [1, 2, 3, 4, 5, 6];

Array.prototype.myMap = function (cb) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i]));
  }
  console.log(newArray);

  return newArray;
};

arr.myMap((num, index) => num * 2);
console.log(arr);

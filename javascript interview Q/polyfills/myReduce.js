const array1 = [10, 20, 30, 40];

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }
  return accumulator;
};

const result = array1.myReduce((acc, currentValue) => acc + currentValue, 0);
console.log(result);

// array1.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);

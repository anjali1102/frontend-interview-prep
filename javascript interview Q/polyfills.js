// <!-------------------------MAP POLYFILL----------------------------/>

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.anjaliMap = function (cb) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    // console.log("🌼", this);
    newArray.push(cb(this[i], i, this));
  }
  return newArray;
};

const mapPolyfill = num.anjaliMap((cb) => cb * 10);
// console.log("mapPolyfill", mapPolyfill);

// <!----------------------FILTER POLYFILL----------------------------/>

Array.prototype.anjaliFilter = function (cb) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (i > 5) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const filterPolyfill = num.anjaliFilter((itr) => itr > 5);
// console.log("filterPolyfill", filterPolyfill);

// <!----------------------REDUCE POLYFILL----------------------------/>

Array.prototype.myReduce = function (cb, initialValue) {
  var acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i]) : this[i];
  }
  return acc;
};

// num.myReduce(function () {
//   return acc + curr;
// }, 0);
const reducePolyfill = num.myReduce((acc, curr) => acc + curr, 0);
console.log("reducePolyfill", reducePolyfill);

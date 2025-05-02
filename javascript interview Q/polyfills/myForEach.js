const arr = [2, 3, 4, 5];

// arr.forEach((num, index) => console.log(num * 10));

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    console.log(cb(this[i]));
  }
};

arr.myForEach((num) => num * 10);

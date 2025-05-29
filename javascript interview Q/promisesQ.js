/**
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((response) => {
  console.log(response);
});

console.log("end");
**/

// start 1 end 2

// ****************    Question 2    *******************

/**
console.log("start");

const promise2 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise2.then((response) => {
  console.log(response);
});

console.log("end");
**/

//start 1 3 end 2

// ****************    Question 3    *******************

/**
console.log("start");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

console.log("middle");
fn().then((response) => console.log(response));

console.log("end");

**/
//start middle 1 end success (because fn() is called later than console)

// ****************    Question 4    *******************

/**
function job() {
  return new Promise((resolve, reject) => {
    reject();
  });
}

let promise = job();

promise
  .then(function () {
    console.log("success 1");
  })
  .then(function () {
    console.log("success 2");
  })
  .then(function () {
    console.log("success 3");
  })
  .catch(function () {
    console.log("Error 1");
    return; // throw Error or Promise.reject() to stop further chaining
  })
  .then(function (res) {
    console.log("success 4", res);
  });

**/
//Error 1 success 4

// ****************   QUESTION 5    **************

/**
function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve();
    } else {
      reject();
    }
  });
}

let promise = job(false);

promise
  .then(function () {
    console.log("success 1");
  })
  .then(function () {
    console.log("success 2");
  })
  .then(function () {
    console.log("success 3");
  })
  .catch(function () {
    console.log("Error 1");
    Promise.reject();
  })
  .then(function () {
    console.log("success 4");
  });

**/

// ****************   QUESTION 6    **************

function job6(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise6 = job6(true); // resolve("success") promise

promise6
  .then(function (data) {
    console.log(data); //success

    return job6(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat"; //throwing error with Defeat name
    }

    return job6(true); //not reachable
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error); // Defeat
    return job6(false); // resolved promise as return, not throw or Promise.reject()
  })
  .then(function (data) {
    console.log(data); //error
    return job6(false);
  })
  .catch(function (error) {
    console.log(error);
    return "Error caught";
  })
  .then(function (data) {
    console.log(data); //error
    return new Error("test"); //resolved promise
  })
  .then(function (data) {
    console.log("success: ", data.message); // success: test
  })
  .catch(function (data) {
    console.log("reaching444", data);
    console.log("Error", data.message);
  });

//success Defeat error Error caught success:  test

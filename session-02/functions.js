// Named functions
function average(a, b, c) {
  return (a + b + c) / 3;
}

// let result = average(1, 5, 23);
// console.log(result);

console.log("calling average function: ", average(15, 20, 23));

// anonymous / unnamed functions
const add2 = function (a, b) {
  return a + b;
};

console.log("call add2: ", add2(4, 6));
console.log("print add2: ", add2);

// Arrow functions (ES6)
const add3 = (a, b) => {
  // a lot of logic
  return a + b;
};

// implicit return with single expression functions
// (no curly braces {}, and no return statement)
const add4 = (a, b) => a + b; // lambda-like

console.log("call add4: ", add4(3, 4));
console.log("print add4: ", add4);

// single parameter arrow function
// parentheses are optional
// const increaseBy3 = num => num + 3;

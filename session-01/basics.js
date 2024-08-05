/***** Comments *****/
// this is a single line comment

/*
this
is a multi line
comment
*/

/***** Printing output *****/
// for debug/info purposes
console.log("Hello CTP class");

// semicolons are optional, I recommend using them
// console.log("Hello CTP class")

/***** Variables *****/
// declaring variables
let age = 30;
console.log("value of age", age);

// mutable (it can change)
age += 5;
console.log("value of age", age);

age = "twenty";
console.log("value of age", age);

// constants (immutable)
const lastName = "Lopez";
console.log(lastName);

// 🚫 Can't update a constant variable
// lastName = "Molina";

// We can use unicode characters (careful when copying/pasting code)
age = "😢";
console.log(age);

// convention: use camelCase for our variable names and function names
let firstName = "Edgar";
let dateOfBirth = "1-1-1000";
// let first_name = "John"; // snake case

// avoid single letter vars, abbreviations, and 'temp'
let fn = "john";
let dob = "2-2";

// Older ES5 syntax (avoid)
// var declarations are hoisted to the top
luckyNumber = 12;
var luckyNumber = 7;
console.log(luckyNumber);

secondLuckyNumber = 7;
console.log(secondLuckyNumber);

/***** Data Types *****/
// Booleans
console.log(true);
console.log(false);

// Numbers (aka integers and floats)
console.log(11 + 31);
console.log(45.999);

// Strings
console.log("I <3 CTP");
console.log("Learning" + " - " + "JavaScript");

// null
console.log(null);

// undefined
let lonely;
console.log(lonely);

// mixing up data types (coercion)
console.log(3 + "4");
console.log(3 - "4");
console.log(3 + parseInt("4")); // parseInt converts to number

/**** Objects *****/
// Arrays
let array = ["array", "with", 4, "things", [2, 3]];
console.log(array);
console.log(array.length);
array.push(3.14);
console.log("length", array.length);
console.log("pushing", array.push(3.14));
console.log("printing", array);

// strings
let anotherName = "Sofia";
console.log(anotherName.length);
console.log(anotherName.toUpperCase());

// splitting strings
let stringData = "id123 Sandy Smith 42 NYC";
let dataParts = stringData.split(" ");
console.log(dataParts);

// objects, dictionary-like, map-like, key-value store
let obj = {
  "first-name": "Sofia",
  age: 31,
};

// set properties/keys
obj["school"] = "Baruch";
obj.school = "York";

console.log(obj);

// get the object properties
console.log(obj["first-name"], obj.age);

/***** Functions *****/
function add2(num) {
  return num + 2;
}

let result = add2(5);
console.log(result);

/***** Conditionals *****/
// equality:
// 🚫 avoid loose equality (==) [applies coercion]
// ✅ use strict equality (===)
console.log(34 == 34);
console.log(34 == "34");

console.log(34 === 34);
console.log(34 === "34");
console.log("ed" === "ED");

// Not equals
console.log(34 !== 45);

// Logical operators: !, ||, &&
// Comparison operators: <, >, <=, >=, ===, !==

// Can do if-else-if and nesting as you expect
// if (conditional) {
//   if (conditional) {
//   } else {
//   }
// } else if (conditional) {
// } else {
// }

/***** Looping *****/
// For loops
let schoolName = "Baruch";
for (let i = 0; i < schoolName.length; i++) {
  console.log(schoolName[i]);
}

// while loop
let j = 0;
while (j < schoolName.length) {
  console.log(schoolName[j]);
  j++;
}

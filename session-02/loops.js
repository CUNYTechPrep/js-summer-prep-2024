// looping through arrays

const fruits = ["apple", "banana", "coconut", "durian"];

// While loop
// let i = 0;
// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }

// for loop
// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// for-of loop (trade off, don't get the index)
for (const fruit of fruits) {
  console.log(fruit);
}

// 🚫 avoid for-in loops
// for (const item in fruits) {
//   console.log(item);
// }

// .forEach
// function myPrint(item) {
//   console.log("Delicious: ", item);
// }
// fruits.forEach(myPrint);

let result = fruits.forEach((val) => {
  console.log("Yucky:", val);
});

console.log(result);

// callback function

// .map() // transform/convert/change

let pluralFruits = fruits.map((f) => f + "s");

console.log(pluralFruits);
console.log(fruits);

// .filter
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const filteredResult = words.filter((word) => word.length > 7);

console.log(filteredResult);
console.log(words);

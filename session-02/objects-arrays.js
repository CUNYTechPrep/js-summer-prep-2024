const student243 = {
  firstName: "Edwin",
  lastName: "Cruz",
  age: 29,
  gpa: 4.0,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  bday() {
    console.log("Happy Birthday!");
    this.age++;
  },
};

console.log(student243);
student243.bday();
console.log(student243);
console.log(student243.fullName());

// reassignment (not allowed with constant variables)
// student243 = { firstName: "Sally", age: 42 };

// referencing properties
student243.age;
student243["firstName"];

// adding properties
student243.major = "Science";
student243["minor"] = "Math";

console.log(student243);

// removing properties
delete student243.major;
console.log(student243);

// does the property exist
if (student243.major) {
  console.log("Major:", student243.major);
} else {
  console.log("Major not found");
}

// get all property names
let allPropertyNames = Object.keys(student243);
console.log(allPropertyNames);

// Arrays
const fruits = ["apple", "pear", "cherry", "plum"];
const things = ["a", 42, null, { name: "Juan" }];

// length
console.log(fruits.length, things.length);

// indexing
console.log(fruits[1]);
console.log(fruits[12]);

// properties
console.log(Object.keys(things)); // don't do this

// adding / push
fruits.push("Durian");
console.log(fruits);

// pop / shift
console.log(fruits.pop(), fruits.shift());
console.log(fruits.length);

// Short-circuiting of logical operators
// These return the actual values of the expressions on either side of the operator
//    ||, returns left if true, otherwise right
//    &&, if left true then returns right, otherwise returns left

// || for default values
function welcomeMessage(userInputName) {
  // if (!userInputName) {
  //   userInputName = "New User";
  // }

  // the following line is the same as the above if-statement
  // Falsy values are: 0, false, null, undefined, ""
  const username = userInputName || "New User";
  console.log("Welcome", username);
}

welcomeMessage();
welcomeMessage("Julio");

// && guard, the right expression only runs if the left is true
let driverAge = 16; // try changing to 16 or greater
driverAge >= 16 && console.log("this person can drive");

// Ternary operator: ( ? : )
let result = luckyNumber === guess ? "right" : "wrong";

// let result = "";
// if (luckyNumber === guess) {
//   result = "right";
// } else {
//   result = "wrong";
// }

console.log("You guessed " + result);

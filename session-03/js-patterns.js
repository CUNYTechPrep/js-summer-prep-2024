// Short-circuiting of logical operators
// These return the actual values of the expressions on either side of the operator
//    || returns left if true, otherwise right
//    && if left true then returns right, otherwise returns left

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

welcomeMessage();            // Output: "Welcome New User"
welcomeMessage("Julio");     // Output: "Welcome Julio"

// && guard, the right expression only runs if the left is true
let driverAge = 16;          // try changing this value to see different outputs
driverAge >= 16 && console.log("this person can drive"); // Output: "this person can drive" if driverAge >= 16

// Ternary operator: ( ? : )
let luckyNumber = 7;         // Define luckyNumber
let guess = 7;               // Define guess
let result = luckyNumber === guess ? "right" : "wrong";  // Output: "right" if luckyNumber equals guess

// let result = "";
// if (luckyNumber === guess) {
//   result = "right";
// } else {
//   result = "wrong";
// }

console.log("You guessed " + result);  // Output: "You guessed right"


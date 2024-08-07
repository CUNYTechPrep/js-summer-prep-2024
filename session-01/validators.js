/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  if (username.length < 3 || username.length > 10){ // Is the username 3-19 characters
      return false;
  }
  if (!/^[a-zA-Z]/.test(username)) { // Does the username start with a letter
      return false;
  }
  if (!/^[a-zA-Z0-9]+$/.test(username)) { // Does the username contain exclusively letters and numbers and no special characters
      return false;
  }
  return true;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  if (password.length < 10 || password.length > 64) {
      return false;
  }

  // Checks if the password has at least 1 letter, at least 1 number and at least 1 special character
  if (!/(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])/.test(password)) { 
      return false;
  }
  return true;
}

/* Tests
console.log(validUsername("John123")); // true
console.log(validUsername("Jo")); // false (too short)
console.log(validUsername("John_Doe")); // false (contains special character)
console.log(validUsername("123John")); // false (does not start with a letter)
console.log(validUsername("JohnDoe123")); // true

console.log(validPassword("Password123!")); // true
console.log(validPassword("Pass123")); // false (too short)
console.log(validPassword("PasswordWithoutSpecialChar123")); // false (no special character)
console.log(validPassword("1234567890!")); // false (no letter)
*/
module.exports = { validUsername, validPassword };
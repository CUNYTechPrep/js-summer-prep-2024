/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  // Check length
  if (username.length < 3 || username.length > 10) {
    return false;
  }

  // Check if it begins with a letter
  if (!/^[a-zA-Z]/.test(username)) {
    return false;
  }

  // Check if it only contains letters and numbers
  if (!/^[a-zA-Z0-9]+$/.test(username)) {
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
  // Check length
  if (password.length < 10 || password.length > 64) {
    return false;
  }

  // Check for at least 1 letter, 1 number, and 1 special character
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!hasLetter || !hasNumber || !hasSpecialChar) {
    return false;
  }

  return true;
}

module.exports = { validUsername, validPassword };

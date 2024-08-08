/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/

function validUsername(username) {
  let alphanumericCheck = /^\w+$/; // \w matches any word character (alphanumeric and underscore)

  // Regular expression to check if the first character is a letter
  let letterCheck = /^[a-zA-Z]/;

  // Check if the username length is between 3 and 10 characters inclusive
  if (username.length < 3 || username.length > 10) {
    return false;
  }

  // Check if the first character is a letter
  if (!letterCheck.test(username[0])) {
    return false;
  }

  // Check if the username contains only alphanumeric characters
  if (!alphanumericCheck.test(username)) {
    return false;
  }

  // If all checks pass, the username is valid
  return true;
}


/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character.
*/
function validPassword(password) {
  
  if(password.length < 10 || password.length > 64){
    return false;
  }

  let letterCheck = /[a-zA-Z]/;
  let numberCheck = /\d/;
  let specialCharacterCheck = /[!@#$%^&*(),.?":{}|<>]/;

  // Check if the password contains at least one letter, one number, and one special character
  if (!letterCheck.test(password) || !numberCheck.test(password) || !specialCharacterCheck.test(password)) {
    return false;
  }

  // If all checks pass, the password is valid
  return true;
}


module.exports = { validUsername, validPassword };




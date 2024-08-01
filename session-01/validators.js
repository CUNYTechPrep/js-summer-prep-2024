/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  if (username.length < 3 || username.length > 10){
    return false;
  }
  else if (username[0].match(/[a-z]/i) === null){
    return false;
  }
  else if (username.match(/[^a-zA-Z0-9]/) !== null){
    return false;
  }
  else {
    return true;
  }
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  if (password.length < 10 || password.length > 64){
    return false;
  }
  else if (password.match(/[a-zA-Z]/) === null){
    return false;
  }
  else if (password.match(/[0-9]/) === null){
    return false;
  }
  else if (password.match(/[^a-zA-Z0-9]/) === null){
    return false;
  }
  else {
    return true;
  }
}

module.exports = { validUsername, validPassword };

/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  if (username.length<3 || username.length>10){
    return false//not correct length
  }
  if (!(/[a-z]/i.test(username.charAt(0)))){
    return false//does not start with a letter
  }
  if(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(username)){
    return false//if it contains special characters
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
  if (password.length<10 || password.length>64){
    return false//not correct length
  }
  if (!(/[a-z]/i.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password))){
    return false//is missing at least one of the letter,number or special char
  }
  return true
}

module.exports = { validUsername, validPassword };

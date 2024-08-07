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
     return false;} // 3-10 chars in length

  if (!(username[0] >= "a" && username[0] <= "z") && !(username[0] >= "A" && username[0] <= "Z")){
    return false;} //must begin with letter

  for (let i = 1; i < username.length; i++) {
    let checker = username[i];
    if (checker >= "a" && checker <= "z") continue;
    if (checker >= "A" && checker <= "Z") continue;
    if (checker >= "0" && checker <= "9") continue;
    return false; // if it is a special character we return false here
  }
  // else return true
  return true;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {

  // letter, number, special char sets
  const containsLetter = /[a-zA-Z]/;
  const containsNumber = /[0-9]/;
  const containsSpecial = /[!@#$%^&*()?.,;{}|/\-=]/;

  //len checker
  if (password.length < 10 || password.length > 64) {
    return false;
  } 
  //checker if 1 of each condition
  else if (!containsLetter.test(password) || !containsNumber.test(password) || !containsSpecial.test(password)) {
    return false;
  }
  return true;
}
module.exports = { validUsername, validPassword };
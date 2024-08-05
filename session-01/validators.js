/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  if (!(username.length >= 3 && username.length <= 10)) {
    return false;
  }
  if (!isNaN(username[0])) {
    return false;
  }
  for (let i = 0; i < username.length; i++) {
    if (
      !(username[i] >= "a" && username[i] <= "z") &&
      !(username[i] >= "A" && username[i] <= "Z") &&
      !(username[i] >= "0" && username[i] <= "9")
    ) {
      return false;
    }
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
  if (!(password.length >= 10 && password.length <= 64)) {
    return false;
  }

  let letters = false;
  let nums = false;
  let specialChar = false;

  for (let i = 0; i < password.length; i++) {
    if ((password[i] >= "a" && password[i] <= "z") || 
    (password[i] >= "A" && password[i] <= "Z")) {
      letters = true;
    }else if((password[i] >= "0" && password[i] <= "9")) {
      nums = true;
    }else {
      specialChar = true;
    }
  }

  return letters && specialChar && nums;
  
}
console.log()
console.log(validPassword("Joeljdvgdsdf"));

module.exports = { validUsername, validPassword };

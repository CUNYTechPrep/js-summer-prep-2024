/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  let valid = false;
  if(username.length >= 3 && username.length <= 10){
    const startFormat = /[a-zA-Z]/;
    const firstChar = username.substring(0,1);
    if(firstChar.match(startFormat)){
      const specialFormat = /[!@#$%^&*()?.,;{}|/\-=]/;
      if(!username.match(specialFormat)){
        valid  = true;
      }
    }
  }
  return valid;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  let valid = false;
  const passwordLetterFormat = /[a-zA-Z]/;
  const passwordNumberFormat = /[0-9]/;
  const specialFormat = /[!@#$%^&*()?.,;{}|/\-=]/;
  let passCount = false;
  if(password.match(passwordLetterFormat) && 
    password.match(specialFormat) && 
    password.match(passwordNumberFormat)){
      passCount = true;
  }

  if(password.length >= 10 && password.length <= 64){
    if(passCount){
      valid = true;
    }
  }
  return valid;
}

module.exports = { validUsername, validPassword };

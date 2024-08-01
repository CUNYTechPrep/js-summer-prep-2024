/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  let SpecialChars = /[!@#$%^&*.?]/; 
  if(username.length>2 && username.length <11){
    if(username.charAt(0).toUpperCase() != username.charAt(0).toLowerCase()){
      if(username.search(SpecialChars)== -1){
        return true;
      }
    }
  }
  return false;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  let SpecialChars = /[!@#$%^&*.?]/; 
  let UpperLetter = /[a-z]/;
  let LowerLetter = /[A-Z]/;
  let Num = /[0-9]/;
  if(password.length>9&&password.length<65){
    if(password.search(SpecialChars)!=-1){
      if(password.search(UpperLetter)!=-1 || password.search(LowerLetter)!=-1){
        if(password.search(Num)!=-1){
          return true;
        }
      }
    }
  }
  return false;
}

module.exports = { validUsername, validPassword };

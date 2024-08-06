/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  if((username.length < 3 ||username.length > 10)){
    return false;
  }
  if (!((username.charCodeAt(0) > 64 && username.charCodeAt(0) < 91) || (username.charCodeAt(0) > 96 && username.charCodeAt(0) < 123))){
    return false;
  }
  for (let i = 0; i < username.length; i++) {
    const charCode = username.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || 
          (charCode >= 97 && charCode <= 122) || 
          (charCode >= 48 && charCode <= 57))) {
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
  if((password.length < 10 ||password.length > 64)){
    return false;
  }
  let hasLetter = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  for(let i = 0; i < password.length; i++){
    const charCode2 = password.charCodeAt(i);
    if (((charCode2 >= 65 && charCode2 <= 90) || 
          (charCode2 >= 97 && charCode2 <= 122))) {
      hasLetter= true;
  }else if ((charCode2 >= 48 && charCode2 <= 57)){
    hasNumber = true;
  }else{
    hasSpecialChar= true;
  }
if(hasLetter&&hasNumber&&hasSpecialChar){
  return true;
}
  }
return false;
}


module.exports = { validUsername, validPassword };

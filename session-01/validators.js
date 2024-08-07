/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  // tests if the username is greater than 10 characters or less than 3, if so immediatly return false
  if(username.length >10 || username.length <3){return false;}
  //tests if the first character in the username is a letter using ascii code
  if(
    //ascii 65 to 90 are capital letters and 97 to 122 are lowercase letters
    // if it is not a letter it will return false
    ((username.charCodeAt(0) >= 65 && username.charCodeAt(0) < 90) ||
    (username.charCodeAt(0) >= 97 && username.charCodeAt(0) <= 122))
    )
  {
    // this for loop check if all characters in the username are letters or numbers. if it
    //finds any special characters it will return false
    for(i =0, len =username.length;i<len;i++)
      {
      //ascii 47 - 58 are numbers 0-9
      if(!(username.charCodeAt(i) > 47 && username.charCodeAt(i) < 58)&&
          //ascii 65 to 90 are capital letters and 97 to 122 are lowercase letters
          !(username.charCodeAt(i) > 64 && username.charCodeAt(i) < 91)&&
          !(username.charCodeAt(i) > 96 && username.charCodeAt(i) < 123))
      {
        return false;
      }

    }
    return true;
  }
  else
  {
    return false;
  }

}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  //intialize variable for containing a num, letter, and a special character
  containsNum = false;
  containsletter = false;
  containsSpecialChar = false;
  //test if password length is within the allowed bounds
  if (password.length <10 || password.length>64){
    return false;
  }
  //if the password is within the allowed size, then we test if the password has a letter, num and
  //special character
  for(i = 0; i<password.length;i++){
    if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <=57){
      containsNum = true;
    }

    if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <=90 ||
    password.charCodeAt(i) >= 97 && password.charCodeAt(i) <=122 ){
      containsletter = true;
    }

    if(password.charCodeAt(i) >= 32 && password.charCodeAt(i) <=47 ||
    password.charCodeAt(i) >= 58 && password.charCodeAt(i) <= 64 || 
    password.charCodeAt(i) >= 91 && password.charCodeAt(i) <=96 ||
    password.charCodeAt(i) >= 123 && password.charCodeAt(i) <=126 ){
      containsSpecialChar = true;
    }
    //if it finds all three then it will return true
    if( containsNum && containsSpecialChar && containsletter){
      return true;
    }
  }

  if( containsNum && containsSpecialChar && containsletter){
    return true;
  }else{
    return false;
  }
}

module.exports = { validUsername, validPassword };

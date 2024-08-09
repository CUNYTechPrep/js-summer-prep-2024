/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
 //checks length
  if( username.length<3 || username.length>10  )
    return false;
  // checks for special charcters,\w is used for letters and digit,
  // having the ^ is negation and is checking the string for everything besides a letter/digit
  //so if the string does contain something otherthan letter/digit, function will return false
  if( /[^\w]/.test(username)) return false;

  //checking first chracter is a letter 
  //the ^ is outside thr [], which chekcs if the first index in the string is a letter or not, 
  if(!/^[a-zA-z]/.test(username)) return false;
  
  
  return true;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  //checks length
  if( password.length<=9 || password.length>=65 ) return false;
  
  if (!/[a-zA-Z]/.test(password)) {
    return false;
  }

  // Check if the password contains at least one number
  if (!/[0-9]/.test(password)) {
    return false;
  }

    //if(!/\w/.test(password)) return false;
    
  // Check if the password contains at least one special character
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return false;
  }
  
  return true;
}

module.exports = { validUsername, validPassword };

/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {

  let unicodeNum = username.charCodeAt(0);

    // checks if first character is unicode point value for upper or lower case character
    if ((unicodeNum >= 65 && unicodeNum <= 90) || (unicodeNum >= 97 && unicodeNum <= 122)){
        
        //checks un length
         if (username.length >= 3 && username.length <= 10){

            //loops to find special character in whole string based on code point values
            for(i = 1; i < username.length; i++){

                if ( !((username.charCodeAt(i) >= 65 && username.charCodeAt(i) <= 90) || (username.charCodeAt(i) >= 97 && username.charCodeAt(i) <= 122) || (username.charCodeAt(i) >= 48 && username.charCodeAt(i) <= 57))) {
                    return false;
                }

            }
            return true;
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
  
  //checks password length
  if (password.length < 10 || password.length > 64) {return false;}

  let containsLetter, containsNumber, containsSpecial = false;
  
  //checks to see if string contains conditions, characters checked based on unicode point values
  for(i = 0; i <= password.length; i++){

      if((password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)){
          containsLetter = true;
      }
      if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
          containsNumber = true;
      }
      if((password.charCodeAt(i) >= 32 && password.charCodeAt(i) <= 47)||(password.charCodeAt(i) >= 58 && password.charCodeAt(i) <= 64) 
          || (password.charCodeAt(i) >= 91 && password.charCodeAt(i) <= 96) || (password.charCodeAt(i) >= 123 && password.charCodeAt(i) <= 126)){
            
            containsSpecial = true;
          }

  }
  if (containsLetter && containsNumber && containsSpecial ){
    return true
  }
  return false;

}

module.exports = { validUsername, validPassword };

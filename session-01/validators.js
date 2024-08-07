/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {

  let goodUsername = false;

  // username must be between (and including) 3-10 characters in length
  if(username.length >= 3 && username.length <= 10) {

    // username must begin with a letter 
    /*
      /^[a-zA-Z]/ is the regex that test if a expression's first character is a letter
    */ 
    if(/^[a-zA-Z]/.test(username)) {

      // username may contain numbers and letters
      /*
        /^[A-Za-z0-9]*$/ is the regex that test if a expression contains both number and letter
      */
      if (/^[A-Za-z0-9]*$/.test(username)) {

        // username cannot contain special characters
        /*
          /[^a-zA-Z0-9]/ is the regex that test if a expression contains special character
        */
        if (!(/[^a-zA-Z0-9]/.test(username))) {
          goodUsername = true; 
        }
      }
    }
  }
  return goodUsername;
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  let goodPassword = false;

    // password must contain at least 1 letter, 1 number, and 1 special character
    /*
      - [A-Za-z\d] Ensures that the first character is an alphabet or digit.
      - [A-Za-z\d!@#$%^&*()_+]{7,19} will match minimum 7 maximum 19 character. This is required as he presceding character class 
          would consume a single character making the total number of characters in the string as minimum 8 and maximum 20.
      - $ Anchors the regex at the end of the string. Ensures that there is nothing following our valid password
      - / at the beginning and end of regex tells the beginning and end of your regex expression
    */

    if (/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{9,63}$/.test(password)) {
      goodPassword = true;  
    }

  return goodPassword;
}

module.exports = { validUsername, validPassword };

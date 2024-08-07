/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {

  //username must be between (and including) 3-10 characters in length
  if(username.length < 3 || username.length > 10){
    return false;
  }

    //username must begin with a letter
    if (!((username[0] >= 'a' && username[0] <= 'z') || (username[0] >= 'A' && username[0] <= 'Z'))) {
      return false;
    }

    //username may contain numbers and letters + cannot contain special characters
    for (let i = 1; i < username.length; i++) {
      let char = username[i];
      if (!((char >= 'a' && char <= 'z') || 
            (char >= 'A' && char <= 'Z') || 
            (char >= '0' && char <= '9'))) {
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

   //password must be between (and including) 10-64 characters in length
  if(password.length < 10 || password.length > 64) {
    return false;
  }


    // Counters for each type of character
    let letterCount = 0;
    let numberCount = 0;
    let specialCount = 0;

    // Loop through each character in the password
    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        // Check if the character is a letter
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            letterCount++;
        }
        // Check if the character is a number
        else if (char >= '0' && char <= '9') {
            numberCount++;
        }
        // If it's not a letter or number, it's considered a special character
        else {
            specialCount++;
        }

        // If all conditions are met
        if (letterCount > 0 && numberCount > 0 && specialCount > 0) {
            return true;
        }
    }

    return false;


}

module.exports = { validUsername, validPassword };


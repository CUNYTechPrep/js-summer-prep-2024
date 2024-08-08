/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username){
    
  // Capturing name length
  let nameLength = username.length;

  // Checking to see if the name is correct in length.
  if (nameLength < 3 || nameLength > 10) {
      return false;
  }

  // Checking to see if it begins with a letter, as well as number declaration
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const specialCharacters = "!@#$%^&*(),./?[];:`~|";

  // comparison between to see if it is a leter
  for (let i = 0; i < username.length; i++){
    const char = username.charAt(i);
  
  // Check if the first character is a letter
    if (i === 0 && !alphabet.includes(char)) {
      return false;
    }

    // Checking to see if the name has numbers are no special characters
    if (!numbers.includes(char) && specialCharacters.includes(char)){
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
function validPassword(password){
    
  let passwordLength = password.length;

  // Checking to see if the password is long enough
  if (passwordLength < 10 || passwordLength > 64){
      return false;
  }
  
  // creating const variables
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const specialCharacters = "!@#$%^&*(),./?[];:`~|";

  // should return true for passwords w/ 1 letter, 1 number, and 1 special character 
  // these are a true of false trip bascially
  let Check1 = false;
  let Check2 = false;
  let Check3 = false;

  for (let i = 0; i < password.length; i++){
    const char = password.charAt(i);
  
    if (alphabet.includes(char)) {
      Check1 = true;
    }

    if (numbers.includes(char)){
      Check2 = true;
    }

    if (specialCharacters.includes(char)){
      Check3 = true;
    }
  }


  // if all 3 checks are positive, then the password is accepted
  if (!Check1 || !Check2 || !Check3){
    return false;
  }
  return true;
}

module.exports = { validUsername, validPassword };

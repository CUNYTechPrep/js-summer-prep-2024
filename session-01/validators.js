/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  let validLength = username.length >= 3 && username.length <= 10;
  let beginsWithLetter = (username[0] >= 'A' && username[0] <= 'Z') ||
                         (username[0] >= 'a' && username[0] <= 'z');
  // if username only contains alphanumeric characters
  let doesNotContainSpecial = (username) => {
    for (let i = 0; i < username.length; ++i)
    {
      if (!(username[i] >= 'A' && username[i] <= 'Z') &&
          !(username[i] >= 'a' && username[i] <= 'z') &&
          !(username[i] >= '0' && username[i] <= '9'))
      {
        return false;
      }
    }
    return true;
  };
  return validLength && beginsWithLetter && doesNotContainSpecial(username);
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  let validLength = password.length >= 10 && password.length <= 64;
  let containsLetterNumberSpecial = (password) => {
    let containsLetter = false;
    let containsNumber = false;
    let containsSpecial = false;
    
    let i = 0;
    while (!(containsLetter && containsLetter && containsSpecial) && i < password.length)
    {
      if ((password[i] >= 'A' && password[i] <= 'Z') ||
          (password[i] >= 'a' && password[i] <= 'z'))
      {
        containsLetter = true;
      }
      else if (password[i] >= '0' && password[i] <= '9')
      {
        containsNumber = true;
      }
      else
      {
        containsSpecial = true;
      }
      ++i;
    }
    return containsLetter && containsNumber && containsSpecial;
  };
  return validLength && containsLetterNumberSpecial(password);
}

module.exports = { validUsername, validPassword };

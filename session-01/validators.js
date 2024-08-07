/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function validUsername(username) {
  let len = username.length;

  // Check for valid length
  if (!(len >= 3 && len <= 10)) return false;

  // Check for valid first letter
  if (!(username[0] >= "A" && username[0] <= "z")) return false;

  // Check for valid characters (alphanumeric)
  for (let i = 1; i < len; i++) {
    if (!((username[i] >= "0" && username[i] <= "9")
        || (username[i] >= "A" && username[i] <= "z")))
      return false;
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
  let len = password.length;

  // Check for valid length
  if (!(len >= 10 && len <=64)) return false;

  // Check for valid constraints
  let hasLetter = false, hasNumber = false, hasSpecialChar = false;

  for (let i = 0; i < len; i++) {
    if (password[i] >= "A" && password[i] <= "z") hasLetter = true;
    else if (password[i] >= "0" && password[i] <= "9") hasNumber = true;
    else hasSpecialChar = true;
  }
  
  return (hasLetter === true && hasNumber === true && hasSpecialChar === true);
}

module.exports = { validUsername, validPassword };

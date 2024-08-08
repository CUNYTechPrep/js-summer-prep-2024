function validUsername(username) {
  // Check length
  if (username.length < 3 || username.length > 10) {
    return false;
  }
  
  // Check if it begins with a letter
  if (!/[a-zA-Z]/.test(username[0])) {
    return false;
  }
  
  // Check if it contains only letters and numbers
  for (let char of username) {
    if (!/[a-zA-Z0-9]/.test(char)) {
      return false;
    }
  }
  
  return true;
}

function validPassword(password) {
  // Check length
  if (password.length < 10 || password.length > 64) {
    return false;
  }
  
  let hasLetter = false;
  let hasNumber = false;
  let hasSpecial = false;
  const specialChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

  for (let char of password) {
    if (/[a-zA-Z]/.test(char)) hasLetter = true;
    else if (/\d/.test(char)) hasNumber = true;
    else if (specialChars.includes(char)) hasSpecial = true;
  }

  return hasLetter && hasNumber && hasSpecial;
}

module.exports = { validUsername, validPassword };

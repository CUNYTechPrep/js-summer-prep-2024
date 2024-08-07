function validUsername(username) {
  // Check length
  if (username.length < 3 || username.length > 10) {
    return false;
  }

  // Check first character is a letter
  if (!/[a-zA-Z]/.test(username[0])) {
    return false;
  }

  // Check for only letters and numbers
  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    return false;
  }

  return true;
}


function validPassword(password) {
  // Check length
  if (password.length < 10 || password.length > 64) {
    return false;
  }

  // Check for at least one letter, one number, and one special character
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?]/g.test(password);

  return hasLetter && hasNumber && hasSpecialChar;
}

module.exports = { validUsername, validPassword };



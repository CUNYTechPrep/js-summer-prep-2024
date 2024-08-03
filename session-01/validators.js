/*
  Write a function that returns true or false if the given username
  is valid according to the following rules:
  - username must be between (and including) 3-10 characters in length
  - username must begin with a letter
  - username may contain numbers and letters
  - username cannot contain special characters
*/
function isLetter(chr) {return chr.match(/[a-z]/i);}
function isNumber(chr) {return /^[0-9]$/.test(chr);}

function validUsername(username) 
{
  let hasSpecialCharacter = false;
  for (let j = 0; j < username.length; j++)
  {
    if (!isLetter(username[j]) && (!isNumber(username[j]))) 
    {
      hasSpecialCharacter = true;
      break;
    }
  }
  return !hasSpecialCharacter && (username.length >= 3) && (username.length <= 10) && isLetter(username.cahrAt(0));
}

/*
  Write a function that returns true or false if the given password
  is valid according to the following rules:
  - password must be between (and including) 10-64 characters in length
  - password must contain at least 1 letter, 1 number, and 1 special character
*/
function validPassword(password) {
  let countLetter = 0;
  let countNumber = 0;
  let countSpecial = 0;

  for (let j = 0; j < password.length; j++)
  {
    if (isLetter(password[j])) ++countLetter;
    else if (isNumber(password[j])) ++countNumber;
        else ++countSpecial;
  }



  return (countLetter > 0) && (countNumber > 0) && (countSpecial > 0) && (password.length >= 10) && (password.length <= 64);
}
console.log(validPassword("zeus123&me"));
console.log(validUsername("ljupcho123*"));

module.exports = { validUsername, validPassword };

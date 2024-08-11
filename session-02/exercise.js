/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  // instalization of an empty array
  const uppercaseStrings = [];

  // iterate through the inital array, and convert every element to uppercase
  for (const index in listOfStrings){
    uppercaseStrings.push(listOfStrings[index].toUpperCase());
  }
  
  // return the converted array
  return uppercaseStrings;
}

/*
  Write a function that returns the sum of all student ages.
  The function will be passed an array of objects and the result
  will be the sum of all ages.
  - Note, not all objects will contain an age. Omit these objects.
  For example, for the input:
    [{ name: 'Sandra', age: 31 }, {}, { name: 'Didi', age: 20}]
    the function should return 51
*/
function sumOfAllAges(listOfStudentObjects) {
  //Initalize the empty age variable
  let totalAge = 0;

  //for every entry, add that age to the total age;
  for (const index in listOfStudentObjects){
    const student = listOfStudentObjects[index];
    totalAge += student.age; 
  }

  //Return the total age
  return totalAge;
}

module.exports = { transformArrayToUpper, sumOfAllAges };

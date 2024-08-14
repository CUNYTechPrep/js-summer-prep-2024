/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
 
  return listOfStrings.map(string => string.toUpperCase());
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
 return listOfStudentObjects
    .filter(student => student.age && typeof student.age === 'number')
    .reduce((accumulator, student) => accumulator + student.age, 0);
}

module.exports = { transformArrayToUpper, sumOfAllAges };

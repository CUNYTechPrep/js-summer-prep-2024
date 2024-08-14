/**
 * Transform the input array of strings into uppercase strings.
 * @param {string[]} listOfStrings - An array of strings to transform.
 * @returns {string[]} An array of strings in uppercase.
 */
function transformArrayToUpper(listOfStrings) {
  return listOfStrings.map(string => string.toUpperCase());
}

/**
 * Write a function that returns the sum of all student ages.
 * The function will be passed an array of objects, and the result
 * will be the sum of all ages.
 * Note, not all objects will contain an age. Omit these objects.
 * @param {Object[]} listOfStudentObjects - Array of student objects.
 * @returns {number} The sum of ages of students with an 'age' property.
 */
function sumOfAllAges(listOfStudentObjects) {
  return listOfStudentObjects
    .filter(student => student.age !== undefined) // Filter objects that have an age property
    .reduce((sum, student) => sum + student.age, 0); // Sum up the ages
}

module.exports = { transformArrayToUpper, sumOfAllAges };


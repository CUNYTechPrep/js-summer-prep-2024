// Transform the input array of strings into uppercase strings

function transformArrayToUpper(listOfStrings) {
  // Use the map function to transform each string in the array to uppercase
  return listOfStrings.map((str) => str.toUpperCase());
}

// Write a function that returns the sum of all student ages
function sumOfAllAges(listOfStudentObjects) {
  // Use the reduce function to sum up the ages, only adding if the age exists
  return listOfStudentObjects.reduce((sum, student) => {
    if (student.age !== undefined) {
      return sum + student.age;
    }
    return sum;
  }, 0); // Start with a sum of 0
}

module.exports = { transformArrayToUpper, sumOfAllAges };

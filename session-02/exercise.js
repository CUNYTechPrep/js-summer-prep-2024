/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  
  
  return upperCaseListOfStrings = listOfStrings.map((f) => f.toUpperCase());
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
   let sum = 0;
 // uses the typeof to determine if the property exits and is a primitive type number 
   // for (let i = 0; i < listOfStudentObjects.length; i++) {
  //     if (typeof listOfStudentObjects[i].age === "number") {
  //         sum += listOfStudentObjects[i].age;
  //     } else {
  //         console.log("No  age  for index " + i);
  //     }
  // };
  
  // uses the "in" opertor checking if the property is in the object if('propertyName' in ObjectName)
  for (let i = 0; i < listOfStudentObjects.length; i++) {
      // Check if the 'age' property exists and is a valid number
      if ('age' in listOfStudentObjects[i] ) {
          sum += listOfStudentObjects[i].age;
      } else {
          console.log("No  age  for index " + i);
      }
  }


  return sum;
}


module.exports = { transformArrayToUpper, sumOfAllAges };

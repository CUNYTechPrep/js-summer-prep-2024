/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {

  /*
    - map() method: 使用 map() method 来创建一个 array by applying a function to each element of the array.
    - word.toUpperCase(): 使用 .toUpperCase() 来转换到大写
    - Arrow function: The arrow function word => word.toUpperCase() takes each string in the strings array and returns its .toUpperCase version.

  */
  const upperCase = listOfStrings.map(word => word.toUpperCase());
  return upperCase;
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
  // initializing ageTotal to keep track and add all ages
  let ageTotal = 0;

  //用 .forEach 来循环所有 element of object Array 里面的 age
  listOfStudentObjects.forEach(ageFromElement => {

    //用 if condition 来 omit 掉所有不符合的年龄 like empty age or 小于 0岁
    if (ageFromElement.age >= 0) {

      // 所有符合要求的年龄加到 ageTotal
      ageTotal += ageFromElement.age;
    }
    // else {
      // console.log("Age is invalid");
    // }
    });

  return ageTotal; 
}

module.exports = { transformArrayToUpper, sumOfAllAges };

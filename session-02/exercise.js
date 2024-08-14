/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {  
  // Create a new array to save the upper case values to
  // the most optimal way to solve the problem would be to modify each character as we "see" it in the word. This way preservesspace
  let arrayUpper =[];
  //used forEach to loop through all elements of listofStrings
  listOfStrings.forEach(myFunction);

  // Created a temp function that will go though each item in the list and convert each character of the word to upper case then
  // save it to a new array
  function myFunction(word){
    // This temp word variable will store the value of the new uppercase word. 
    // The optimal solution would not use a temp var, it would modify the existing items
    let tempWord="";
    // for each character in the word, we are going to test if it lowercase, if so we will use .toUpperCase() to change it
    for(i =0;i<word.length;i++){
      //Ascii 97 is a and ascii 122 is z
      //since we are only converting characters to uppercase we are only looking for lowecase words
      if(word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122 ){
        //My original method was to change the ascii value of a character and then replace the character in the current index with the 
        //new character. I couldn't figure out how to properly save the new word
      //  tempWord+=(String.fromCharCode((word.charCodeAt(i))-12));
      // instead I save all the uppercase variables to a new temp variable and I'll push the strings to the array of uppercase words
        tempWord+=(word.charAt(i).toUpperCase());
      }
    }
    //push uppercase tempWord to uppercase string array
    arrayUpper.push(tempWord);
  }  
  return arrayUpper;
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
  //create a temp variable to store the sum of the objects
  let sum =0;
  // run a for loop on all the student objects
  listOfStudentObjects.forEach(myFunction);
  // created a temp function to dertermine of the array item is a student
  // parameter struct item, 
  function myFunction(item){
    //if we get null or undefined when calling the age property we know that the variable we are pointing to 
    // is null. Else, we add the students age to the sum variable
    if(item.age!=undefined || item.age!=null)sum+=item.age;
  }
  return sum;
}

module.exports = { transformArrayToUpper, sumOfAllAges };

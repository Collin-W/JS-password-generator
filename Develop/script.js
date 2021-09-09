// Different vars
var passLength;
var passResult = "";

// A blank array and blank string one will be used and other deleted
var blankArray = [];
var blankString = "";

// Might need to change first function name to connect it to the button
function writePassword1() {
var createNewPass = window.confirm("Welcome to the password generator. Would you like to create a new password?");
if(createNewPass) {
  choosePassLength();
} else {
  window.alert("Goodbye")
}
}


// Password length option
// TODO: Some way need to make sure my passLength value can influence the blank array or string that will hold the characters
function choosePassLength(){

  passLength = window.prompt("Please enter a number 8-128, to choose how many characters you want in your password");
  if (passLength >= 8 && passLength <= 128) {
    alert("Great, you have chosen " + passLength + " characters in your password.");
    //turn passLenght to an int
    passLength = parseInt(passLength);
    console.log(passLength);
    charSet1();

  } else {
    alert("You must enter a number between 8 and 128. Not " + passLength + " try again.");
    return choosePassLength();
  }
}


// Set 1 has uppercase letters
function charSet1() {

   var upperCaseChar = confirm("Would you like uppercase characters?");
  if (upperCaseChar) { 
    alert("Uppercase characters added!");
    // added to blank array
    blankString += "ABC";
    console.log(blankString);


    // go to next function without losing upper char data
    charSet2();

  } else {
    alert("No uppercase characters will be present.");
    charSet2();
  }
}

// Set 2 has lowercase letters
function charSet2() {

  var lowerCaseChar = confirm("Would you like lowercase characters?");
  if (lowerCaseChar) {
    alert("Lowercase characters added!");
    // added to blank array
    blankString += "abc";
    console.log(blankString);


    // go to next function without losing lower char data
    charSet3();

  } else {
    alert("No lowercase characters will be present.")
    charSet3();
  }
}

// Set 3 has numbers letters
function charSet3() {

  var numberChar = confirm("Would you like numbers?");
  if (numberChar) {
    alert("Numbers added!");
    // added to blank array
    blankString += "123";
    console.log(blankString);


    // go to next function without losing number data
    charSet4();

  } else {
    alert("No numbers will be present.")
    charSet4();
  }
}

// Set 4 has lowercase letters
function charSet4() {

  var specialChar = confirm("Would you like special characters?");
  if (specialChar) {
    alert("Special characters added!");
    // added to blank array
    blankString += "!@#";
    console.log(blankString);


    // go to next function without losing lower char data
    validateCharSets();

  } else {
    alert("No special characters will be present.")
    validateCharSets();
  }
}



// Validate users can't select no sets, must have at least 1 set
function validateCharSets() {
  if (blankString == 0 || blankString == null) {
    alert("You must select one set of characters for your password.");
    charSet1();
  } else {
    alert("Time to create your password!");
    createPass();
  }
}

function createPass() {

// my error was mispelling length
  var blankStringLength = blankString.length;
 
  for(i = 0; i < passLength; i++) {

    var randomChars = Math.floor(Math.random() * blankStringLength); 
    console.log("random var: " + randomChars);

    passResult += blankString[randomChars];

    console.log("var passResults: " + passResult);

    alert("Your new password is " + passResult);
  }
}













// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword1); 

// Will change writePassword1 back to just writePassword later after testing



// Notes:

// not sure if this for loop has a correct begining but can the random function really be in a condition?
  //for(var i = Math.floor(Math.random() + 1); i < passLength; i++);{
  //for(var blankString = Math.floor(Math.random() + 1); blankString < passLength; blankString++); {
 
  //
// Take my blankString and send it though a for loop that only adds characters equal to passLength
// -pass the result of the random for loop into an alert that gives the password
//
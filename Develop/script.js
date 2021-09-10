// Global var hotspring
var passLength;
var passResult = "";
var blankString = "";

// Might need to change first function name to connect it to the button
function writePassword1() {
var createNewPass = window.confirm("Welcome to the password generator. Would you like to create a new password?");
  if(createNewPass) {
      choosePassLength();
    } else {
      window.alert("Goodbye")
  }
};

// Password length option
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
};

// Set 1 has uppercase letters
function charSet1() {

   var upperCaseChar = confirm("Would you like uppercase characters?");
  if (upperCaseChar) { 
    alert("Uppercase characters added!");
    // added to blank array
    blankString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(blankString);
    charSet2();

  } else {
    alert("No uppercase characters will be present.");
    charSet2();
  }
};

// Set 2 has lowercase letters
function charSet2() {

  var lowerCaseChar = confirm("Would you like lowercase characters?");
  if (lowerCaseChar) {
    alert("Lowercase characters added!");
    // added to blank array
    blankString += "abcdefghijklmnopqrstuvwxyz";
    console.log(blankString);
    charSet3();

  } else {
    alert("No lowercase characters will be present.")
    charSet3();
  }
};

// Set 3 has numbers letters
function charSet3() {

  var numberChar = confirm("Would you like numbers?");
  if (numberChar) {
    alert("Numbers added!");
    // added to blank array
    blankString += "0123456789";
    console.log(blankString);


    // go to next function without losing number data
    charSet4();

  } else {
    alert("No numbers will be present.")
    charSet4();
  }
};

// Set 4 has lowercase letters
function charSet4() {

  var specialChar = confirm("Would you like special characters?");
  if (specialChar) {
    alert("Special characters added!");
    // added to blank array
    blankString += "!@#$%^&*()+=-_~|?.,<>";
    console.log(blankString);
    validateCharSets();

  } else {
    alert("No special characters will be present.")
    validateCharSets();
  }
};

// Validate users can't select no sets, must have at least 1 set
function validateCharSets() {
  if (blankString == 0 || blankString == null) {
    alert("You must select one set of characters for your password.");
    charSet1();
  } else {
    alert("Time to create your password!");
    createPass();
  }
};

function createPass() {
  for(i = 0; i < passLength; i++) {

    var randomChars = Math.floor(Math.random() * blankString.length); 
    console.log("random var: " + randomChars);

    passResult += blankString[randomChars];

    console.log("var passResults: " + passResult);

    if (passLength == passResult.length) {
    alert("Your new password is " + passResult);
    }
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword1); 

// Will change writePassword1 back to just writePassword later after testing




// Assignment Code
var generateBtn = document.querySelector("#generate");

//Characters for password
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChars = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

//Array for all possible characters for password matching user criteria
var passChars = [];

//Function to generate password
function generatePassword() {
  //Creating a variable that will store the user's preference when promted about the password length
  var passLength = prompt("Please enter a number between 8 and 128. This will determine the length of your password.");

  //Different responses depending on user input
  if (!passLength || passLength < 8 || passLength > 128) {
    alert("Error! Password length must be between 8 and 128 characters. Please try again.");
  } else {
    alert('We will now go through different criteria options for your password. Please click "Confirm" if you want it and "Cancel" if you do not.');
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

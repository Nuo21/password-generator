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
  while (!passLength || passLength < 8 || passLength > 128) {
    alert("Error! Password length must be between 8 and 128 characters. Please try again.");
    passLength = prompt("Please enter a number between 8 and 128. This will determine the length of your password.");
  }
  
  alert('We will now go through different criteria options for your password. Please click "OK" if you would like it applied and "Cancel" if you do not.');
  
  //Number criteria
  if (confirm("Do you want your password to contain: Numbers")) {
    passChars = passChars.concat(numbers);
    //Testing
    console.log(passChars);
  }

  //Uppercase criteria
  if (confirm("Do you want your password to contain: Uppercase letters")) {
    passChars = passChars.concat(upperChars);
    //Testing
    console.log(passChars);
  }

  //Lowercase criteria
  if (confirm("Do you want your password to contain: Lowercase letters")) {
    passChars = passChars.concat(lowerChars);
    //Testing
    console.log(passChars);
  }

  //Special character criteria
  if (confirm("Do you want your password to contain: Special characters")) {
    passChars = passChars.concat(specialChars);
    //Testing
    console.log(passChars);
  }

  //If no criteria is chosen
  if (passChars.length == 0) {
    alert("Error! Please select AT LEAST one criteria.");
  }

  //Variable to store the generated password
  var randomPassword = [];

  for (var i = 0; i < passLength; i ++) {
    var randomChar = passChars[Math.floor(Math.random() * passChars.length)];
    randomPassword.push(randomChar);
  }
  return randomPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

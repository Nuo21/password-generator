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

  //To make sure user inputs are valid
  while (isNaN(passLength) || !passLength || passLength < 8 || passLength > 128) {
    if (isNaN(passLength)) {
      alert("Error! Please enter a valid number.");
      passLength = prompt("Please enter a number between 8 and 128. This will determine the length of your password.");
    } else {
      alert("Error! Password length must be between 8 and 128 characters. Please try again.");
      passLength = prompt("Please enter a number between 8 and 128. This will determine the length of your password.");
    }
  }
  
  alert('We will now go through different criteria options for your password. Please click "OK" if you would like it applied and "Cancel" if you do not.');
  
do {
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
}while(passChars.length == 0)

  //Variable to store the generated password
  var randomPassword = [];

  //Generates random character from array based on user criteria then adds it to new array that will be their password
  for (var i = 0; i < passLength; i ++) {
    var randomChar = passChars[Math.floor(Math.random() * passChars.length)];
    randomPassword.push(randomChar);
  }

  //Clears array for next password generation
  passChars = [];
  //Testing
  console.log(passChars);

  //Returns the password and used join method to remove the commas
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

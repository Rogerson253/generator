// Assignment Code
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

var upper;
var lower;
var numbers;
var symbols;

// Add event listener to generate button
generateBtn.addEventListener('click', function() {
    var length = prompt("Choose how many characters you want between 8 and 128.");
    var upper = confirm("Do you want uppercase letters?");
    var lower = confirm("Do you want lowercase letters?");
    var numbers = confirm("Do you want numbers?");
    var symbols = confirm("Do you want symbols?");
});

if (lower===true) {
    lowerCaseLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  }
//uppercase letters
  if (upper===true) {
    upperCaseLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }
//numbers 
  if (numbers===true) {
    numberCaseLet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }
//special characters 
  if (symbols===true) {
    specialCharLet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
  }
  








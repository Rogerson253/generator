// Assignment Code
var generateBtn = document.querySelector("#generate");

var charLength;
var upperCase;
var lowerCase;
var numbered;
var sym;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
    var length= prompt("Choose how many characters you want between 8 and 128.");
    var upper = confirm("Do you want uppercase letters?");
    var lower = confirm("Do you want lowercase letters?");
    var numbers = confirm("Do you want numbers?");
    var symbols = confirm("Do you want symbols?");


// password length
   if (length >= 8 && length <= 128) {
       charLength = parseInt(length);
   }
//uppercase letters
  if (upper===true) {
    upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }
// lowercase letters
  if (lower===true) {
    lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  }
//numbers 
  if (numbers===true) {
   numbered = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 }
//special characters 
  if (symbols===true) {
    sym = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
  }
});

writePassword();


 console.log(charLength);
 console.log(upperCase);
 console.log(lowerCase);
 console.log(numbered);
 console.log(sym);
 console.log(generatePassword());








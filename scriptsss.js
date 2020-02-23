// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
    var length = prompt("Choose how many characters you want between 8 and 128.");
    if (length >= 8 && length <= 128) {
        length = parseInt(length);
    } 
    
    var upper = confirm("Do you want uppercase letters?");
    if (upper===true) {
        upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    } 

    var lower = confirm("Do you want lowercase letters?");
    if (lower===true) {
        lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    } 

    var numbers = confirm("Do you want numbers?");
    if (numbers===true) {
        numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    } 

    var symbols = confirm("Do you want symbols?");
    if (symbols===true) {
        symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
    } 

    console.log(length);
    console.log(upper);
    console.log(lower);
    console.log(numbers);
    console.log(symbols);
});

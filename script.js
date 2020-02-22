// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', function() {
    var length = prompt("Choose how many characters you want between 8 and 128.")
    var upper = confirm("Do you want uppercase letters?");
    var lower = confirm("Do you want lowercase letters?");
    var numbers = confirm("Do you want numbers?");
    var symbols = confirm("Do you want symbols?");


});

function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSym() {
    var sym = '~`!@#$%^&*()<>?";:{[]}?';
    return sym[(Math.floor(Math.random() * sym.length))];
}

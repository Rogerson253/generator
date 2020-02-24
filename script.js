// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// This randomly generates a password based on user input
function generatePassword() {
    
    var userLength = prompt("Choose how many characters you want between 8 and 128.");
    
    if (userLength >= 8 && userLength <= 128) {
        userLengthValue = parseInt(userLength);

        var upper = confirm("Do you want uppercase letters?");
        var lower = confirm("Do you want lowercase letters?");
        var numbers = confirm("Do you want numbers?");
        var symbols = confirm("Do you want symbols?");
    } else {
      alert("Wrong answer. Try again.");
      return generatePassword();
    }

    var newPassword = [];
    
    // var upper = confirm("Do you want uppercase letters?");
    if (upper===true) {
        upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        for (i = 0; i < upperCase.length; i++) {
            newPassword.push(upperCase[i]);
        }
    } 

    // var lower = confirm("Do you want lowercase letters?");
    if (lower===true) {
        lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        for (i = 0; i < lowerCase.length; i++) {
            newPassword.push(lowerCase[i]);
    } 
}

    // var numbers = confirm("Do you want numbers?");
    if (numbers===true) {
        number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        for (i = 0; i < number.length; i++) {
            newPassword.push(number[i]);
    }
} 

    // var symbols = confirm("Do you want symbols?");
    if (symbols===true) {
        symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
        for (i = 0; i < symbol.length; i++) {
            newPassword.push(symbol[i]);
    }
}

    if (upper!==true && lower!==true && numbers!==true && symbols!==true) {
        alert("You did not choose a character type! Try again.");
        return generatePassword();
    }

    var pass = ""

        for (var i = 0; i < userLengthValue; i++) {
            pass += newPassword[Math.floor(Math.random() * newPassword.length)];
        }

        return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
    writePassword();
});

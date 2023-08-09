// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let length = prompt("Enter desired password length");
  if (length < 8) {
    alert("Password length must be at least 8");
    return;
  }
  else if (length > 128) {
    alert("Password length must be 128 characters or less");
    return;
  }

  let lower = confirm("Include lowercase letters?");
  let upper = confirm("Include uppercase letters?");
  let numb = confirm("Include numbers?");
  let special = confirm("Include special characters?");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");




for (var i = 0; i < passwordLength; i++) {
  (Math.floor(Math.random() * i));
}




let passwordUp = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let passwordLow = ["abcdefghijklmnopqrstuvwxyz"];
let passwordNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
let passwordSym = ["~`!#$%^&*+=-[]\\\';,/{}|\":<>?"];

let password = "";

let passwordLength = "";
let upperCase = "";
let lowerCase = "";
let numbers = "";
let special = "";

// Write password to the #password input
function writePassword(password) {
  passwordLength = prompt("How many characters do you want your passowrd to be?");
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Your password must be between 8 and 128 characters!");
  }
  upperCase = confirm("Would you like to include upper case letters in your password?");
  lowerCase = confirm("Would you like to include lower case letters in your password?");
  numbers = confirm("Would you like to include numbers in your password?");
  special = confirm("Would you like to include special characters in your password?");

  let noUpper =
    upperCase === false;
  if (noUpper) {
    alert("You must have one upper case letter in your password!");
    writePassword()
  }


  let noLower =
    lowerCase === false;
  if (noLower) {
    alert("You must have one lower case letter in your password!");
    writePassword()
  }

  let noNumber =
    numbers === false;
  if (noNumber) {
    alert("You must have one number in your password!");
    writePassword()
  }

  let noSpecial =
    special === false;
  if (noSpecial) {
    alert("You must have one special character in your password!");
    writePassword()
  }



  var passwordText = document.querySelector("#password");


  passwordText.value = password;




};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

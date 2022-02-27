// Assignment code here

var getPasswordLength = function() {
  var passwordLength = ""
  var passwordLength = window.prompt("Passwords require a minumum of 8 characters and a maximum of 128 characters. How long would you like your password to be?")
  var passwordLength = parseInt(passwordLength)
  if(isNaN(passwordLength)) {
    window.alert("Only numbers between 8-128 (inclusive) are accepted.");
    getPasswordLength();
  }
  else if (passwordLength < 8 || passwordLength > 128){
      window.alert("Your input is smaller than 8 or larger than 128. Please input a valid number.");
      getPasswordLength();
    }
  return passwordLength
}

function generatePassword() {
  var acceptableCharacters = ""
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var specialCharacters = "!@#$%^&*()~-_=+{}{}|\;:"
  window.alert("Welcome to Password Generator!")
  passwordLength = getPasswordLength()

  var useNumbers = window.confirm("Do you want to include numbers in your password?") 
  if (useNumbers) {
    acceptableCharacters = acceptableCharacters + numbers;
  }
  var useUpperCase = window.confirm("Do you want to include uppercase letters?");
  if (useUpperCase) {
    acceptableCharacters = acceptableCharacters + alphabet.toUpperCase();
  }
  var useLowerCase =  window.confirm("Do you want to include lowercase letters?");
  if (useLowerCase) {
    acceptableCharacters = acceptableCharacters + alphabet.toLowerCase();
  }
  var useSpecialCharacters = window.confirm("Do you want to include special characters?");
  if(useSpecialCharacters) {
    acceptableCharacters = acceptableCharacters + specialCharacters;
  }

  var passwordOutput = ""
  console.log(acceptableCharacters)
  console.log(passwordOutput.length)
  console.log(passwordLength)
  while (passwordOutput.length <= passwordLength) {
    selectedValue = acceptableCharacters[Math.floor(Math.random() * acceptableCharacters.length)]
    passwordOutput = passwordOutput.concat(selectedValue)
    console.log(selectedValue)
  }
  return passwordOutput
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var getPasswordLength = function() {
//   var passwordLength = ""
//   var passwordLength = window.prompt("Passwords require a minumum of 8 characters and a maximum of 128 characters. How long would you like your password to be?")
//   var passwordLength = parseInt(passwordLength)
//   if(isNaN(passwordLength)) {
//     window.alert("Only numbers between 8-128 (inclusive) are accepted.");
//     getPasswordLength();
//   }
//   else if (passwordLength < 8 || passwordLength > 128){
//       window.alert("Your input is smaller than 8 or larger than 128. Please input a valid number.");
//       getPasswordLength();
//     }
// }

// // var randomIndexSelector = function(passwordLength) {
// //   math.floor(math.random()* acceptableCharacters.length())
// // }

// function generatePassword() {
//   var acceptableCharacters = ""
//   var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   var numbers = "0123456789"
//   var specialCharacters = "!@#$%^&*()~-_=+{}{}|\;:"
//   window.alert("Welcome to Password Generator!")
//   passwordLength = getPasswordLength()

//   var useNumbers = window.confirm("Do you want to include numbers in your password?") 
//   if (useNumbers) {
//     acceptableCharacters = acceptableCharacters + numbers;
//   }
//   var useUpperCase = window.confirm("Do you want to include uppercase letters?");
//   if (useUpperCase) {
//     acceptableCharacters = acceptableCharacters + alphabet.toUpperCase();
//   }
//   var useLowerCase =  window.confirm("Do you want to include lowercase letters?");
//   if (useLowerCase) {
//     acceptableCharacters = acceptableCharacters + alphabet.toLowerCase();
//   }
//   var useSpecialCharacters = window.confirm("Do you want to include special characters?");
//   if(useSpecialCharacters) {
//     acceptableCharacters = acceptableCharacters + specialCharacters;
//   }

//   var passwordOutput = ""

//   while (passwordOutput.length() <= passwordLength) {
//     selectedValue = acceptableCharacters[math.floor(math.random()* acceptableCharacters.length())]
//     passwordOutput = passwordOutput.concat(selectedValue)
//   }
// return passwordOutput
// }

// writePassword()
// Assignment Code
var generateBtn = document.querySelector("#generate");


let charLower = "abcdefghijklmnopqrstuvwxyz";
let charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charSymbol = "\"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let charNum = "1234567890";
let pwLength;


// Write password to the #password input
function writePassword() {

  let pwChars = "";

  //Set password length, looping if not within set parameters
  while (true) {

    pwLength = parseInt(prompt("Password length?", "Must be between 8 and 128 characters"));

    if (pwLength >= 8 && pwLength <= 128) {
      alert(`Password will be ${pwLength} characters long.`);
      break;
    }
    alert("Password must be between 8 and 128 characters");
  }
 

  //Set lowercase characters or not
  if (confirm("Use lowercase?")) {
    pwChars += charLower;
    alert("Lowercase added.");
    console.log(pwChars);
  } else {
    alert("No lowercase characters will be added.")
    console.log(pwChars);
  }

  //Set uppercase characters or not
  if (confirm("Use uppercase?")) {
    pwChars += charUpper;
    alert("Uppercase added.");
    console.log(pwChars);
  } else {
    alert("no uppercase characters will be added.")
    console.log(pwChars);
  }

  //Set symbols characters or not
  if (confirm("Use symbols?")) {
    pwChars += charSymbol;
    alert("Symbol characters will be added.");
    console.log(pwChars);
  } else {
    alert("No symbol characters will be added.")
    console.log(pwChars);
  }

  //Set number characters or not
  if (confirm("Use numbers?")) {
    pwChars += charNum;
    alert("Number characters will be added.");
    console.log(pwChars);
  } else {
    alert("No number characters will be added.")
    console.log(pwChars);
  }


  let generatePassword = (pwLength, pwChars) => {

    let pw = "";
    for (let i = 0; i <= pwLength; i++) {

      pw = pw + pwChars.charAt(

        Math.floor(Math.random() * pwChars.length)
      );
    }
    return pw;
  };

  var passwordText = document.querySelector("#password");

  if (pwChars.length == 0) {
    passwordText.value = "No choices were selected, please try again.";
  } else {
    var password = generatePassword(pwLength, pwChars);
    passwordText.value = password;
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

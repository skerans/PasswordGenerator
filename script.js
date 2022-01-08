// Assignment Code
var generateBtn = document.querySelector("#generate");

let pwChars = "";
let charLower = "abcdefghijklmnopqrstuvwxyz";
let charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charSymbol = "\"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let charNum = "1234567890";
let pwLength;


// Write password to the #password input
function writePassword() {
  
 
 //Set password length, looping if not within parameters
 while (true) {
  pwLength =parseInt(prompt("Password length?", "Must be between 8 and 128 characters"));
  if (pwLength >= 8 && pwLength <= 128) {
    break;
  }
  alert("Password must be between 8 and 128 characters");
}
alert("thank you");

//Set lowercase characters or not
if (confirm("Use lower case?")) {
  pwChars += charLower;
  alert("lowercase added");
  console.log(pwChars);
} else {
  alert("no lower case characters")
  console.log(pwChars);
}

//Set uppercase characters or not
if (confirm("Use uppercase?")) {
  pwChars += charUpper;
  alert("uppercase added");
  console.log(pwChars);
} else {
  alert("no upper case characters")
  console.log(pwChars);
}

//Set symbols characters or not
if (confirm("Use symbols?")) {
pwChars += charSymbol;
alert("symbols added");
console.log(pwChars);
} else {
alert("no symbol characters")
console.log(pwChars);
}

//Set number characters or not
if (confirm("Use numbers?")) {
pwChars += charNum;
alert("numbers added");
console.log(pwChars);
} else {
alert("no number characters")
console.log(pwChars);
}


let generatePassword = (pwLength, pwChars) => {
  let pw = "";
  for (let i = 0; i <= pwLength; i++) {
    pw += pwChars.charAt(
      Math.floor(Math.random() * pwChars.length)
    );
  }
  return pw;
  };

var password = generatePassword(pwLength, pwChars);
     
var passwordText = document.querySelector("#password");

passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

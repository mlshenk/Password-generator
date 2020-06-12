// //TODO: create an array for 1) upper case letters 2) lower case letters 3) special characters 4) numbers

//TODO: WHEN button is pushed, present user with a series of prompts (create a function)

  //TODO: 1)how many letters (8-128), 2)lower case letters? 3)upper case letters? 4)special characters? 5)numbers?

    //TODO: can I set buttons to say "yes" and "no" vs "confirm" and "cancel"?
    
//TODO: tally "true" or "false" for each response

//TODO: after all prompts are answered and recorded, use a random generator to create password meeting criteria

//TODO:either display the password in an alert or write it to the page

// ---==========================================================================


// PART 1: GENERATE PW
// variables
function generatePassword(){

var charUpperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charLowerCase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numerals =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sym =["!", "@", "#", "$", "%", "^", "*","'" , "=" , "-", "_"];
var fullArray= [];
var passLength = 0;

do{
  var passLength = prompt("How long would you like the password to be? (Between 8 and 128 characters");
}
while(passLength<8 || passLength>128);
    if(passLength){
      alert("This is a valid password length. Please answer the following questions.");
    console.log(passLength);
    } else {
      alert("This is an invalid password length. Please enter a password length between 8 and 128 character.");
    }
do {
var yesLowerCase = confirm ("Would you like to use lower case letters for your password?");
  if(yesLowerCase) {
    fullArray=fullArray.concat(charLowerCase);
    console.log(fullArray);
  }

var yesUpperCase = confirm("Would you like to use upper case letters for your password?");
  if(yesUpperCase) {
    fullArray=fullArray.concat(charUpperCase);
       console.log(fullArray);
  }


var yesSpecial = confirm("Would you like to use special characters for your password?");
  if(yesSpecial) {
    fullArray=fullArray.concat(sym);
       console.log(fullArray);
  }

var yesNum = confirm("Would you like to use numbers for your password?");
  if(yesNum) {
    fullArray=fullArray.concat(numerals);
        console.log(fullArray);
  }
} while (yesLowerCase!==true && yesUpperCase!==true && yesSpecial!==true && yesNum!==true);

var newPassword = "";
 
for (var i=0; i<passLength; i++) {
  var randomNumber = Math.floor(Math.random() * (fullArray.length-1));
  var randomChar = fullArray[randomNumber];
  newPassword += randomChar;
  console.log(newPassword);
}

return newPassword;
}
// // PART 2: WRITE PW

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// // PART 3: EVENT LISTENER TO GENERATE BUTTON
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Assignment Code

//Character Libraries
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
num = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];

// Variables
var characters;
var howLong;
var upperCase;
var lowerCase;
var special;
var numbers;

  function generatePassword() {
  
  howLong = parseInt(prompt("How many characters would you like your password to contain? Choose between 8 and 128"));
   if (!howLong) {
      alert("Please enter a number!");
  } else if (howLong < 8 || howLong > 128) {
      howLong = parseInt(prompt("You must choose between 8 and 128"));
  } else {
      upperCase = confirm("Would you like your password to contain uppercase letters?");
      lowerCase = confirm("Would you like your password to contain lowercase letters?");
      special = confirm("Would you like your password to contain special characters?");
      numbers = confirm("Would you like your password to contain numbers?");
  };

  if (!upperCase && !lowerCase && !special && !numbers) {
      characters = alert("Your password must contain at least one of these chracters!");
  
    // For passwords containing all four
    } else if (upperCase && lowerCase && special && numbers) {
        characters = upper.concat(lower, symbol, num);
    
    // For passwords containing three chracacters
    } else if (upperCase && lowerCase && special) {
        characters = upper.concat(lower, symbol);

    } else if (upperCase && lowerCase && numbers) {
        characters = upper.concat(lower, num);      

    } else if (upperCase && special && numbers) {
        characters = upper.concat(special, num);

    } else if (lowerCase && special && numbers) {
        characters = lower.concat(special, num);
    

    // For passwords containing only two characters
    } else if (upperCase && lowerCase) {
        characters = upper.concat(lower);

    } else if (upperCase && special) {
        characters = upper.concat(symbol);

    } else if (upperCase && numbers) {
        characters = upper.concat(num);

    } else if (lowerCase && special) {
        characters = lower.concat(symbol);

    } else if (lowerCase && numbers) {
        characters = lower.concat(num);

    } else if (special && numbers) {
        characters = symbol.concat(number);

    
    // For passwords containing only one symbol
    } else if (upperCase) {
        characters = upper;

    } else if (lowerCase) {
        characters = lower;

    } else if (special) {
        characters = symbol;

    } else if (numbers) {
        characters = num;
    };

    var pw = [];
    for (var i = 0; i < howLong; i++) {
        var chosenChars = characters[Math.floor(Math.random() * characters.length)];
        pw.push(chosenChars);
    };
    var password = pw.join("");
    return password;
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generateRandomNumber(minNumber, maxNumber){
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

var correctGuess = false;
var bottomNumber = prompt("Pick a min number");
var topNumber = prompt("Pick a max number");
var randomNumber = generateRandomNumber(parseInt(bottomNumber), parseInt(topNumber));
console.log(randomNumber);
var guess = prompt("Guess the number:");

/*Check if the guess matches the random number
- If it does then set "correctGuess" status flag to true
- Otherwise check if the guess was greater, inform and allow a second guess
- Otherwise the guess must be lower, allow second guess
*/
if(parseInt(guess) === randomNumber){
  correctGuess = true;
} else if(parseInt(guess) > randomNumber){
  var secondGuess = prompt("Try again - your guess was too high!");
  if (parseInt(secondGuess) === randomNumber){
    correctGuess = true;
  }
} else {
  var secondGuess = prompt("Try again - your guess was too low!");
  if (parseInt(secondGuess) === randomNumber){
    correctGuess = true;
  }
}

//Check 'correctGuess' status and show appropriate message
if(correctGuess === true){
  document.write("Yup, it was " + randomNumber);
} else {
  document.write("Nope, it was " + randomNumber);
}

var targetNumber
var attempts = 0
var finished = false
var guessInputInt

function startGame() {
  var randomNumber = Math.floor((Math.random() * 100) + 1)
  targetNumber = randomNumber
  console.log(targetNumber)
  
  while (!finished) {
    var guessInput = prompt("Let's play a game 1 to 100 \n\n" +
    "Enter your number")

    guessInputInt = parseInt(guessInput)
    finished = checkGuess();
    attempts++
  }

}

function checkGuess() {
  if (guessInputInt == null) {
    alert("please enter a integer")
    return fasle
  } else if (guessInputInt > targetNumber) {
    alert("your number is too big")
    return false
  } else if (guessInputInt < targetNumber) {
    alert("your number is too small")
    return false
  } else if (guessInputInt == targetNumber) {
    alert("you win, congratulation \n\n" + attempts + " attemps took to guess number" )
    return true
  }
}

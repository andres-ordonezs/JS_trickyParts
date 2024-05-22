function guessingGame() {
  //store target score
  const target = Math.floor(Math.random() * 101);
  let won = false;
  let guesses = 0;

  return function playGame(guess) {
    if (won) {
      return "The game is over, you already won!";
    }
    if (guess === target) {
      won = true;
      guesses++;
      return `You win! You found ${target} in ${guesses} guesses.`;
    }

    if (guess < target) {
      guesses++;
      return `${guess} is too low!`;
    } else {
      guesses++;
      return `${guess} is too high!`;
    }
  };
}

module.exports = { guessingGame };

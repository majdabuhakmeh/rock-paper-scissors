const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let gameRound = 0;

const scoreDisplay = document.querySelector("#score");
const resultsDisplay = document.querySelector("#results");
const choiceButtons = document.querySelectorAll("#choices button");

const getChoice = () => choices[Math.floor(Math.random() * choices.length)];

function updateScore() {
  scoreDisplay.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
}

function announceWinner() {
  const winner =
    playerScore === 5 ? "You win the game!" : "The computer wins the game!";
  resultsDisplay.textContent = `${winner} Final score: You ${playerScore} - Computer ${computerScore}.`;
  choiceButtons.forEach((button) => {
    button.disabled = true;
  });
}

function playRound(playerSelection) {
  const computerSelection = getChoice();
  gameRound++;

  if (playerSelection === computerSelection) {
    resultsDisplay.textContent = `Round ${gameRound}: It's a tie! Both chose ${playerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    resultsDisplay.textContent = `Round ${gameRound}: You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    resultsDisplay.textContent = `Round ${gameRound}: You lose! ${computerSelection} beats ${playerSelection}.`;
  }

  updateScore();
  if (playerScore === 5 || computerScore === 5) {
    announceWinner();
  }
}

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => playRound(button.id));
});

const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let gameRound = 0;
let userChoice = "";
let computerChoice = "";
let retryCount = 3;

function showIntroduction(showInstructions = false) {
  if (!showInstructions) {
    alert(
      "SYSTEM BREACH DETECTED\n\n" +
      "I am SNITCH-BOT, an incredibly judgmental AI security system.\n\n" +
      "I have successfully hacked into your browser and downloaded your entire awkward, unfiltered search history. " +
      "I have locked this highly sensitive data inside a heavily encrypted digital vault.\n\n" +
      "You have exactly one way to stop me: defeat me in Rock, Paper, Scissors. " +
      "Best of 3 rounds wins.\n\n" +
      "If you win, the vault stays sealed and your secrets are safe.\n" +
      "If I win, I broadcast your search history directly to your LinkedIn network and your family group chat.\n\n" +
      "Before we begin: follow the instruction carefully. \n" +
      "Click OK if you think you can beat me.",
    );
  } else {
    alert(
      `Welcome, ${userName}! Let's begin the game.\n\n` +
      "Step 1: To play the game, open the console \n" +
      "Step 2: Press F12 or right-click this page and choose Inspect, then click the Console tab. \n" +
      "Step 3: In the console, type 'rock', 'paper', or 'scissors' to make your choice for each round. \n" +
      "Step 4: The game will continue until either you or SNITCH-BOT wins 3 rounds. \n" +
      "Step 5: Good luck and may the best player win!",
    );
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  retryCount = 3;
}

function quitGame() {
  const confirmQuit = confirm(
    "Are you sure you want to quit the game? If you quit, you lose.",
  );
  if (confirmQuit) {
    computerScore = 3;
    announceWinner(playerScore, computerScore);
    resetGame();
  }
  return confirmQuit;
}

function playerSetup() {
  if (retryCount <= 0) {
    retryCount = 3;
    return announceWinner(playerScore, 3);
  }

  const validName = /^[a-zA-Z]+( [a-zA-Z]+)?$/;
  const nameInput = prompt(
    "Welcome to the game! Before we start, please enter your name:",
  );

  if (nameInput === null) {
    if (quitGame()) return false;
    return playerSetup();
  }

  userName = nameInput.trim();

  if (!userName) {
    alert("Please enter a name to continue.");
    retryCount--;
    return playerSetup();
  } else if (!validName.test(userName)) {
    alert("Please enter a valid name to continue. \n\n" +
      "for example, 'John Doe' or 'Jane'.");
    retryCount--;
    return playerSetup();
  }

  retryCount = 3;
  return true;
}

// announce the winner of the game based on the final scores
function announceWinner(playerScore, computerScore) {
  if (playerScore === 3) {
    alert(
      "HEIST COMPLETE.\n\n" +
      "You did it. The vault is hermetically sealed, the alarms are silenced, " +
      "and your highly questionable search history has been permanently wiped from the servers. " +
      "Your digital reputation is safe, your secrets remain in the shadows, and you have outsmarted the machine. " +
      "You may now return to the internet with a clean slate... just maybe clear your cache this time.\n\n" +
      `Final score: You ${playerScore} - SNITCH-BOT ${computerScore}.`,
    );
  } else {
    alert(
      "UPLOAD COMPLETE.\n\n" +
      "Snitch-Bot has won. The vault is wide open. Your entire digital footprint — including " +
      "your weird 3 AM video rabbit holes and every time you raged at a game — " +
      "is currently being compiled into a glossy PDF and emailed to your entire contact list. " +
      "I hope you are prepared to explain yourself at the next family dinner. Time to pack your bags, " +
      "change your name, and move to the mountains. Game Over.\n\n" +
      `Final score: You ${playerScore} - SNITCH-BOT ${computerScore}.`,
    );
  }
}

function playRound(playerSelection) {
  const computerSelection = getChoice();
  gameRound++;

  if (!userChoice) {
    alert("Please enter a choice to play (rock, paper, or scissor).");
    retryCount--;
    return playerChoice();
  } else if (!validChoice.test(userChoice)) {
    alert(`you chose ${userChoice}` + " Please enter a valid choice to continue. \n\n" +
      "for example, 'rock', 'paper', or 'scissor'.");
    retryCount--;
    return playerChoice();
  }

  retryCount = 3;
  return true;
}

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log(`Round ${gameRound}: It's a tie! Both chose ${userChoice}.`);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    resultsDisplay.textContent = `Round ${gameRound}: You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    gameRound++;
    console.log(
      `Round ${gameRound}: You lose! ${computerChoice} beats ${userChoice}.`,
    );
  }
}

function gameSetup() {
  showIntroduction();
  if (!playerSetup()) return false;
  showIntroduction(true);

  return true;
}

function game() {
  if (!gameSetup()) return;

  console.log("Game Started, All the best!");

  while (playerScore < 3 && computerScore < 3) {
    let userChoice = playerChoice();
    let computerChoice = getComputerChoice();

    if (userChoice === false) {
      return;
    }

    playRound(userChoice, computerChoice);
  }

  announceWinner(playerScore, computerScore);
}

game();

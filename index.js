const choices = ["rock", "paper", "scissors"];

let userName = "";
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;
let userChoice = "";
let computerChoice = "";
let retryCount = 3;

const getChoice = () => choices[Math.floor(Math.random() * choices.length)];

function showIntroduction() {
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
}

function gameSetup() {
  if (retryCount <= 0) {
    announceWinner(playerScore, 3);
    return false;
  }
  
  const validName = /^[a-zA-Z]+( [a-zA-Z]+)?$/;
  userName = prompt(
    "Welcome to the game! Before we start, please enter your name:",
  );
  if (!userName) {
    alert(
      "Nice try!!, try not to be a disappointment.\n\n" +
        `${retryCount == 1 ? "That was your last attempt!" : 
          `Only ${retryCount - 1} more attempts left. Try again.`}`,
    );
    retryCount--;
    return gameSetup();
  } else if (!validName.test(userName)) {
    alert(
      "I think i should Upload the contents...\n\n" +
        `${retryCount == 1 ? "That was your last attempt!" : 
          `Only ${retryCount - 1} more attempts left. Try again.`}`,
    );
    retryCount--;
    return gameSetup();
  } else retryCount = 3;

  alert(
    `Welcome, ${userName}! Let's begin the game.\n\n` +
      "Step 1: To play the game, open the console \n" +
      "Step 2: Press F12 or right-click this page and choose Inspect, then click the Console tab. \n" +
      "Step 3: In the console, type 'rock', 'paper', or 'scissors' to make your choice for each round. \n" +
      "Step 4: The game will continue until either you or SNITCH-BOT wins 3 rounds. \n" +
      "Step 5: Good luck and may the best player win!",
  );

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

async function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log(`Round ${gameRound}: It's a tie! Both chose ${userChoice}.`);
    await delay(1500);
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    gameRound++;
    console.log(
      `Round ${gameRound}: You win! ${userChoice} beats ${computerChoice}.`,
    );
    await delay(1500);
  } else {
    computerScore++;
    gameRound++;
    console.log(
      `Round ${gameRound}: You lose! ${computerChoice} beats ${userChoice}.`,
    );
    await delay(1500);
  }
}

const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function game() {
  const validChoice = /^(rock|paper|scissors)$/i;

  showIntroduction();
  if (!gameSetup()) return;

  console.log("===== Loading 30%");
  await delay(1000);
  console.log("==================== Loading 50%");
  await delay(1000);
  console.log("====================================== Loading 75%");
  await delay(3500);
  console.log("Game Started, All the best!");

  while (playerScore < 3 && computerScore < 3) {
    try {
      userChoice = prompt(
        "Please enter your choice (rock, paper, or scissors):",
      ).toLowerCase();
      
      computerChoice = getChoice();

      if(retryCount <= 0) {
        alert(
          "Uhh ohh!\n\n" +
            "You've exceeded the maximum number of attempts. Game Over."
        );
  
        computerScore = 3;
        break;
      }
  
      if (!validChoice.test(userChoice)) {
        alert(
          `Great! ${retryCount == 2 ? "Not again please" : "your trying to trick me"}.\n\n` +
            `${retryCount == 1 ? "That was your last attempt!" : `Only ${retryCount - 1} more attempts left. Try again.`}`,
        );
        retryCount--;
        continue;
      }
  
      await playRound(userChoice.toLowerCase(), computerChoice.toLowerCase());
    } catch (error) {
      console.error("Are you trying to quit?:");
      const confirmQuit = confirm(
        "Are you sure you want to quit the game? If you quit, your entire search history will be uploaded to your contacts.",
      );
      if (confirmQuit) {
        break;
      } else {
        console.log("Continuing the game...");
        continue;
      }
    }
  }

  announceWinner(playerScore, computerScore);
}

game();

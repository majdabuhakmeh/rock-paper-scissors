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
      "Before we begin: open your browser console now — press F12, or right-click this page and choose Inspect, then click the Console tab. " +
      "That is where I will taunt you and report the results of every round.\n\n" +
      "Click OK if you think you can beat me.",
  );
}

// announce the winner of the game based on the final scores
function announceWinner(playerScore, computerScore) {
  if (playerScore === 3) {
    alert(
      "HEIST COMPLETE.\n\n" +
        "You did it. The vault is hermetically sealed, the alarms are silenced, and your highly questionable search history has been permanently wiped from the servers. " +
        "Your digital reputation is safe, your secrets remain in the shadows, and you have outsmarted the machine. " +
        "You may now return to the internet with a clean slate... just maybe clear your cache this time.\n\n" +
        `Final score: You ${playerScore} - SNITCH-BOT ${computerScore}.`,
    );
  } else {
    alert(
      "UPLOAD COMPLETE.\n\n" +
        "Snitch-Bot has won. The vault is wide open. Your entire digital footprint — including your weird 3 AM video rabbit holes and every time you raged at a game — " +
        "is currently being compiled into a glossy PDF and emailed to your entire contact list. " +
        "I hope you are prepared to explain yourself at the next family dinner. Time to pack your bags, change your name, and move to the mountains. Game Over.\n\n" +
        `Final score: You ${playerScore} - SNITCH-BOT ${computerScore}.`,
    );
  }
}

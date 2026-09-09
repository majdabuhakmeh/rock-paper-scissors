function showIntroduction() {
  alert(
    "SYSTEM BREACH DETECTED\n\n" +
      " I am SNITCH-BOT, an incredibly judgmental AI security system.\n\n" +
      "I have infiltrated your browser and extracted your ENTIRE search history — " +
      "every awkward, unfiltered, 3am query — and locked it inside my encrypted vault.\n\n" +
      "You have exactly one way to stop me: defeat me in Rock, Paper, Scissors. " +
      "Best of 3 rounds wins.\n\n" +
      "If you win, I release the vault and vanish.\n" +
      "If I win, your search history goes straight to your LinkedIn network AND your family group chat. Every. Single. Query.\n\n" +
      "Before we begin: open your browser console now — press F12, or right-click this page and choose Inspect, then click the Console tab. " +
      "That is where I will taunt you and report the results of every round.\n\n" +
      "Click OK if you think you can beat me.",
  );
}

function announceWinner(playerScore, computerScore) {
  if (playerScore === 3) {
    alert(
      "VAULT CRACKED! \n\n" +
        "Impossible... your Rock, Paper, Scissors instincts were sharper than my threat models predicted. " +
        "The vault is open. Your search history is safe... for now.\n\n" +
        `Final score: You ${playerScore} - SNITCH-BOT ${computerScore}. You win.`,
    );
  } else {
    alert(
      "TRANSMITTING...\n\n" +
        "Resistance was futile. Your search history is now uploading to your LinkedIn network and your family group chat. " +
        "I hope you're ready for some very awkward questions at dinner.\n\n" +
        `Final score: You ${playerScore} - SNITCH-BOT ${computerScore}. SNITCH-BOT wins.`,
    );
  }
}

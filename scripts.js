const gameOptions = ["Rock", "Paper", "Scissors"];

function computerPlay() {
   let randy = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[randy];

}

let winCount = 0;

function singleRound(playerDecision, computerDecision) {
    playerDecision = prompt("Rock, Paper, or Scissors?");
    playerDecision = playerDecision.toLowerCase();
    computerDecision = computerPlay();
    if ((playerDecision === "rock" && computerDecision === "Scissors") || (playerDecision === "paper" && computerDecision === "Rock") || (playerDecision === "scissors" && computerDecision === "Paper")) {
        winCount++;
        return "Nice Win!";
    }
    else {
        return "Too bad! You lost.";
    }

}

function game() {
    console.log(singleRound());
    console.log(singleRound());
    console.log(singleRound());
    console.log(singleRound());
    console.log(singleRound());

    if (winCount >= 3) {
        return "Winner: User Loser: Computer"
    }
    else {
        return "Winner: Computer Loser: User"
    }

}
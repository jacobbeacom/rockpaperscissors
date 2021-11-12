const gameOptions = ["Rock", "Paper", "Scissors"];

function computerPlay() {
   let randy = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[randy];

}



function singleRound(playerDecision, computerDecision) {
    playerDecision = prompt("Rock, Paper, or Scissors?");
    playerDecision = playerDecision.toLowerCase();
    computerDecision = computerPlay();
    if ((playerDecision === "rock" && computerDecision === "Scissors") || (playerDecision === "paper" && computerDecision === "Rock") || (playerDecision === "scissors" && computerDecision === "Paper")) {
        return "Nice Win!"
    }
    else {
        return "Too bad! You lost."
    }



    console.log(playerDecision, computerDecision);
}
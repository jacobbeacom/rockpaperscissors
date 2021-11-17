const gameOptions = ["Rock", "Paper", "Scissors"];

function computerPlay() {
   let randy = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[randy];

}

let winCount = 0;


function singleRound(playerDecision, computerDecision) {
    playerDecision = playerDecision.toLowerCase();
    computerDecision = computerPlay();
    console.log(computerDecision);
    if ((playerDecision === "rock" && computerDecision === "Scissors") ||
             (playerDecision === "paper" && computerDecision === "Rock") || 
                    (playerDecision === "scissors" && computerDecision === "Paper")) {
        winCount++;
        return "Nice Win!";
    }
    else {
        return "Too bad! You lost.";
    }
}


const rock = document.querySelector('#rock');

    rock.addEventListener('click', () => {
    playerDecision = 'rock';
    console.log(playerDecision);
    console.log(singleRound(playerDecision));
        

    });


const paper = document.querySelector('#paper');

    paper.addEventListener('click', () => {
    playerDecision = 'paper';
    console.log(playerDecision);
    console.log(singleRound(playerDecision));    

    });


const scissors = document.querySelector('#scissors');

    scissors.addEventListener('click', () => {
    playerDecision = 'scissors';
    console.log(playerDecision);
    console.log(singleRound(playerDecision));

    });



//The singleRound function repeated 5 times, with results logged to console
//function game() {
//    console.log(singleRound());
//    console.log(singleRound());
//    console.log(singleRound());
//    console.log(singleRound());
//    console.log(singleRound());

//    if (winCount >= 3) {
//        return "Winner: User Loser: Computer";
//    }
//    else {
//        return "Winner: Computer Loser: User";
//    }
//
//}


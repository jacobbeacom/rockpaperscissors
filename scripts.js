const gameOptions = ["Rock", "Paper", "Scissors"];

function computerPlay() {
   let randy = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[randy];

}

let winCount = 0;
let cpuWinCount = 0;

const humanScoreboard = document.querySelector('#humanScoreboard');
const score = document.createElement('p');
humanScoreboard.appendChild(score);

const cpuScoreboard = document.querySelector('#cpuScoreboard');
const playerVictory = document.createElement('p');
cpuScoreboard.appendChild(playerVictory);



function singleRound(playerDecision, computerDecision) {
    playerDecision = playerDecision.toLowerCase();
    computerDecision = computerPlay();
    console.log(computerDecision);
    if ((playerDecision === "rock" && computerDecision === "Scissors") ||
             (playerDecision === "paper" && computerDecision === "Rock") || 
                    (playerDecision === "scissors" && computerDecision === "Paper")) {
                        winCount++
                        score.textContent = 'Player Score: ' + winCount + ' CPU Score: ' + cpuWinCount;
        return "Nice Win!";
    }
    else {
        cpuWinCount++
        score.textContent = 'Player Score: ' + winCount + ' CPU Score: ' + cpuWinCount;
    }
    if (winCount == 5) {
        playerVictory.textContent = 'Congratulations, you won!'
    } else if (cpuWinCount == 5) {
        playerVictory.textContent = 'Sorry, you lost!'
    
}}


const rock = document.querySelector('#rock');

    rock.addEventListener('click', () => {
    playerDecision = 'rock';
    console.log(playerDecision);
    (singleRound(playerDecision));
        

    });


const paper = document.querySelector('#paper');

    paper.addEventListener('click', () => {
    playerDecision = 'paper';
    console.log(playerDecision);
    (singleRound(playerDecision));    

    });


const scissors = document.querySelector('#scissors');

    scissors.addEventListener('click', () => {
    playerDecision = 'scissors';
    console.log(playerDecision);
    (singleRound(playerDecision));

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


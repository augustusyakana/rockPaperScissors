let playerScore = 0;
let computerScore = 0;
let draws = 0;

const buttons = document.querySelectorAll('input');


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[(Math.floor(Math.random() * choices.length))];
}

// add code to disable buttons when score reaches 5
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = '';
    let computerScoreResults = '';
    let playerScoreResults = '';
    let drawsResult = '';
    let gameOver = '';

    // when the player wins the round
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        playerScore += 1;

        result = `You won this round! ${playerSelection} beats ${computerSelection}`;
        playerScoreResults = `Player Score: ${playerScore}`;
        computerScoreResults = `Computer Score: ${computerScore}`;
        drawsResult = `Draws: ${draws}`;

        if (playerScore == 5) {
            playerScoreResults = `Player Score: ${playerScore}`;
            computerScoreResults = `Computer Score: ${computerScore}`;
            drawsResult = `Draws: ${draws}`;

            gameOver = `I'll get you next time! <br>Refresh the page to play again`;
            disableButtons();
        }

    } else if (playerSelection == computerSelection) {
        draws += 1;
        result = `Draw! You both chose ${playerSelection}`;
        playerScoreResults = `Player Score: ${playerScore}`;
        computerScoreResults = `Computer Score: ${computerScore}`;
        drawsResult = `Draws: ${draws}`;

    } else {
        computerScore += 1;
        result = `You lost this round! ${computerSelection} beats ${playerSelection}`;
        playerScoreResults = `Player Score: ${playerScore}`;
        computerScoreResults = `Computer Score: ${computerScore}`;
        drawsResult = `Draws: ${draws}`;

        if (computerScore == 5) {

            playerScoreResults = `Player Score: ${playerScore}`;
            computerScoreResults = `Computer Score: ${computerScore}`;
            drawsResult = `Draws: ${draws}`;
            gameOver = `Loser! <br>Refresh the page to play again!`
            disableButtons();

        }
    }

    document.getElementById('result').innerHTML = result;
    document.getElementById('playerScore').innerHTML = playerScoreResults;
    document.getElementById('computerScore').innerHTML = computerScoreResults;
    document.getElementById('draws').innerHTML = drawsResult;
    document.getElementById('gameOver').innerHTML = gameOver;
    return;

}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value.toLowerCase());
    })
})
let playerScore = 0;
let computerScore = 0;
let draws = 0;

const buttons = document.querySelectorAll('input');


function getComputerChoice() {
    let choices = ["ku", "pa", "tok"];
    return choices[(Math.floor(Math.random() * choices.length))];
}

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
    if ((playerSelection == 'ku' && computerSelection == 'tok') ||
        (playerSelection == 'tok' && computerSelection == 'pa') ||
        (playerSelection == 'pa' && computerSelection == 'ku')) {
        playerScore += 1;

        result = `Ke kana round mehkin. ${playerSelection} kin kaluhsih ${computerSelection}`;
        playerScoreResults = `Ahmw Skohr: ${playerScore}`;
        computerScoreResults = `Ahi Skohr: ${computerScore}`;
        drawsResult = `Teng: ${draws}`;

        if (playerScore == 5) {
            playerScoreResults = `Ahmw Skohr: ${playerScore}`;
            computerScoreResults = `AhiSkohr: ${computerScore}`;
            drawsResult = `Teng: ${draws}`;

            gameOver = `ESEH! Ke rorok kaluhsihie? <br>Refresh Page en kitahn kamehlel! <br>Kedeh Saloh!`;
            disableButtons();
        }

    } else if (playerSelection == computerSelection) {
        draws += 1;
        result = `Kita TENG! Pwe kita koaros pilada ${playerSelection}`;
        playerScoreResults = `Ahmw Skohr: ${playerScore}`;
        computerScoreResults = `Ahi Skohr: ${computerScore}`;
        drawsResult = `Teng: ${draws}`;

    } else {
        computerScore += 1;
        result = `HA! ${computerSelection} kin kaluhsih ${playerSelection}`;
        playerScoreResults = `Ahmw Skohr: ${playerScore}`;
        computerScoreResults = `Ahi Skohr: ${computerScore}`;
        drawsResult = `Teng: ${draws}`;

        if (computerScore == 5) {

            playerScoreResults = `Ahmw Skohr: ${playerScore}`;
            computerScoreResults = `Ahi Skohr: ${computerScore}`;
            drawsResult = `Teng: ${draws}`;
            gameOver = `Lesila pwe ke LUHS! HAHA <br>Kohla practice pwe ke samai! <br>Ma ke ngihtehte ah ke refresh kita pilehu!`
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
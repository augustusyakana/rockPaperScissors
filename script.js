let userScore = 0;
let computerScore = 0;

let draws = 0;

console.log("First Player to Reach 5points \nor Best out of 10 rounds \nwins the game!! GO!!");

const choices = ["rock", "paper", "scissors"];
function getComputerChoice(arr) {
    return (arr[(Math.floor(Math.random() * arr.length))]);
}

function game() {
    for (let i = 1; i <= 10; i++) {
        let userSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        const computerSelection = getComputerChoice(choices);
        let roundResult = playRound(userSelection, computerSelection);
        console.log(roundResult);
        
        if (userScore === 5 || computerScore === 5) {
            break;
        }

    }
}

// let theButton = document.getElementsByClassName("button");
// theButton.addEventListener("click", game());

function playRound(user, computer) {
    if (user === computer) {
        draws++;
        let draw = `Draw, you both chose ${user}!`;
        return draw;
    } else if (user === "rock" && computer === "scissors") {
        userScore++;
        let userWinRound = `You Win this round, ${user} beats ${computer}!`
        return userWinRound;
    } else if (user === "scissors" && computer === "paper") {
        userScore++
        let userWinRound = `You Win this round, ${user} beats ${computer}!`
        return userWinRound;
    } else if (user === "paper" && computer === "rock") {
        userScore++
        let userWinRound = `You Win this round, ${user} beats ${computer}!`
        return userWinRound;
    } else {
        computerScore++;
        let computerWinRound = `You lost, ${computer} beats ${user}!`
        return computerWinRound;
    }
}

game()
console.log(`\nGAME OVER! See Scores Below:`)
console.log(`Computer Score: ${computerScore}`);
console.log(`User Score: ${userScore}`);
console.log(`Draws: ${draws}`);

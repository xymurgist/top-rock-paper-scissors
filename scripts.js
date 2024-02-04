// Create an array with the choices
const computerChoices = ["Rock", "Paper", "Scissors"];

// Get a random choice for the computer from the array
function getComputerChoice() {
    let index = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[index];
}

function getPlayerChoice() {
    let playerInput = prompt("Pick one: Rock, Paper, Scissors");
    let lowerCase = playerInput.toLowerCase();
    let firstLetter = lowerCase.slice(0, 1);
    let capitalLetter = firstLetter.toUpperCase();
    let remainingLetters = lowerCase.slice(1);
    let playerChoice = capitalLetter + remainingLetters;
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    let answer = "";
    let computerScore = 0;
    let playerScore = 0;
    let gameArray = [];

    if ((playerSelection == "Rock" && computerSelection == "Rock")
        || (playerSelection == "Paper" && computerSelection == "Paper")
        || (playerSelection == "Scissors" && computerSelection == "Scissors")) {
        answer = `This round is a Tie! ${playerSelection} equals ${computerSelection}`
    } else if ((playerSelection == "Rock" && computerSelection == "Paper")
        || (playerSelection == "Paper" && computerSelection == "Scissors")
        || (playerSelection == "Scissors" && computerSelection == "Rock")) {
        answer = `You Lose this round! ${playerSelection} is beaten by ${computerSelection}`
        computerScore = 1
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors")
        || (playerSelection == "Paper" && computerSelection == "Rock")
        || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        answer = `You WIN this round! ${playerSelection} beats ${computerSelection}`
        playerScore = 1
    }

    gameArray = [answer, computerScore, playerScore];
    
    return gameArray;
    
}

function playGame() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        let gameRound = playRound(playerSelection, computerSelection);
        let roundAnswer = gameRound[0];
        let computerRound = gameRound[1];
        let playerRound = gameRound[2];

        computerScore += computerRound;
        playerScore += playerRound;

        console.log(roundAnswer);
    }

    if (computerScore > playerScore) {
        console.log(`You Lose the game! ${computerScore} to ${playerScore}`);
    } else if (playerScore > computerScore) {
        console.log(`You Win the game! ${playerScore} to ${computerScore}`);
    } else {
        console.log(`The game ends in a Tie! ${playerScore} to ${computerScore}`);
    }
}

playGame();
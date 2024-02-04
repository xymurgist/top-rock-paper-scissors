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
    let answer = ""
    if ((playerSelection == "Rock" && computerSelection == "Rock")
        || (playerSelection == "Paper" && computerSelection == "Paper")
        || (playerSelection == "Scissors" && computerSelection == "Scissors")) {
        answer = `It's a Tie! ${playerSelection} equals ${computerSelection}`
    } else if ((playerSelection == "Rock" && computerSelection == "Paper")
        || (playerSelection == "Paper" && computerSelection == "Scissors")
        || (playerSelection == "Scissors" && computerSelection == "Rock")) {
        answer = `You Lose! ${playerSelection} is beaten by ${computerSelection}`
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors")
        || (playerSelection == "Paper" && computerSelection == "Rock")
        || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        answer = `You WIN! ${playerSelection} beats ${computerSelection}`
    }
    
    return answer;
    
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

// const playerSelection = getPlayerChoice();
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// console.log(playGame());
playGame();
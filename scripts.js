// Create an array with the choices
const choices = ["Rock", "Paper", "Scissors"];

// Get a random choice for the computer from the array
function getComputerChoice() {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function getPlayerChoice() {
    let playerChoice = prompt("Pick one: Rock, Paper, Scissors");
    return playerChoice;
}

// console.log(getComputerChoice());


function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
// Initialize variables
let answer = '';
let computerScore = 0;
let playerScore = 0;

// Select HTML elements
let resultText = document.querySelector('#resultText');
let playerTotal = document.querySelector('#playerTotal');
let computerTotal = document.querySelector('#computerTotal');

// Create array with the computer's choices
const computerChoices = ["Rock", "Paper", "Scissors"];

// Get random choice for the computer from the array
function getComputerChoice() {
    let index = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[index];
}

// Play round by round until a winner is determined
function playRound(buttonClicked) {
    let playerSelection = buttonClicked;
    let computerSelection = getComputerChoice();

    if (playerScore === 5 || computerScore === 5) {
        return;
    } else {
        // Display winner of the round.
        if ((playerSelection === "Rock" && computerSelection === "Rock")
            || (playerSelection === "Paper" && computerSelection === "Paper")
            || (playerSelection === "Scissors" && computerSelection === "Scissors")) {
            answer = `This round is a Tie! ${playerSelection} equals ${computerSelection}`;
        } else if ((playerSelection === "Rock" && computerSelection === "Paper")
            || (playerSelection === "Paper" && computerSelection === "Scissors")
            || (playerSelection === "Scissors" && computerSelection === "Rock")) {
            answer = `You Lose this round! ${playerSelection} is beaten by ${computerSelection}`;
            computerScore += 1;
        } else if ((playerSelection === "Rock" && computerSelection === "Scissors")
            || (playerSelection === "Paper" && computerSelection === "Rock")
            || (playerSelection === "Scissors" && computerSelection === "Paper")) {
            answer = `You WIN this round! ${playerSelection} beats ${computerSelection}`;
            playerScore += 1;
        }

        // Display winner of the match.
        if (playerScore === 5) {
            resultText.textContent = "You won the match!"
        } else if (computerScore === 5) {
            resultText.textContent = "You lost the match."
        } else {
            resultText.textContent = answer;
        }

        // Display player and computer running total scores.
        playerTotal.textContent = playerScore;
        computerTotal.textContent = computerScore;
    }
}

// Listen for which button is clicked and send textContent to playRound function
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent)
    });
});
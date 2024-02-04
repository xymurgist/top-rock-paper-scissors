
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

console.log(getComputerChoice());
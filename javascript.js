const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
let playerSelection = '';

btnRock.addEventListener('click', () => {
    playerSelection = 'ROCK';
    gamerounds();
});
btnPaper.addEventListener('click', () => {
    playerSelection = 'PAPER';
    gamerounds();
});
btnScissors.addEventListener('click', () => {
    playerSelection = 'SCISSORS';
    gamerounds();
});
console.log(playerSelection);



//Randomly pick between rock,paper, scissors.
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case (0):
            return 'ROCK';
        break;
        case (1):
            return 'PAPER';
        break;
        case(2):    
            return 'SCISSORS';
            break;
    }
}
//Declare who's the winner by comparing the variables.
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection){
        console.log('It\'s a tie!');
    }
    else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
            (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
            (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
                console.log('You Win!');
                playerPoints++;
    }
    else if ((playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
            (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
            (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')) {
                console.log('You Lose!');
                computerPoints++;
            }
}






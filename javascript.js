//Declaring all the variables
const btnRock = document.querySelector('#ROCK');
const btnPaper = document.querySelector('#PAPER');
const btnScissors = document.querySelector('#SCISSORS');

//Score system
let playerPoints = 0;
let computerPoints = 0;
const playerResult = document.querySelector('.playerResult');
const computerResult = document.querySelector('.computerResult');
const gameResultElement = document.getElementById('game-result');

//Setting the reset button invisible when page loads
document.getElementById('reset').style.display = 'none';

//Function to start the game with the player's selection
function handleClick (event){
    const playerSelection = event.target.id;
    btnSelected(event);
    game(playerSelection);
}

//Adding handleclick() to each button
btnRock.addEventListener('click', handleClick);
btnPaper.addEventListener('click', handleClick);
btnScissors.addEventListener('click', handleClick);

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
    }
    else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
            (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
            (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
                playerPoints++;
    }
    else if ((playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
            (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
            (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')) {
                computerPoints++;
            }
}

//Game will be played 
function game(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    displayPlayerResults();
    displayComputerResults();

    if (playerPoints + computerPoints === 5) {
        endgame();
    }
}

//Display for player results
function displayPlayerResults() {
    playerResult.textContent = `You: ${playerPoints}`;
}

//Display for computer results
function displayComputerResults() {
    computerResult.textContent = `Computer: ${computerPoints}`;
}

//Endgame screen will appear after total points reach 5 (player + computer)
function endgame() {

    if (playerPoints > computerPoints) {
        const gameResultElement = document.getElementById('game-result');
        gameResultElement.textContent = 'You Won!';
        document.getElementById('reset').style.display = 'block';
        disableButtons();
        document.getElementById('reset').addEventListener('click', gameReset);
    }
    else if (playerPoints < computerPoints) {
        const gameResultElement = document.getElementById('game-result');
        gameResultElement.textContent = 'You lost...';
        document.getElementById('reset').style.display = 'block';
        disableButtons();
        document.getElementById('reset').addEventListener('click', gameReset);
    }

}

//Game reset function
function gameReset() {
    playerPoints = 0;
    computerPoints = 0;
    gameResultElement.textContent = '';
    playerResult.textContent = '';
    computerResult.textContent = '';
    document.getElementById('reset').style.display = 'none';
    enableButtons();
}

//Disabling buttons during endgame screen
function disableButtons() {
    btnRock.removeEventListener('click', handleClick);
    btnPaper.removeEventListener('click', handleClick);
    btnScissors.removeEventListener('click', handleClick);
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
}

//Enabling buttons after resetting game
function enableButtons() {
    btnRock.addEventListener('click', handleClick);
    btnPaper.addEventListener('click', handleClick);
    btnScissors.addEventListener('click', handleClick);
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
}

//button selection animation
function btnSelected(event) {
    event.target.classList.add('btnSelected');
    setTimeout(() => {
        event.target.classList.remove('btnSelected');
    }, 250);
}





const buttons = document.querySelectorAll('button');
const results = document.querySelector('div');

let playerScore = 0;
let computerScore = 0;
let round = 0;

buttons.forEach(btn => btn.addEventListener('click', clickHandler));

function playRound (playerSelection, computerSelection) {
    const line = document.createElement('p');
    line.textContent = `Round ${++round}: `;

    let diff = playerSelection - computerSelection;
    if (Math.abs(diff) === 2)
        diff /= -2;

    switch (diff) {
        case 1:
            playerScore++;
            line.textContent += `You win! ${numToName(playerSelection)} ${playerSelection === 2 ? 'beat' : 'beats'} ${numToName(computerSelection)}\n`;
            break;
        case -1:
            computerScore++;
            line.textContent += `You lose! ${numToName(computerSelection)} ${computerSelection === 2 ? 'beat' : 'beats'} ${numToName(playerSelection)}\n`;
            break;
        default:
            line.textContent += 'Draw!\n';
    }

    results.appendChild(line);

    if (playerScore === 5 || computerScore === 5) gameOver();
}

function gameOver() {
    buttons.forEach(btn => btn.removeEventListener('click', clickHandler));

    const line = document.createElement('p');
    line.style.fontWeight = 900;

    if (playerScore === 5)
        line.textContent = `You won the game with the score of ${playerScore} against the enemy score of ${computerScore}!`;
    else
        line.textContent = `You lost the game with the score of ${playerScore} against the enemy score of ${computerScore}!`;

    results.appendChild(line);
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function clickHandler (event) {
    playRound(parseInt(event.target.value), getComputerChoice());
}

function numToName (number) {
    switch (number) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        default:
            return 'Scissors';
    }
}

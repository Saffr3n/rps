function getPlayerChoice (message = 'Rock, Paper or Scissors?') {
    const p = prompt(message).toLowerCase();

    if (p === 'rock' || p === 'r')
        return 0;
    if (p === 'paper' || p === 'p')
        return 1;
    if (p === 'scissors' || p === 's')
        return 2;

    return getPlayerChoice('Invalid input, try again! Rock, Paper or Scissors?');
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound (playerSelection, computerSelection) {
    let diff = playerSelection - computerSelection;

    if (Math.abs(diff) === 2) {
        diff /= -2;
    }

    switch (diff) {
        case 0:
            return 'Draw!';
        case 1:
            return `You win! ${numToName(playerSelection)} ${playerSelection === 2 ? 'beat' : 'beats'} ${numToName(computerSelection)}`;
        default:
            return `You lose! ${numToName(computerSelection)} ${computerSelection === 2 ? 'beat' : 'beats'} ${numToName(playerSelection)}`;
    }
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

console.log(playRound(getPlayerChoice(), getComputerChoice()));

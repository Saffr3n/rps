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

    if (Math.abs(diff) === 2)
        diff /= -2;

    return diff;
}

function game() {
    let playerSelection;
    let computerSelection;

    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 1; i <= 5; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();

        console.log(`Round ${i}:\n`)

        const diff = playRound(playerSelection, computerSelection);

        switch (diff) {
            case 0:
                console.log('Draw!\n\n');
                break;
            case 1:
                console.log(`You win! ${numToName(playerSelection)} ${playerSelection === 2 ? 'beat' : 'beats'} ${numToName(computerSelection)}\n\n`);
                playerScore++;
                break;
            default:
                console.log(`You lose! ${numToName(computerSelection)} ${computerSelection === 2 ? 'beat' : 'beats'} ${numToName(playerSelection)}\n\n`);
                computerScore++;
        }
    }

    if (playerScore > computerScore)
        console.log(`You won the game with the score of ${playerScore} against the enemy score of ${computerScore}!`);
    else if (playerScore < computerScore)
        console.log(`You lost the game with the score of ${playerScore} against the enemy score of ${computerScore}!`);
    else
        console.log(`Draw! Both players scored ${playerScore}`);
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

game();

console.log("Are we there yet")


function computerPlay(playerSelection, computerSelection) {
    const options = ['rock', 'paper', 'scissor'];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    
    let winCondition = false;

    if (playerSelection == computerSelection) {
        alert(`Its a tie! You both chose ${playerSelection}`);
        return;
    } else if ( (playerSelection == 'rock' && computerSelection == 'scissor') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissor' && computerSelection == 'paper')) {
        winCondition = true;
    }

    if (winCondition) {
        alert(`Woah, ${playerSelection} beats ${computerSelection}. You won!!`);
    } else {
        alert(`Damn, ${playerSelection} loses to ${computerSelection}. You lost.`)
    }

    return winCondition;
}



function game() {
    let playerSelection;
    let computerSelection;
    let wins = 0
    let losses = 0;
    alert('Rock, paper, scissor against the computer! This is a best of 5.')
    for (let i = 1; i < 6; i++){
        alert(`Commencing Round ${i}!`);
        while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissor') {
            playerSelection = (prompt('Please select your champion! (Rock, paper, or scissor)')).toLowerCase();
        }
        computerSelection = computerPlay();

        

    }


    return;
}

console.log(prompt())
console.log(computerPlay())

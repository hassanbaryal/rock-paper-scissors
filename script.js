console.log("Are we there yet")


function computerPlay(playerSelection, computerSelection) {
    const options = ['rock', 'paper', 'scissor'];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = (prompt('Please select your champion! (Rock, paper, or scissor)')).toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection == 'rock') {

    } else if (playerSelection == 'paper') {

    } else if (playerSelection == 'scissor'){

    } else {
        alert('please select a valid option! (Rock, paper, or scissor');
        playRound();
    }

    return;
}



console.log(prompt())
console.log(computerPlay())

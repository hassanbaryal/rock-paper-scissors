console.log("Are we there yet")

//Function randomly selects either rock, paper or scissor for computer
function computerPlay(playerSelection, computerSelection) {
    const options = ['rock', 'paper', 'scissor'];
    return options[Math.floor(Math.random() * 3)];
}

//Determines winner of a rock paper scissor round based on the parameters, player selection & computer selection
function playRound(playerSelection, computerSelection) {
    
    let winCondition = false;

    if (playerSelection == computerSelection) { //for ties
        console.log(`Its a tie! You both chose ${playerSelection}.`);
        return;
    //This else if accounts for all scenarios for which the player can win
    } else if ( (playerSelection == 'rock' && computerSelection == 'scissor') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissor' && computerSelection == 'paper')) {
        winCondition = true;
    }

    if (winCondition) {
        console.log(`Woah, ${playerSelection} beats ${computerSelection}. You won this round!!`);
    } else {
        console.log(`Damn, ${playerSelection} loses to ${computerSelection}. You lost this round.`)
    }

    return winCondition;
}


//This function commences the game of rock paper scissors.
function game() {
    let playerSelection; //players selection
    let computerSelection; //computers select
    let didPlayerWin; //boolean which is assinged true if the player wins the round
    let playerWins = 0; //Number of rounds player has won
    let computerWins = 0; //Number of rounds computer has won
    let playAgain; 

    alert('Rock, paper, scissor against the computer! This is a best of 5.')

    //For loop that plays through each of the 5 rounds
    for (let i = 1; i < 6; i++){
        console.log(`Commencing Round ${i}!`);
        //keeps looping until player selects a valid option (i.e. either rock, paper, or scissors)
        while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissor') {
            playerSelection = (prompt('Please select your champion! (Rock, paper, or scissor)')).toLowerCase();
        }
        //gets computers selection
        computerSelection = computerPlay();
        //determines winner
        didPlayerWin = playRound(playerSelection, computerSelection);
        //adds to win counter
        if (didPlayerWin) {
            playerWins++;
        } else {
            computerWins++;
        }

        console.log(`Player: ${playerWins}    Computer: ${computerWins}`);
        //ends game/for loop if either player or computer reaches 3 wins (bst of 5) 
        if (playerWins == 3) {
            console.log('You have won this game! *FIREWORKS*');
            break;
        } else if (computerWins == 3) {
            console.log('Computer has won. game over. *FIREWORKS BUT IN ROBOT*')
            break;
        }
    }

    //Asks if player wants to play again
    while (true) {
        playAgain = prompt('Play again? Yes or no.').toLowerCase();
        if (playAgain = 'yes') {
            game();
            break;
        } else if (playAgain = 'no') {
            game();
            break;
        } else {
            alert('Input a valid option.');
        }
    }

    return;
}

game();

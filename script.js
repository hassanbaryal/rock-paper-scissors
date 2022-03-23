
let computerScore = 0
let playerScore = 0


const instructionTxt = document.querySelector(".instruction")
const playerScoreTxt = document.querySelector(".player-stat").querySelector(".score")
const computerScoreTxt = document.querySelector(".computer-stat").querySelector(".score")

const playerImg = document.querySelector(".player-stat").querySelector(".champion")
const computerImg =  document.querySelector(".computer-stat").querySelector(".champion")

//Function randomly selects either rock, paper or scissor for computer
function computerPlay() {
    const options = ['rock', 'paper', 'scissor'];
    return options[Math.floor(Math.random() * 3)];
}


//Determines winner of a rock paper scissor round/game 
function playRound(playerSelection) {
    
    let playerWin = false;
    computerSelection = computerPlay()
    updateImages(playerSelection, computerSelection)

    if (playerSelection == computerSelection) { //for ties
        console.log(`Its a tie! You both chose ${playerSelection}.`);
        instructionTxt.textContent = `Its a tie! You both chose ${playerSelection}.`
        return;
    //This else if accounts for all scenarios for which the player can win
    } else if ( (playerSelection == 'rock' && computerSelection == 'scissor') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissor' && computerSelection == 'paper')) {
        playerWin = true;
    }

    if (playerWin) {
        console.log(`Woah, ${playerSelection} beats ${computerSelection}. You won this round!!`);
        instructionTxt.textContent = `Woah, ${playerSelection} beats ${computerSelection}. You won this round!!`
        playerScore++
    } else {
        console.log(`Damn, ${playerSelection} loses to ${computerSelection}. You lost this round.`)
        instructionTxt.textContent = `Damn, ${playerSelection} loses to ${computerSelection}. You lost this round.`
        computerScore++
    }

    
    updateStats()

    if (playerScore == 5) {
        instructionTxt.textContent = `Wow, you won!! Congratulations!! Proceed to The White House to claim your prize, or play again to show your dominance once more.`
        playerImg.src = './images/player.png'
        computerImg.src = './images/computer-sad.png'
        createBtns(2)
    } else if (computerScore == 5) {
        instructionTxt.textContent = `You lost :(. There's still hope, would you like to play again?`
        playerImg.src = './images/player-sad.png'
        computerImg.src = './images/computer-happy.png'
        createBtns(2)
    }
}

//updates images of player and computer
function updateImages (playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        playerImg.src = './images/rock.png'
    } else if (playerSelection == 'paper') {
        playerImg.src = './images/paper.png'
    } else {
        playerImg.src = './images/scissor.png'
    }

    if (computerSelection == 'rock') {
        computerImg.src = './images/rock.png'
    } else if (computerSelection == 'paper') {
        computerImg.src = './images/paper.png'
    } else {
        computerImg.src = './images/scissor.png'
    }


}

function updateStats () {
    playerScoreTxt.textContent = `Score: ${playerScore}`
    computerScoreTxt.textContent = `Score: ${computerScore}`    
}


//Creates buttons for rps depending on the stae of the game.
// stae=1 means the game is underway. state=2 means the game is done,
//and the play again option should be presented.
//state=0 is what is seen upon loading the page.
function createBtns (state) {
    //remove all present buttons
    const container = document.querySelector("#bottom-container")
    const btns = document.querySelectorAll(".btn")
    btns.forEach(btn => {
        btn.remove()
    })
    //state 1 adds the rock, paper, and scissors buttons
    //state 2 adds the play again options
    if (state == 1) {

        const rockBtn = document.createElement("button")
        const paperBtn = document.createElement("button")
        const scissorBtn = document.createElement("button")

        rockBtn.classList.add("btn", "rock")
        paperBtn.classList.add("btn", "paper")
        scissorBtn.classList.add("btn", "scissor")

        rockBtn.textContent = "Rock"
        paperBtn.textContent = "Paper"
        scissorBtn.textContent = "Scissor"

        container.appendChild(rockBtn)
        container.appendChild(paperBtn)
        container.appendChild(scissorBtn)
        
        rockBtn.addEventListener('click', () => {playRound('rock')})
        paperBtn.addEventListener('click', () => {playRound('paper')})
        scissorBtn.addEventListener('click', () => {playRound('scissor')})
    } else if (state == 2) {
        const playAgainBtn = document.createElement("button")
        playAgainBtn.classList.add("btn", "play-again")
        playAgainBtn.textContent = "Play Again?"
        container.appendChild(playAgainBtn)
        playAgainBtn.addEventListener('click', () => {
            computerScore = 0
            playerScore = 0
            updateStats()
            game()
        })
    }
}

//This function commences the game of rock paper scissors.
function game() {
    instructionTxt.textContent = `Choose your Champion:`
    createBtns(1)
    return
}

const playBtn = document.querySelector(".play")

playBtn.addEventListener('click', game)

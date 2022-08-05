let playerScore = 0
let compScore = 0

function getComputerChoice() {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    return arrOfChoices[randomNum]
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)
    if (playerSelection === computerSelection) {
        return 'Tie!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        return 'You lost!'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You won!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        return 'You lost!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You won!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        return 'You lost!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You won!'
    }
}

const game = () => {
    for (let i=0; i<5; i++) {
        const playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase()
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }

    if (playerScore > compScore) {
        return 'GG EZ'
    } else if (playerScore < compScore) {
        return 'Try again next time'
    } else {
        return 'Both players tied'
    }   
}

console.log(game())
console.log(playerScore, compScore)
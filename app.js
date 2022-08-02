function getComputerChoice() {
    const computerOptions = ['rock','paper','scissors']
    const choiceNumber = Math.floor(Math.random()*3);
    const computerChoice = computerOptions[choiceNumber];
    console.log(computerChoice);
    return computerChoice
}

getComputerChoice();

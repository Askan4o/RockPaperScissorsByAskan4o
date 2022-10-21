function rockPaperScissors(playerTurn, computerTrun ,) {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors"
    let computerRandomNumber = Math.floor(Math.random() * 3) + 1

    if (playerTurn == "r" || playerTurn == "rock") {
        playerTurn = rock;
    } else if (playerTurn == "p" || playerTurn == "paper") {
        playerTurn = paper
    } else if (playerTurn == "s" || playerTurn == "scissors") {
        playerTurn = scissors
    } else {
        console.log("Invalid input. try again...");
    }

    switch (computerRandomNumber) {
        case 1:
            computerTrun = rock;
            break;
        case 2:
            computerTrun = paper;
            break;
        case 3:
            computerTrun = scissors
            break;
    }
    console.log(`The computer Chooses ${computerTrun}`);

    if ((playerTurn === rock && computerTrun === scissors) || (playerTurn === paper
        && computerTrun === rock) || (playerTurn === scissors && computerTrun === paper)) {
        console.log("You win!");
    } else if ((playerTurn === rock && computerTrun === paper) || (playerTurn === paper
        && computerTrun === scissors) || (playerTurn === scissors && computerTrun === rock)) {
        console.log("You lose!");
    }else{
        console.log("This game was a draw!");
    }
}
rockPaperScissors("r")
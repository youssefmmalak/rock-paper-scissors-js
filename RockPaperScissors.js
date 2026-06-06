function playGame(playerChoice, computerChoice) {
    // This function takes the player's choice and the computer's choice as arguments and determines the outcome of the game
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors"){
        return "Invalid choice! Please choose rock, paper, or scissors.";
    }
    if (computerChoice !== "rock" && computerChoice !== "paper" && computerChoice !== "scissors") {
        return "Invalid choice! Please choose rock, paper, or scissors.";
    }
    if (playerChoice === computerChoice) {
        return "Tie Game!";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You win!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You win!";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You win!";
    } else {
        return "You LOSE!";
    }
}

function getComputerChoice() { 
    // This function randomly selects a choice for the computer from the options: rock, paper, or scissors
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// initialize score counters
let playerScore = 0, computerScore = 0;

function playRound(playerChoice) {
    playerChoice = playerChoice.toLowerCase(); // Convert player choice to lowercase for case-insensitive comparison
    var computerChoice = getComputerChoice();
    var result = playGame(playerChoice, computerChoice);
    console.log(result);
    console.log(`Player choice: ${playerChoice}, Computer choice: ${computerChoice}`);
    if (result === "You win!") {
       // If the player wins, we can add a point to the player's score
       playerScore++;
    } else if (result === "You LOSE!") {
       // If the player loses, we can add a point to the computer's score
       computerScore++;
    }
    console.log(`Current Score - Player: ${playerScore}, Computer: ${computerScore}`);
}

playRound("rock");
playRound("paper");
playRound("scissors");
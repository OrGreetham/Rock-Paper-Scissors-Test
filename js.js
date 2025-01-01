console.log("Hello World!");
console.log("Please play Rock, Paper, Scissors");

//Starting scores to add values to
let humanScore = 0
let computerScore = 0


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("It's a Tie!");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        alert("Computer Picked: " + computerChoice);
        alert("You win the Round!");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        alert("Computer Picked: " + computerChoice);
        alert("You win the Round!");
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        alert("Computer Picked: " + computerChoice);
        alert("You win the Round!");
        humanScore++;
    } else {
        alert("Computer Picked: " + computerChoice);
        alert("You lose the Round");
        computerScore++;
    }
    alert(("Your Score: " + humanScore) + " " + ("Computers Score: " + computerScore));
}


function determineWinner() {
    if (humanScore > computerScore) {
      alert("You win the game!");
    } else if (humanScore < computerScore) {
      alert("You lose the game!");
    } else {
      alert("It's a tied game!");
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)

//Make computer input, Generate random number between 1-3, 
// assign 1 to rock, 2 to paper, 3 to scissors.
function getComputerChoice() {//Bots Pick
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "Rock";
    } else if (randomNumber == 1) {
        return "Paper";
    } else if (randomNumber == 2) {
        return "Scissors";
    }
}

function getHumanChoice() {//Human Pick
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

    if (humanChoice == "rock" ) {
        return "Rock";
    } else if (humanChoice == "paper") {
        return "Paper";
    } else if (humanChoice == "scissors") {
        return "Scissors";
    } else { 
        return "Invalid entry, Please try again"
    }
}


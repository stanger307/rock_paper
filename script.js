// define score variables
let playerScore = 0;
let computerScore = 0;


// computer plays randomly
 function computerPlay(){
    let choice = Math.floor(Math.random() * 3);
    let tool = "";
    if (choice == 0) {
        tool = "rock";
    }else if (choice == 1){
        tool = "scissors";
    }else if (choice == 2){
        tool = "paper";
    }    
    return tool;
}
function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = prompt("Choose your weapon: ");
    if (playerSelection.toLowerCase() === computerSelection){
        console.log("tie!");
    }else if
        ((playerSelection.toLowerCase() == "rock" && computerSelection == "paper") ||
        (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") ||
        (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock")){
            computerScore += 1;
            console.log("you lose!");
        }else if
        ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") ||
        (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") ||
        (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")){
            playerScore += 1;
            console.log("you win!");
        }else{
            console.log("you didn!t choose proper weapon.");
        }
    }
function game(){    
    while (computerScore < 5 && playerScore < 5) {
        playRound();
        console.log(`computer: ${computerScore}, you: ${playerScore}`);
       
    } 
    if (playerScore > computerScore){
        console.log("game is completed.")
        alert("Congratulations!!! you win!");
    }else if(playerScore == computerScore){
        console.log("game is completed.")
        alert("it's a Tie! what a match!");
    }else{
        console.log("game over.")
        alert("Oh no!! you lose the match!");
    }  
}

// query selectors

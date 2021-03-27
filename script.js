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
        alert("tie!");
    }else if
        ((playerSelection.toLowerCase() == "rock" && computerSelection == "paper") ||
        (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") ||
        (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock")){
            alert("you lose!")
        }else if
        ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") ||
        (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") ||
        (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")){
            alert("you win!")
        }else{
            alert("you didn!t choose proper weapon.")
        }
}

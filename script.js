let humanScore = 0;
let computerScore = 0;
let winner = 5;

function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3);

    if (compChoice === 0){
        return "rock"
    }
    else if (compChoice === 1){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function getHumanChoice() {
    let choice = prompt("What's your choice?");
    choice = choice.toLowerCase();

    if (choice === "rock"){
        return "rock";
    }
    else if (choice === "paper"){
        return "paper";
    }
    else if (choice === "scissor"){
        return "scissor";
    }
    else{
        return "Invalid Input!";
    }
}

function playRound(humanChoice, computerChoice) {
     humanChoice = getHumanChoice();
     computerChoice = getComputerChoice();

    if(humanChoice === computerChoice){
        return "Tie round!";
    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ){
        humanScore++;
        console.log("You win!");

    }
    else{
        computerScore++;
        console.log("Computer wins!");
    }
}

function playGame(){
    while(humanScore < winner && computerScore < winner){
        playRound();
    }

    if(humanScore === winner){
        console.log("The winner is human!");
    }
    else if(computerScore === winner){
        console.log("The winner is computer!");
    }
}

playGame();
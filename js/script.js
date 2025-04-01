let humanScore = 0;
let computerScore = 0;
const winner = 5; 

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice){
    let computerChoice = getComputerChoice();
    if(humanChoice === computerChoice){
        document.getElementById('resultDiv').textContent = "It's a Tie!";
    }
    else if (
    (humanChoice === 'rock' && computerChoice === 'paper')||
    (humanChoice === 'paper' && computerChoice === 'rock')||
    (humanChoice === 'scissor' && computerChoice === 'scissor')
){
    humanScore++;
    document.getElementById('resultDiv').textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
    }
    else{
        computerScore++;
    document.getElementById('resultDiv').textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
    }
    updateScore();
    checkWinner();
}
function updateScore(){
    document.getElementById('scoreDiv').textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
}

function checkWinner(){
    if (humanScore >=winner){
        document.getElementById('resultDiv').textContent = "Human wins the game!";
        disableButtons();
    }
    else if (computerScore >= winner){
        document.getElementById('resultDiv').textContent = "Computer wins the game!";
        disableButtons();
    }
}

function disableButtons(){
    document.querySelectorAll('button').forEach(button => button.disabled = true);
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissor').addEventListener('click', () => playRound('scissor'));
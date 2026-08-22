const btns = document.querySelectorAll(".btn");
const playerChoiceDisplay = document.querySelector(".player-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const result = document.querySelector(".result");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const resetBtn = document.querySelector(".reset-game");

let playerScore = 0;
let computerScore = 0;
let message = "Choose an Option To Start!";

const updateResults =(pChoice ='',cChoice='',msg=message)=>{

    playerChoiceDisplay.textContent = pChoice;
    computerChoiceDisplay.textContent = cChoice;

    playerScoreDisplay.textContent=playerScore;
    computerScoreDisplay.textContent = computerScore;

    result.textContent = msg;
}

const evaluateResult = (playerChoice) => {
  let choices = ["🪨rock", "📄paper", "✂️scissor"];
  let randomIndex = Math.floor(Math.random() * 3);

  let computerChoice = choices[randomIndex];
  console.log(computerChoice);

  if (playerChoice == "🪨rock"){

    if (computerChoice == "📄paper") {
      computerScore++;
    } else if (computerChoice == "✂️scissor") {
      playerScore++;
    } else {
    }

  }else if(playerChoice == '📄paper'){
    if (computerChoice == "✂️scissor") {
      computerScore++;
    } else if (computerChoice == "🪨rock") {
      playerScore++;
    } else {
    }

  }else{
     if (computerChoice == "🪨rock") {
      computerScore++;
    } else if (computerChoice == "📄paper") {
      playerScore++;
    } else {
    }
  }

if(playerScore > computerScore){
  message=`You Won !!`;
}else if(playerScore == computerScore){
  message=`Its a Tie!`
}else{
  message=`computer Won !!`
}


updateResults(playerChoice,computerChoice,message);

}

btns[0].addEventListener('click',()=> evaluateResult('🪨rock'));
btns[1].addEventListener('click',()=>evaluateResult('📄paper'));
btns[2].addEventListener('click',()=>evaluateResult('✂️scissor'));

document.addEventListener('DOMContentLoaded',()=>updateResults());

resetBtn.addEventListener('click',()=>{
  playerScore=0;
  computerScore=0;
  message =`Choose an Option To Start!`;
  updateResults();

});



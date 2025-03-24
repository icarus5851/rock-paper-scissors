//in test.js I used a very long method to update the dom 

let humanScore = 0 , computerScore = 0;

const container = document.querySelector(".container");
const startGame = container.querySelector(".start-game");

startGame.addEventListener("click",()=>{
    container.innerHTML = `
        <div class="scores">
            <div class="your-score">Your Score: ${humanScore}</div>
            <div class="computer-score">Computer Score: ${computerScore}</div>
        </div>
        <div class="instruction">Select Your Choice</div>
        <div class="inner-container">
            <button class="rock cards"><img src="images/rock.webp"></button>
            <button class="paper cards"><img src="images/paper.jpg"></button>
            <button class="scissors cards"><img src="images/scissors.avif"></button>
        </div>
    `;
    container.classList.add("afterstart");

    const instruction = container.querySelector(".instruction");
    const yourScoreDisplay = container.querySelector(".your-score");
    const computerScoreDisplay = container.querySelector(".computer-score");

    const rock = container.querySelector(".rock");
    const paper = container.querySelector(".paper");
    const scissors = container.querySelector(".scissors");

    rock.addEventListener("click",()=>{
        let choice="rock";
        playRound(choice , getComputerChoice());
        showResult();
    });
    paper.addEventListener("click",()=>{
        let choice="paper";
        playRound(choice , getComputerChoice());
        showResult();
    });
    scissors.addEventListener("click",()=>{
        let choice="scissors";
        playRound(choice , getComputerChoice());
        showResult();
    });
});

function getComputerChoice(){
    let values= ["rock", "paper" , "scissors"] ;
    return values[Math.floor(Math.random()*3)];
}

function playRound(humanChoice , computerChoice){
    humanChoice = humanChoice.toLowerCase();
    const instruction = container.querySelector(".instruction");
    const yourScoreDisplay = container.querySelector(".your-score");
    const computerScoreDisplay = container.querySelector(".computer-score");

    if(humanChoice===computerChoice){
        instruction.textContent="Round Draw!";
    }
    else if((humanChoice=="rock" && computerChoice=="paper")||(humanChoice=="scissors" && computerChoice=="rock")||(humanChoice=="paper" && computerChoice=="scissors")){
        computerScore++;
        instruction.textContent=`Lost this Round, ${computerChoice} defeats ${humanChoice}`;
        yourScoreDisplay.textContent=`Your Score: ${humanScore}`;
        computerScoreDisplay.textContent=`Computer Score: ${computerScore}`;
    }
    else{
        humanScore++;
        instruction.textContent=`Won this Round, ${humanChoice} defeats ${computerChoice}`;
        yourScoreDisplay.textContent=`Your Score: ${humanScore}`;
        computerScoreDisplay.textContent=`Computer Score: ${computerScore}`;
    }
}

function showResult(){
    const instruction = container.querySelector(".instruction");
    if(humanScore<5 && computerScore<5){
        return;
    }
    else{
        if(humanScore > computerScore){
            instruction.textContent=`Congratulations! You won`;
        }
        else if(humanScore < computerScore){
            instruction.textContent=`Bad Luck! You lost`;
        }
        else{
            instruction.textContent=`Match Tied`;
        }
        matchReset();
    }
}

const playAgain = document.createElement("button");
playAgain.classList.add("start-game");
playAgain.textContent="Play Again";

function matchReset(){
    const innerContainer = container.querySelector(".inner-container");
    container.removeChild(innerContainer);
    container.appendChild(playAgain);
}

playAgain.addEventListener("click",()=>{
    humanScore=0;
    computerScore=0;
    container.innerHTML = `
        <div class="scores">
            <div class="your-score">Your Score: ${humanScore}</div>
            <div class="computer-score">Computer Score: ${computerScore}</div>
        </div>
        <div class="instruction">Select Your Choice</div>
        <div class="inner-container">
            <button class="rock cards"><img src="images/rock.webp"></button>
            <button class="paper cards"><img src="images/paper.jpg"></button>
            <button class="scissors cards"><img src="images/scissors.avif"></button>
        </div>
    `;
    container.classList.add("afterstart");

    const instruction = container.querySelector(".instruction");
    const yourScoreDisplay = container.querySelector(".your-score");
    const computerScoreDisplay = container.querySelector(".computer-score");

    const rock = container.querySelector(".rock");
    const paper = container.querySelector(".paper");
    const scissors = container.querySelector(".scissors");

    rock.addEventListener("click",()=>{
        let choice="rock";
        playRound(choice , getComputerChoice());
        showResult();
    });
    paper.addEventListener("click",()=>{
        let choice="paper";
        playRound(choice , getComputerChoice());
        showResult();
    });
    scissors.addEventListener("click",()=>{
        let choice="scissors";
        playRound(choice , getComputerChoice());
        showResult();
    });
});
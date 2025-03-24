let humanScore = 0 , computerScore = 0;

const container = document.querySelector(".container");
const startGame = container.querySelector(".start-game");

const scores = document.createElement("div");
scores.classList.add("scores");

const yourScoreDisplay = document.createElement("div");
const computerScoreDisplay = document.createElement("div");

yourScoreDisplay.classList.add("your-score");
computerScoreDisplay.classList.add("computer-score");


const instruction = document.createElement("div");
instruction.classList.add("instruction");

const innerContainer = document.createElement("div");
innerContainer.classList.add("inner-container"); 

const rock = document.createElement("div");
const paper = document.createElement("div");
const scissors = document.createElement("div");

rock.classList.add("cards");
scissors.classList.add("cards");
paper.classList.add("cards");

rock.innerHTML = '<img src="images/rock.webp">';
scissors.innerHTML = '<img src="images/scissors.avif">';
paper.innerHTML ='<img src="images/paper.jpg">';

innerContainer.appendChild(rock);
innerContainer.appendChild(paper);
innerContainer.appendChild(scissors);





startGame.addEventListener("click",()=>{

    // container.innerHTML ='<div class="scores">'+
    // `<div class="your-score">Your Score:${humanScore}</div>`+
    // `<div class="computer-score">Computer Score:${computerScore}</div>`+'</div>'+
    // '<div class="instruction">Select Your Choice</div>'+
    // '<div class="inner-container">'+
    // '<button class="rock cards"><img src="images/rock.webp"></button>'+
    // '<button class="paper cards"><img src="images/paper.jpg"></button>'+
    // '<button class="scissors cards"><img src="images/scissors.avif"></button>'+
    // '</div>';
    container.textContent='';
    yourScoreDisplay.textContent=`Your Score: ${humanScore}`;
    computerScoreDisplay.textContent=`Computer Score:${computerScore}`;
    instruction.textContent=`Select Your Choice`;

    scores.appendChild(yourScoreDisplay);
    scores.appendChild(computerScoreDisplay);
    container.appendChild(scores);
    container.appendChild(instruction);
    container.appendChild(innerContainer);
    container.classList.add("afterstart");
})






function getComputerChoice(){
    let values= ["rock", "paper" , "scissors"] ;
    return values[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
    let choice;
    return choice;
}



function playRound(humanChoice , computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice===computerChoice){
        instruction.textContent="Round Draw!";
    }
    else if((humanChoice=="rock" && computerChoice=="paper")||(humanChoice=="scissors" && computerChoice=="rock")||(humanChoice=="paper" && computerChoice=="scissors")){
        computerScore++;
        instruction.textContent=`Lost this Round, ${computerChoice} defeats ${humanChoice}`;
        yourScoreDisplay.textContent=`Your Score:${humanScore}`;
        computerScoreDisplay.textContent=`Computer Score:${computerScore}`;
    }
    else{
        humanScore++;
        instruction.textContent=`Won this Round, ${humanChoice} defeats ${computerChoice}`;
        yourScoreDisplay.textContent=`Your Score:${humanScore}`;
        computerScoreDisplay.textContent=`Computer Score:${computerScore}`;
    }
}

rock.addEventListener("click",()=>{
    let choice="rock";
    playRound(choice , getComputerChoice());
    showResult();
})
paper.addEventListener("click",()=>{
    let choice="paper";
    playRound(choice , getComputerChoice());
    showResult();
})
scissors.addEventListener("click",()=>{
    let choice="scissors";
    playRound(choice , getComputerChoice());
    showResult();
})

function showResult(){
    if(humanScore<5 && computerScore<5){
        return;
    }

    else{
        if(humanScore > computerScore){
            instruction.textContent=`Congratulations! You won`;
            matchReset();
        }
        else if(humanScore < computerScore){
            instruction.textContent=`Bad Luck! You lost`;
            matchReset();
        }
        else{
            instruction.textContent=`Match Tied`;
            matchReset();
        }
    }
}

const playAgain = document.createElement("button");
playAgain.classList.add("start-game");
playAgain.textContent="Play Again";

function matchReset(){
    container.removeChild(innerContainer);
    container.appendChild(playAgain);
};

playAgain.addEventListener("click",()=>{
    humanScore=0;
    computerScore=0;
    container.textContent='';

    yourScoreDisplay.textContent=`Your Score: ${humanScore}`;
    computerScoreDisplay.textContent=`Computer Score:${computerScore}`;
    instruction.textContent=`Select Your Choice`;

    scores.appendChild(yourScoreDisplay);
    scores.appendChild(computerScoreDisplay);
    container.appendChild(scores);
    container.appendChild(instruction);
    container.appendChild(innerContainer);
    container.classList.add("afterstart");
})
function getComputerChoice(){
    let values= ["rock", "paper" , "scissors"] ;
    return values[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
    return prompt("Please Enter Your choice:");
}

let humanScore = 0 , computerScore = 0;

function playRound(humanChoice , computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice===computerChoice){
        console.log("Round Draw!")
    }
    else if((humanChoice=="rock" && computerChoice=="paper")||(humanChoice=="scissors" && computerChoice=="rock")||(humanChoice=="paper" && computerChoice=="scissors")){
        computerScore++;
        console.log(`You lose!! ${computerChoice} defeats ${humanChoice}`);
    }
    else{
        humanScore++;
        console.log(`You win!! ${humanChoice} defeats ${computerChoice}`);
    }
}


function playGame(){
    for(let i = 0 ; i < 5 ; i++){
        const humanSelection = getHumanChoice();
        console.log(humanSelection);
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore){
        console.log(`You won ${humanScore} times out of 5 times!!`);
    }
    if(humanScore < computerScore){
        console.log(`You lost ${5-humanScore} times out of 5 times!!`);
    }
    else{
        console.log(`match tied`);
    }
}
playGame();
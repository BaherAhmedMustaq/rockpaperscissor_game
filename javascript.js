function getcomputerChoice()
{
let computerChoice;
let randomnumber=Math.floor(Math.random()*3)+1;
if (randomnumber===1)
{
    computerChoice="ROCK"
}

else if (randomnumber===2)
{
    computerChoice="PAPER"
}

else if(randomnumber===3) 
{
    computerChoice="SCISSOR"
}

return computerChoice;

}

function gethumanChoice()
{
    let humanchoice=prompt("Please enter a choice:Rock,Paper or Scissor").trim().toUpperCase();

    if (humanchoice!="ROCK" && humanchoice!="PAPER" && humanchoice!="SCISSOR")
    {
        console.log("Please input one of the three choices only.")
        return gethumanChoice();
    }
return humanchoice;

}


function score()
{

let computerselection= getcomputerChoice();
let humanselection=gethumanChoice();
console.log("Your Choice is " + humanselection + "!");
console.log("Computer has selected " + computerselection + "!");
return {computerselection,humanselection};

}




let humanscore=0;
let computerscore=0;



function playGame(computerselection,humanselection)
{
  

if (humanselection===computerselection)
{
    console.log("Its a tie!");
}

else if((humanselection==="ROCK" && computerselection==="SCISSOR") || 
(humanselection==="SCISSOR" && computerselection==="PAPER") ||
(humanselection==="PAPER" && computerselection==="ROCK")
)
{

    console.log("You win this round!");
    humanscore++;
} 

else{
    console.log("Computer wins this round!");
    computerscore++;
}



}

function playRound()
{
    for(i=1;i<=5;i++){
        const {computerselection, humanselection}=score();
        playGame(computerselection,humanselection);
    }
console.log(`Human - ${humanscore} Computer- ${computerscore}`);

if(computerscore===humanscore){
    console.log("The Game is tied!");
}

else if(computerscore>humanscore){
    console.log("Computer Wins!");
}

else{
    console.log("Human Wins!");
}

}

playRound();
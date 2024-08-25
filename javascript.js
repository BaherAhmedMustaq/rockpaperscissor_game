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

let computerselection= getcomputerChoice();
let humanselection=gethumanChoice();
console.log("Your Choice is " + humanselection + "!");
console.log("Computer has selected " + computerselection + "!");


function playGame(computerselection,humanselection)
{
if (humanselection===computerselection){
    console.log("Its a tie!")
}

else if((humanselection==="ROCK" && computerselection==="SCISSOR") || 
(humanselection==="SCISSOR" && computerselection==="PAPER")
(humanselection==="PAPER" && computerselection==="ROCK")
)
{
    console.log("You Win!")
} 

else{
    console.log("Computer Wins!")
}

}

function playRound()
{


}
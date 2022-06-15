
function computerPlay() {
    
    let x = Math.floor(Math.random()*3);
    //integer between (inclusive) 0 and 2

    if(x===0)
        return 'Rock';
    else if (x==1)
        return 'Paper';
    else    
        return 'Scissors';

    //return Rock, Paper, or Scissors depending on value of x
}

//returns a winner after comparing rock-paper-scissors selection values
function playRound (playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    console.log(playerSelection);
    console.log(computerSelection);
}


//conducts five rounds, records the score, and finally, reports a winner or loser
function game(){

}
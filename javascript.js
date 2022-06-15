
function computerPlay() {
    
    let x = Math.floor(Math.random()*3);
    //integer between (inclusive) 0 and 2

    if(x==0)
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

    //testing
    //console.log('computerSelection = ' + computerSelection);

    //we can refer to lexicographical order to compare selection strings

    if(computerSelection==playerSelection)
        return 'Draw!';
    //draw
    else if (playerSelection=='rock')
    {
        if (computerSelection=='paper')
            return 'You Lose! Paper beats Rock';
        else
            return 'You win! Rock beats Scissors';
    }
    //rock vs paper/scissors
    else if (playerSelection=='paper')
    {
        if (computerSelection=='rock')
            return 'You Win! Paper beats Rock';
        else
            return 'You Lose! Scissors beats Paper';
    }
    //paper vs rock/scissors
    else if (playerSelection=='scissors')
    {
        if (computerSelection=='rock')
            return 'You Lose! Rock beats Scissors'; 
        else
            return 'You win! Scissors beats Paper';
    }
    //scissors vs rock/paper
}


//conducts five rounds, records the score, and finally, reports a winner or loser
function game(){

    let playerScore=0, computerScore=0;

    for(let i=0; i<5; i++)
    {
        let string = playRound(prompt('Rock, Paper, or Scissors?'), computerPlay());
        
        console.log(string);

        if(string.indexOf('You Lose')!==-1)
            computerScore++;
        if(string.indexOf('You win')!==-1)
            playerScore++;

        console.log('\nRound ' + i + results:)
        console.log('       playerScore = ' + playerScore);
        console.log('       computerScore = ' + computerScore + '\n');
            
    }

    if(playerScore==computerScore)
        console.log('Draw!');
    else if (playerScore > computerScore)
        console.log("You're the winner!");
    else
        console.log("You're the loser!");

}

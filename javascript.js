
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

    //regulate entries (parameters)
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    //while loop condition for valid entry
    let invalid;

    if(playerSelection!=='rock' && playerSelection!=='paper' && playerSelection!=='scissors')
    {
        invalid=true;

        //repeat prompt until valid entry is mad
        do
        {
            playerSelection=prompt('INVALID ENTRY. Rock, Paper, or Scissors??');

            if(playerSelection=='rock' || playerSelection=='paper' || playerSelection=='scissors')
                invalid= !invalid;

        }while(invalid);
    }
    //testing
    //console.log('computerSelection = ' + computerSelection);
    //console.log('playerSelection = ' + playerSelection);

    console.log('\n       1... 2... 3... ROCK, PAPER, SCISSORS!');

    //we can refer to lexicographical order to compare selection strings

    if(computerSelection==playerSelection)
        return '       Draw!';
    //draw
    else if (playerSelection=='rock')
    {
        if (computerSelection=='paper')
            return '       You Lose! Paper beats Rock';
        else
            return '       You Win! Rock beats Scissors';
    }
    //rock vs paper/scissors
    else if (playerSelection=='paper')
    {
        if (computerSelection=='rock')
            return '       You Win! Paper beats Rock';
        else
            return '       You Lose! Scissors beats Paper';
    }
    //paper vs rock/scissors
    else if (playerSelection=='scissors')
    {
        if (computerSelection=='rock')
            return '       You Lose! Rock beats Scissors'; 
        else
            return '       You Win! Scissors beats Paper';
    }
    //scissors vs rock/paper
}


//conducts five rounds, records the score, and finally, reports a winner or loser
function game(){

    let playerScore=0, computerScore=0;

    // for(let i=1; i<=5; i++)
    // {
    //     //store value of playRound(); pass prompt for user's choice
    //     let string = playRound(prompt('Rock, Paper, or Scissors?'), computerPlay());
        
    //     console.log(string);


    //     //store scores based upon return value of playRound() 
    //     if(string.indexOf('You Lose')!==-1)
    //         ++computerScore;
    //     if(string.indexOf('You Win')!==-1)
    //         ++playerScore;

    //     //log output
    //     console.log('\nRound ' + i + ' results:\n\n');
    //     console.log('player = ' + playerScore);
    //     console.log('computer = ' + computerScore + '\n\n');
            
    // }



    //log final result
    if(playerScore==computerScore)
        console.log("It's a DRAW!");
    else if (playerScore > computerScore)
        console.log("You're the WINNER!");
    else
        console.log("You're the LOSER!");

}

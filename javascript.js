let moves = ["Rock", "Paper", "Scissors"];
let computerMove;
let playerMove;
let playerScore = 0;
let computerScore = 0;

function computerPlay()
{  
  computerMove = moves[Math.floor(Math.random()*2.999)];
  console.log("Computer plays " + computerMove + ".");
  return computerMove;
}

function playerPlay()
{
  let moveKey = 'A';
  while (moveKey.toUpperCase() != 'R' && moveKey.toUpperCase() != 'P' && moveKey.toUpperCase() != 'S')
    {
  moveKey = prompt("What's your move ? (R)ock, (P)aper or (S)cissors?");
    }
  switch (moveKey.toUpperCase())
    {
      case "R":
        playerMove = "Rock";
        break;
      case "P":
        playerMove = "Paper";
        break;
      case "S":
        playerMove = "Scissors";     
        break;
      default : 
        playerMove = "unknown move";
    }
  console.log("You chose " + playerMove + ".");
  return playerMove;
}

function playerWins()
{
  console.log("Player wins !")
  playerScore++;
  alert('Player wins ! > Player : ' + playerScore + ' - Computer : ' + computerScore );     
}

function computerWins()
{
  console.log("Computer wins !")
  computerScore++;
  alert('Computer wins ! > Player : ' + playerScore + ' - Computer : ' + computerScore );     
}

function computeResult(playerMove, computerMove)
{
  console.log("Player: " + playerMove + " vs Computer : " + computerMove);
  if (playerMove == computerMove)
    {
      console.log("DRAW !");
      alert('DRAW ! > Player : ' + playerScore + ' - Computer : ' + computerScore );
    }
  else if (playerMove == "Rock")
    {
      if (computerMove == "Paper")
      {
        computerWins();           
      }        
      else
        {
          playerWins();        
        }
    }
  else if (playerMove == "Paper")
    {
      if (computerMove == "Scissors")
      {
        computerWins();        
      }        
      else
        {
          playerWins();               
        }
    }
  else
    {
    if (computerMove == "Rock")
      {
        computerWins();          
      }        
      else
        {
          playerWins();               
        }
    }
}


function game()
{
  let roundNb = 0;
  let nbOfRounds = prompt('How many rounds do you want to play?');
  
  while (roundNb < nbOfRounds)
     {
      roundNb++;
      playerMove = playerPlay();
      computerMove = computerPlay();
      computeResult(playerMove, computerMove);      
     }
}

game();






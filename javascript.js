let moves = ["Rock", "Paper", "Scissors"];
let computerMove;
let playerMove;

function computerPlay()
{  
  computerMove = moves[Math.floor(Math.random()*2)];
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

function computeResult(playerMove, computerMove)
{
  console.log("Player: " + playerMove + " vs Computer : " + computerMove);
  if (playerMove == computerMove)
    {
      console.log("DRAW !")
    }
  else if (playerMove == "Rock")
    {
      if (computerMove == "Paper")
      {
          console.log("Computer wins !")
      }        
      else
        {
        console.log("Player wins !")
        }
    }
  else if (playerMove == "Paper")
    {
      if (computerMove == "Scissors")
      {
          console.log("Computer wins !")
      }        
      else
        {
        console.log("Player wins !")
        }
    }
  else
    {
    if (computerMove == "Rock")
      {
          console.log("Computer wins !")
      }        
      else
        {
        console.log("Player wins !")
        }
    }
}

playerMove = playerPlay();
computerMove = computerPlay();
computeResult(playerMove, computerMove);




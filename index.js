let humanScore = 0;
let computerScore = 0;

let noValueDetected = false;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Hey enter your choice rock,paper or scissors");
  return humanChoice;
}

function playRound() {
  let computerChoiceFunc = getComputerChoice();
  let humanChoiceFunc = getHumanChoice();
  if (computerChoiceFunc === "rock" && humanChoiceFunc === "paper") {
    humanScore++;
    alert(
      `Your choice : ${humanChoiceFunc}, Computer choice : ${computerChoiceFunc}\nYour Score : ${humanScore} , Computer Score : ${computerScore}`
    );
  } else if (computerChoiceFunc === "paper" && humanChoiceFunc === "scissors") {
    humanScore++;
    alert(
      `Your choice : ${humanChoiceFunc}, Computer choice : ${computerChoiceFunc}\nYour Score : ${humanScore} , Computer Score : ${computerScore}`
    );
  } else if (computerChoiceFunc === "scissors" && humanChoiceFunc === "rock") {
    humanScore++;
    alert(
      `Your choice : ${humanChoiceFunc}, Computer choice : ${computerChoiceFunc}\nYour Score : ${humanScore} , Computer Score : ${computerScore}`
    );
  } else if (humanChoiceFunc === "rock" && computerChoiceFunc === "paper") {
    computerScore++;
    alert(
      `Your choice : ${humanChoiceFunc}, Computer choice : ${computerChoiceFunc}\nYour Score : ${humanScore} , Computer Score : ${computerScore}`
    );
  } else if (humanChoiceFunc === "paper" && computerChoiceFunc === "scissors") {
    computerScore++;
    alert(
      `Your choice : ${humanChoiceFunc}, Computer choice : ${computerChoiceFunc}\nYour Score : ${humanScore} , Computer Score : ${computerScore}`
    );
  } else if (humanChoiceFunc === "scissors" && computerChoiceFunc === "rock") {
    computerScore++;
    alert(
      `Your choice : ${humanChoiceFunc}, Computer choice : ${computerChoiceFunc}\nYour Score : ${humanScore} , Computer Score : ${computerScore}`
    );
  } else if (humanChoiceFunc === computerChoiceFunc) {
    computerScore++;
    alert("Both of your choices are same :)");
  } else {
    alert("Oops no choice entered");
    noValueDetected = true;
  }
}

function playGame() {
  for (let n = 1; n <= 5; n++) {
    playRound();
    if (noValueDetected === true) {
      break;
    }
  }

  alert(
    `Game Over !!! Your score : ${humanScore} , Computer score : ${computerScore}`
  );

  humanScore = 0;
  computerScore = 0;
}

document.getElementById("play-game-btn").addEventListener("click", function () {
  playGame();
});

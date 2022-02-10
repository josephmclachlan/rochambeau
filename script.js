const gameElements = ['rock', 'paper', 'scissors']


let btn = document.querySelectorAll('button');

for (const i of btn) {
i.addEventListener('click', register)
}

function register() {
playRound(this.value);
}

let computerPlayer = document.getElementById('computerCounter');

let userPlayer = document.getElementById('playerCounter');

let roundDisplay = document.getElementById('roundDisplay');

let computerCounter = 0;

let userCounter = 0;

let roundCounter = 0;


function updateComputerCounter() {
  computerCounter += 1;
  if (computerCounter === 5) {
  computerPlayer.innerHTML = `Computer Wins: ${computerCounter}`;
  alert(`Game Over! Computer Wins`);
  newGame();
  } else {
    computerPlayer.innerHTML = `Computer Wins: ${computerCounter}`;
  }
}

function updatePlayerCounter() {
  userCounter += 1;
  if (userCounter === 5) {
  userPlayer.innerHTML = `Player Wins: ${userCounter}`;
  alert(`Game Over! Player Wins`);
  newGame();
    } else {
      userPlayer.innerHTML = `Player Wins: ${userCounter}`;
    }
}

function computerPlay() {
return gameElements[Math.floor(Math.random() * gameElements.length)]
}

function newGame() {
const newGame = confirm('Would you like to play a new game?')
if (newGame === true) {
  userCounter = 0;
  roundCounter = 0;
  computerCounter = 0;
  roundDisplay.innerHTML = `Rounds Played: ${roundCounter}`;
  computerPlayer.innerHTML = `Computer Wins: ${computerCounter}`;
  userPlayer.innerHTML = `Player Wins: ${userCounter}`;
} else {
  return;
}
}

function playRound (logEvent) {
const playerChoice = logEvent;
const computerChoice = computerPlay();
if (userCounter === 5 || computerCounter === 5){
  alert('Game Over');
  newGame();
}
if (roundCounter === 0) {
  roundCounter += 1;
  roundDisplay.innerHTML = `Rounds Played: ${roundCounter}`;
  computerPlayer.innerHTML = `Computer Wins: ${computerCounter}`;
  userPlayer.innerHTML = `Player Wins: ${userCounter}`;
  alert('Good Luck!');
} else {
  roundCounter += 1;
  roundDisplay.innerHTML = `Rounds Played: ${roundCounter}`;
}
if (playerChoice.toLowerCase() === 'rock') {
  if (computerChoice === 'scissors') {
  alert(`You win! ${playerChoice.toLowerCase()} beats ${computerChoice} `)
  updatePlayerCounter();
} else if (computerChoice === 'paper') {
  alert(`You lose! ${computerChoice} beats ${playerChoice.toLowerCase()} `)
  updateComputerCounter();
} else {
  alert('Tie game!')

}
} else if (playerChoice.toLowerCase() === 'scissors') {
    if (computerChoice === 'paper') {
    alert(`You win! ${playerChoice.toLowerCase()} beats ${computerChoice} `)
    updatePlayerCounter();
  } else if (computerChoice === 'rock') {
    alert(`You lose! ${computerChoice} beats ${playerChoice.toLowerCase()} `)
    updateComputerCounter();
  } else {
    alert('Tie game!')
  }
} else if (playerChoice.toLowerCase() === 'paper') {
    if (computerChoice === 'rock') {
    alert(`You win! ${playerChoice.toLowerCase()} beats ${computerChoice} `)
    updatePlayerCounter();
  } else if (computerChoice === 'scissors') {
    alert(`You lose! ${computerChoice} beats ${playerChoice.toLowerCase()} `)
    updateComputerCounter();
  } else {
    alert('Tie game!')
  }
} else {
  alert(` Error: ${playerChoice} is not a proper choice`);
}
}
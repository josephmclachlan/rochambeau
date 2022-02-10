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
  computerPlayer.innerHTML = `Computer Wins: ${computerCounter}`;
}

function updatePlayerCounter() {
  userCounter += 1;
  userPlayer.innerHTML = `Player Wins: ${userCounter}`;
}

function computerPlay() {
return gameElements[Math.floor(Math.random() * gameElements.length)]
}

function playRound (logEvent) {
const playerChoice = logEvent;
const computerChoice = computerPlay();
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
    return "Win";
  } else if (computerChoice === 'rock') {
    alert(`You lose! ${computerChoice} beats ${playerChoice.toLowerCase()} `)
    return "Loss";
  } else {
    alert('Tie game!')
    return "Tie";
  }
} else if (playerChoice.toLowerCase() === 'paper') {
    if (computerChoice === 'rock') {
    alert(`You win! ${playerChoice.toLowerCase()} beats ${computerChoice} `)
    return "Win";
  } else if (computerChoice === 'scissors') {
    alert(`You lose! ${computerChoice} beats ${playerChoice.toLowerCase()} `)
    return "Loss";
  } else {
    alert('Tie game!')
    return "Tie";
  }
} else {
  alert(` Error: ${playerChoice} is not a proper choice`);
}
}





//function to run 5 rounds of RPS and return counters of wins vs losses with final win/loss declaration
// function game() {

//   const roundOne = playRound()

//   if (roundOne === "Win") {
//     ++winCounter
//   } else if (roundOne === "Loss") {
//     ++lossCounter
//   } 

//   console.log(` Wins: ${winCounter} Losses: ${lossCounter}`);

//   const roundTwo = playRound()

//   if (roundTwo === "Win") {
//     ++winCounter
//   } else if (roundTwo === "Loss") {
//     ++lossCounter
//   } 

//   console.log(` Wins: ${winCounter} Losses: ${lossCounter}`);

//   const roundThree = playRound()

//   if (roundThree === "Win") {
//     ++winCounter
//   } else if (roundThree === "Loss") {
//     ++lossCounter
//   } 

//   console.log(` Wins: ${winCounter} Losses: ${lossCounter}`);

//   const roundFour = playRound()

//   if (roundFour === "Win") {
//     ++winCounter
//   } else if (roundFour === "Loss") {
//     ++lossCounter
//   } 

//   console.log(` Wins: ${winCounter} Losses: ${lossCounter}`);

//   const roundFive = playRound()

//   if (roundFive === "Win") {
//     ++winCounter
//   } else if (roundFive === "Loss") {
//     ++lossCounter
//   }

//   console.log(` Wins: ${winCounter} Losses: ${lossCounter}`);

//   if (winCounter > lossCounter) {
//     alert(`You win! ${winCounter} to ${lossCounter}`)
//     winCounter = 0
//     lossCounter = 0
//   } else if (winCounter < lossCounter) {
//     alert(`You lose! ${lossCounter} to ${winCounter}`)
//     winCounter = 0
//     lossCounter = 0
//   } else {
//     alert(`Tie game! ${winCounter} to ${lossCounter}`)
//     winCounter = 0
//     lossCounter = 0
//   }

// } 

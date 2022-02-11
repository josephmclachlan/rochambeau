const gameElements = ['Pistol', 'Flagon', 'Cutlass']


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

let playerCombat = document.getElementById('combat-display_player');

let vsCombat = document.getElementById('combat-display_vs');

let computerCombat = document.getElementById('combat-display_computer');

let announcer = document.getElementById('announcer');

let announcerText;


function updateAnnouncer(string) {
  let announcement = string;
  setTimeout(() => {
    const innerText = announcement
    announcer.innerHTML = `${innerText}`
  }, 500);
}


function updateComputerCounter() {
  computerCounter += 1;
  if (computerCounter === 5) {
  computerPlayer.innerHTML = `Computer Wins: ${computerCounter}`;
  updateAnnouncer(`Game Over! Computer Wins`);
  newGame();
  } else {
    computerPlayer.innerHTML = `Computer Wins: ${computerCounter}`;
  }
}

function updatePlayerCounter() {
  userCounter += 1;
  if (userCounter === 5) {
  userPlayer.innerHTML = `Player Wins: ${userCounter}`;
  updateAnnouncer(`Game Over! Player Wins`);
  newGame();
    } else {
      userPlayer.innerHTML = `Player Wins: ${userCounter}`;
    }
}

function computerPlay() {
  return gameElements[Math.floor(Math.random() * gameElements.length)]
}

function newGame() {
  for (const i of btn) {
    i.disabled = true;
  }
  vsCombat.innerHTML= '<button><img id="button_new-game" src="./Images/newgame.png" alt="New Game"></button>';
  const newGameButton = document.getElementById('button_new-game');
  newGameButton.addEventListener('click', restart)
  function restart(){
    userCounter = 0;
    roundCounter = 0;
    computerCounter = 0;
    roundDisplay.innerHTML = `Rounds Played: ${roundCounter}`;
    computerPlayer.innerHTML = `Computer Wins: ${computerCounter}`;
    userPlayer.innerHTML = `Player Wins: ${userCounter}`;
    playerCombat.innerHTML = '';
    vsCombat.innerHTML = '';
    computerCombat.innerHTML = '';
    announcer.innerHTML = 'Good Luck!'
    for (const i of btn) {
      i.disabled = false;
  }
  }
}

function playerAnimation(playerChoice){
  if (playerChoice === 'Pistol') {
    playerCombat.innerHTML = '<img class="combat-display_img animate__zoomInLeft" src="./Images/pistol.png" alt="pistol">';
  } else if (playerChoice === 'Cutlass') {
    playerCombat.innerHTML = '<img class="combat-display_img animate__zoomInLeft" src="./Images/cutlass.png" alt="Cutlass">';
  } else if (playerChoice === 'Flagon') {
    playerCombat.innerHTML = '<img class="combat-display_img animate__zoomInLeft" src="./Images/flagon.png" alt="Flagon">'
  }
}

function vsAnimation() {
  vsCombat.innerHTML= '<img class="combat-display_img" src="./Images/vs.png" alt="vs">';
}

function computerAnimation(computerChoice) {
  if (computerChoice === 'Pistol') {
    computerCombat.innerHTML = '<img class="combat-display_img animate__zoomInRight" src="./Images/pistol.png" alt="pistol">';
  } else if (computerChoice === 'Cutlass') {
    computerCombat.innerHTML = '<img class="combat-display_img animate__zoomInRight" src="./Images/cutlass.png" alt="Cutlass">';
  } else if (computerChoice === 'Flagon') {
    computerCombat.innerHTML = '<img class="combat-display_img animate__zoomInRight" src="./Images/flagon.png" alt="Flagon">'
  }
}

function fightAnimation(playerChoice, computerChoice) {
  playerAnimation(playerChoice);
  vsAnimation();
  computerAnimation(computerChoice);
}

function playRound (logEvent) {
  const playerChoice = logEvent;
  const computerChoice = computerPlay();
  announcer.innerHTML = '';
  if (userCounter >= 5 || computerCounter >= 5){
    updateAnnouncer('Game Over');
    return newGame();
  }
  roundCounter += 1;
  roundDisplay.innerHTML = `Rounds Played: ${roundCounter}`;
  fightAnimation(playerChoice, computerChoice);
  if (playerChoice === 'Pistol') {
    if (computerChoice === 'Cutlass') {
    updateAnnouncer(`You win! ${playerChoice} beats ${computerChoice} `)
    updatePlayerCounter();
  } else if (computerChoice === 'Flagon') {
    updateAnnouncer(`You lose! ${computerChoice} beats ${playerChoice} `)
    updateComputerCounter();
  } else {
    updateAnnouncer('Tie game!')

  }
  } else if (playerChoice === 'Cutlass') {
      if (computerChoice === 'Flagon') {
      updateAnnouncer(`You win! ${playerChoice} beats ${computerChoice} `)
      updatePlayerCounter();
    } else if (computerChoice === 'Pistol') {
      updateAnnouncer(`You lose! ${computerChoice} beats ${playerChoice} `)
      updateComputerCounter();
    } else {
      updateAnnouncer('Tie game!')
    }
  } else if (playerChoice === 'Flagon') {
      if (computerChoice === 'Pistol') {
      updateAnnouncer(`You win! ${playerChoice} beats ${computerChoice} `)
      updatePlayerCounter();
    } else if (computerChoice === 'Cutlass') {
      updateAnnouncer(`You lose! ${computerChoice} beats ${playerChoice} `)
      updateComputerCounter();
    } else {
      updateAnnouncer('Tie game!')
    }
  } else {
    updateAnnouncer(` Error: ${playerChoice} is not a proper choice`);
  }
}
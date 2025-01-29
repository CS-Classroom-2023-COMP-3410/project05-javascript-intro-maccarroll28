// DOM Elements
const gameBoard = document.getElementById("game-board");
const movesElement = document.getElementById("moves");
const timeElement = document.getElementById("time");
const restartBtn = document.getElementById("restart-btn");

// Game Variables
let cards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let timer = null;
let secondsElapsed = 0;

// Card Symbols (use emojis or any icons)
const cardSymbols = ["🍎", "🍌", "🍇", "🍒", "🍓", "🍍", "🥝", "🍉"];

// Initialize the game
function initGame() {
  resetGame();
  createCards();
  startTimer();
}

// Reset the game
function resetGame() {
  cards = [];
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  moves = 0;
  secondsElapsed = 0;
  movesElement.textContent = moves;
  timeElement.textContent = "0:00";
  clearInterval(timer);
  gameBoard.innerHTML = "";
}

// Create and shuffle cards
function createCards() {
  const shuffledSymbols = [...cardSymbols, ...cardSymbols].sort(() => Math.random() - 0.5);

  shuffledSymbols.forEach((symbol) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbol;
    card.innerHTML = `
      <div class="front"></div>
      <div class="back">${symbol}</div>
    `;
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
    cards.push(card);
  });
}

// Flip a card
function flipCard() {
  if (lockBoard || this === firstCard || this.classList.contains("matched")) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  checkMatch();
}

// Check for a match
function checkMatch() {
  lockBoard = true;
  moves++;
  movesElement.textContent = moves;

  if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
    disableCards();
  } else {
    unflipCards();
  }
}

// Disable matched cards
function disableCards() {
  firstCard.classList.add("matched");
  secondCard.classList.add("matched");

  resetBoard();
  if (cards.every(card => card.classList.contains("matched"))) {
    clearInterval(timer);
    alert(`You won! Moves: ${moves}, Time: ${formatTime(secondsElapsed)}`);
  }
}

// Unflip unmatched cards
function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
}

// Reset board variables
function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

// Start the game timer
function startTimer() {
  timer = setInterval(() => {
    secondsElapsed++;
    timeElement.textContent = formatTime(secondsElapsed);
  }, 1000);
}

// Format time in minutes:seconds
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

// Restart the game
restartBtn.addEventListener("click", initGame);

// Start the game on load
initGame();

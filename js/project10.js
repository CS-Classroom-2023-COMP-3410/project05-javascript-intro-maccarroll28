const difficultySelect = document.getElementById("difficulty");
const startButton = document.getElementById("start-btn");
const typingContainer = document.getElementById("typing-container");
const targetText = document.getElementById("target-text");
const userInput = document.getElementById("user-input");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");
const resultsContainer = document.getElementById("results-container");
const finalWpmElement = document.getElementById("final-wpm");
const finalAccuracyElement = document.getElementById("final-accuracy");
const restartButton = document.getElementById("restart-btn");

let textToType = "";
let startTime = null;
let totalCharacters = 0;
let correctCharacters = 0;
let typedCharacters = 0;
let timerRunning = false;

// Random text generator
function generateText(difficulty) {
  const easyWords = ["cat", "dog", "fish", "bird", "tree"];
  const mediumPhrases = [
    "The quick brown fox jumps over the lazy dog",
    "Typing is fun and improves speed",
    "JavaScript powers the web"
  ];
  const hardPhrases = [
    "Code with @special #characters & symbols!",
    "Typing$ can% be challenging but rewarding",
    "Speed is key: ~accuracy~ ensures success!"
  ];

  if (difficulty === "easy") {
    return easyWords.sort(() => Math.random() - 0.5).slice(0, 5).join(" ");
  } else if (difficulty === "medium") {
    return mediumPhrases[Math.floor(Math.random() * mediumPhrases.length)];
  } else if (difficulty === "hard") {
    return hardPhrases[Math.floor(Math.random() * hardPhrases.length)];
  }
}

// Start typing game
function startGame() {
  const difficulty = difficultySelect.value;
  textToType = generateText(difficulty);
  targetText.textContent = textToType;
  userInput.value = "";
  userInput.focus();

  // Reset variables
  totalCharacters = textToType.length;
  correctCharacters = 0;
  typedCharacters = 0; // Keeps track of total keys typed, including mistakes
  startTime = null;
  timerRunning = false;

  // Show typing container, hide results
  typingContainer.style.display = "block";
  resultsContainer.style.display = "none";
}

// Handle user input
function handleInput() {
  const inputText = userInput.value;

  // Start the timer on first input
  if (!timerRunning) {
    startTime = Date.now();
    timerRunning = true;
  }

  // Check correctness and highlight errors
  const targetChars = textToType.split("");
  const inputChars = inputText.split("");

  correctCharacters = 0;
  let html = "";

  targetChars.forEach((char, index) => {
    if (inputChars[index] === char) {
      html += `<span class="correct">${char}</span>`;
      correctCharacters++;
    } else if (inputChars[index] === undefined) {
      html += `<span>${char}</span>`;
    } else {
      html += `<span class="wrong">${char}</span>`;
    }
  });

  targetText.innerHTML = html;

  // Track typed characters
  typedCharacters = inputText.length;

  // Calculate WPM and accuracy
  const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
  const wpm = Math.round((correctCharacters / 5 / timeElapsed) || 0); // 1 word = 5 chars
  const accuracy = Math.round((correctCharacters / typedCharacters) * 100) || 0;

  wpmElement.textContent = wpm;
  accuracyElement.textContent = accuracy;

  // Check if typing is complete
  if (inputText === textToType) {
    finishGame(wpm, accuracy);
  }
}

// Finish typing game
function finishGame(wpm, accuracy) {
  // Display results
  finalWpmElement.textContent = wpm;
  finalAccuracyElement.textContent = accuracy;

  typingContainer.style.display = "none";
  resultsContainer.style.display = "block";
}

// Event listeners
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);
userInput.addEventListener("input", handleInput);

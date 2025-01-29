// Story structure
const storyNodes = {
    1: {
      text: "You wake up in a dark forest. Do you want to explore the forest or stay where you are?",
      choices: [
        { text: "Explore the forest", nextNode: 2 },
        { text: "Stay where you are", nextNode: 3 }
      ]
    },
    2: {
      text: "As you explore, you come across a river. Do you want to follow the river or cross it?",
      choices: [
        { text: "Follow the river", nextNode: 4 },
        { text: "Cross the river", nextNode: 5 }
      ]
    },
    3: {
      text: "You stayed in place, but the night grows colder. Eventually, you fall asleep and wake up to safety.",
      choices: [
        { text: "Restart the game", nextNode: 1, resetProgress: true }
      ]
    },
    4: {
      text: "Following the river, you find a small village where the locals help you. You’ve found safety!",
      choices: [
        { text: "Restart the game", nextNode: 1, resetProgress: true }
      ]
    },
    5: {
      text: "Crossing the river was risky. You slipped and fell into the current. You didn’t make it.",
      choices: [
        { text: "Restart the game", nextNode: 1, resetProgress: true }
      ]
    }
  };
  
  // DOM Elements
  const storyTextElement = document.getElementById("story-text");
  const choicesContainer = document.getElementById("choices-container");
  const resetButton = document.getElementById("reset-btn");
  const progressBar = document.getElementById("progress-bar");
  
  // Variables
  let currentNode = 1;
  let totalNodes = Object.keys(storyNodes).length;
  let completedNodes = 0;
  
  // Save progress to localStorage
  function saveProgress() {
    const progressData = {
      currentNode,
      completedNodes
    };
    localStorage.setItem("storyProgress", JSON.stringify(progressData));
  }
  
  // Load progress from localStorage
  function loadProgress() {
    const savedProgress = localStorage.getItem("storyProgress");
    if (savedProgress) {
      const { currentNode: savedNode, completedNodes: savedCompleted } = JSON.parse(savedProgress);
      currentNode = savedNode;
      completedNodes = savedCompleted;
    } else {
      currentNode = 1;
      completedNodes = 0;
    }
  }
  
  // Update the progress bar
  function updateProgress() {
    const progressPercentage = (completedNodes / totalNodes) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  }
  
  // Render the current story node
  function renderNode() {
    const node = storyNodes[currentNode];
    storyTextElement.textContent = node.text;
  
    // Clear previous choices
    choicesContainer.innerHTML = "";
  
    // Render choices
    node.choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.addEventListener("click", () => {
        // Reset progress if the choice has a resetProgress condition
        if (choice.resetProgress) {
          currentNode = 1;
          completedNodes = 0;
          saveProgress();
          updateProgress();
        } else {
          currentNode = choice.nextNode;
          completedNodes++;
          saveProgress();
          updateProgress();
        }
        renderNode();
      });
      choicesContainer.appendChild(button);
    });
  }
  
  // Reset the game manually
  resetButton.addEventListener("click", () => {
    currentNode = 1;
    completedNodes = 0;
    saveProgress();
    updateProgress();
    renderNode();
  });
  
  // Initialize the game
  loadProgress();
  updateProgress();
  renderNode();
  
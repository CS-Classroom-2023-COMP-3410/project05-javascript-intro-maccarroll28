const arrayContainer = document.getElementById("array-container");
const algorithmSelect = document.getElementById("algorithm");
const speedInput = document.getElementById("speed");
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");
const commentary = document.getElementById("commentary");

let array = [];
let isSorting = false;

// Generate a random array
function generateArray(size = 20) {
  array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
  renderArray();
}

// Render the array as bars
function renderArray() {
  arrayContainer.innerHTML = "";
  array.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}%`;
    bar.dataset.index = index;
    arrayContainer.appendChild(bar);
  });
}

// Sleep function to control animation speed
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Bubble Sort Algorithm
async function bubbleSort() {
  commentary.textContent = "Starting Bubble Sort...";
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      const bar1 = arrayContainer.children[j];
      const bar2 = arrayContainer.children[j + 1];

      bar1.style.backgroundColor = "red";
      bar2.style.backgroundColor = "red";

      if (array[j] > array[j + 1]) {
        commentary.textContent = `Swapping ${array[j]} and ${array[j + 1]}`;
        await sleep(speedInput.value);

        // Swap values
        [array[j], array[j + 1]] = [array[j + 1], array[j]];

        // Re-render bars
        renderArray();
      }
      bar1.style.backgroundColor = "";
      bar2.style.backgroundColor = "";
    }
  }
  commentary.textContent = "Bubble Sort Complete!";
  isSorting = false;
}

// Insertion Sort Algorithm
async function insertionSort() {
  commentary.textContent = "Starting Insertion Sort...";
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    const keyBar = arrayContainer.children[i];
    keyBar.style.backgroundColor = "red";

    while (j >= 0 && array[j] > key) {
      commentary.textContent = `Moving ${array[j]} to the right`;
      await sleep(speedInput.value);

      array[j + 1] = array[j];
      j--;

      renderArray();
    }
    array[j + 1] = key;

    keyBar.style.backgroundColor = "";
  }
  commentary.textContent = "Insertion Sort Complete!";
  isSorting = false;
}

// Start Sorting
startButton.addEventListener("click", async () => {
  if (isSorting) return;
  isSorting = true;

  const selectedAlgorithm = algorithmSelect.value;
  if (selectedAlgorithm === "bubble") {
    await bubbleSort();
  } else if (selectedAlgorithm === "insertion") {
    await insertionSort();
  }
});

// Reset Array
resetButton.addEventListener("click", () => {
  if (isSorting) return;
  commentary.textContent = "Array reset.";
  generateArray();
});

// Initialize the app
generateArray();

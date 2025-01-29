let currentInput = ''; // Holds the current input
let memory = 0; // Memory storage for MS/MR functions

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function appendOperator(operator) {
  currentInput += ` ${operator} `;
  document.getElementById('display').value = currentInput;
}

function calculate() {
  try {
    const expression = currentInput.replace('÷', '/').replace('×', '*');
    const result = eval(expression);
    if (result === Infinity || isNaN(result)) throw new Error();
    currentInput = result.toString();
    document.getElementById('display').value = currentInput;
  } catch {
    document.getElementById('display').value = 'Error';
    currentInput = '';
  }
}

function calculateSquareRoot() {
  try {
    const number = parseFloat(currentInput);
    if (number < 0) throw new Error();
    currentInput = Math.sqrt(number).toString();
    document.getElementById('display').value = currentInput;
  } catch {
    document.getElementById('display').value = 'Error';
    currentInput = '';
  }
}

function memoryStore() {
  memory = parseFloat(currentInput) || 0;
}

function memoryRecall() {
  currentInput = memory.toString();
  document.getElementById('display').value = currentInput;
}

// script.js

let displayValue = ''; // Variable to store the current display value
let memory = 0; // Variable to store memory value

// Function to append clicked button value to display
function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

// Function to update the display with the current displayValue
function updateDisplay() {
    document.getElementById('display').textContent = displayValue || '0';
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

// Function to evaluate the expression and update display
function calculate() {
    try {
        const result = eval(displayValue);
        if (displayValue.includes('5') && displayValue.includes('6')) {
            triggerConfetti();
        }
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

// Function to trigger confetti effect
function triggerConfetti() {
    const confetti = document.getElementById('confetti');
    confetti.style.display = 'block';
    setTimeout(() => confetti.style.display = 'none', 1500);
}

// Function to toggle light/dark mode
function toggleMode() {
    document.body.classList.toggle('light-mode');
}

// Functions for scientific operations
function square() {
    try {
        displayValue = Math.pow(parseFloat(displayValue), 2).toString();
        updateDisplay();
    } catch {
        displayValue = 'Error';
        updateDisplay();
    }
}

function cube() {
    try {
        displayValue = Math.pow(parseFloat(displayValue), 3).toString();
        updateDisplay();
    } catch {
        displayValue = 'Error';
        updateDisplay();
    }
}

function squareRoot() {
    try {
        displayValue = Math.sqrt(parseFloat(displayValue)).toString();
        updateDisplay();
    } catch {
        displayValue = 'Error';
        updateDisplay();
    }
}

function cubeRoot() {
    try {
        displayValue = Math.cbrt(parseFloat(displayValue)).toString();
        updateDisplay();
    } catch {
        displayValue = 'Error';
        updateDisplay();
    }
}

function sin() {
    try {
        displayValue = Math.sin(parseFloat(displayValue) * Math.PI / 180).toString();
        updateDisplay();
    } catch {
        displayValue = 'Error';
        updateDisplay();
    }
}

function cos() {
    try {
        displayValue = Math.cos(parseFloat(displayValue) * Math.PI / 180).toString();
        updateDisplay();
    } catch {
        displayValue = 'Error';
        updateDisplay();
    }
}

function tan() {
    try {
        displayValue = Math.tan(parseFloat(displayValue) * Math.PI / 180).toString();
        updateDisplay();
    } catch {
        displayValue = 'Error';
        updateDisplay();
    }
}

function log10() {
    try {
        displayValue = Math.log10(parseFloat(displayValue)).toString();
        updateDisplay();
    } catch {
        displayValue = 'Error';
        updateDisplay();
    }
}

function ln() {
    try {
        displayValue = Math.log(parseFloat(displayValue)).toString();
        updateDisplay();
    } catch {
        displayValue = 'Error';
        updateDisplay();
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function factorialOperation() {
    try {
        let value = parseInt(displayValue, 10);
        if (value < 0) {
            displayValue = 'Error';
        } else {
            displayValue = factorial(value).toString();
        }
        updateDisplay();
    } catch {
        displayValue = 'Error';
        updateDisplay();
    }
}

function clearMemory() {
    memory = 0;
}

function memoryAdd() {
    try {
        memory += parseFloat(displayValue);
    } catch {
        memory = 0;
    }
}

function memorySubtract() {
    try {
        memory -= parseFloat(displayValue);
    } catch {
        memory = 0;
    }
}

function memoryRecall() {
    displayValue = memory.toString();
    updateDisplay();
}

// Function to handle button clicks
function handleButtonClick(value) {
    if (value === 'C') {
        clearDisplay();
    } else if (value === '=') {
        calculate();
    } else if (value === 'M+') {
        memoryAdd();
    } else if (value === 'M-') {
        memorySubtract();
    } else if (value === 'MR') {
        memoryRecall();
    } else {
        appendToDisplay(value);
    }
}

function appendToDisplay(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        if (lastEntryWasOperator) {
            // Replace the last operator if consecutive operators are entered
            displayValue = displayValue.slice(0, -1) + value;
        } else {
            displayValue += value;
        }
        lastEntryWasOperator = true;
    } else {
        displayValue += value;
        lastEntryWasOperator = false;
    }
    updateDisplay();
}

// Function to update the display with the current displayValue
function updateDisplay() {
    document.getElementById('display').textContent = displayValue || '0';
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

// Function to evaluate the expression and update display
function calculate() {
    try {
        const result = eval(displayValue);
        if (displayValue.includes('5') && displayValue.includes('6')) {
            triggerConfetti();
        }
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

// Function to trigger confetti effect
function triggerConfetti() {
    const confetti = document.getElementById('confetti');
    confetti.style.display = 'block';
    setTimeout(() => confetti.style.display = 'none', 1500);
}

// Function to toggle light/dark mode
function toggleMode() {
    document.body.classList.toggle('light-mode');
}

// Function to clear the display and reset memory
function clearAll() {
    clearDisplay();
    clearMemory();
}

// Event listener to handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearAll();
    }
});
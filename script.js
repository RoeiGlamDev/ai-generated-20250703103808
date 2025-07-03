// Get the input field and button elements
const inputField = document.getElementById('input-field');
const clearButton = document.getElementById('clear-button');
const backspaceButton = document.getElementById('backspace-button');
const divideButton = document.getElementById('divide-button');
const multiplyButton = document.getElementById('multiply-button');
const subtractButton = document.getElementById('subtract-button');
const addButton = document.getElementById('add-button');
const equalsButton = document.getElementById('equals-button');
const numberButtons = document.querySelectorAll('.button-grid button:not(.button-grid button:first-child, .button-grid button:nth-child(2), .button-grid button:nth-child(3), .button-grid button:nth-child(4), .button-grid button:last-child)');

// Initialize the input field value
let inputValue = '';

// Add event listeners to the buttons
clearButton.addEventListener('click', () => {
  inputValue = '';
  inputField.value = '';
});

backspaceButton.addEventListener('click', () => {
  inputValue = inputValue.slice(0, -1);
  inputField.value = inputValue;
});

divideButton.addEventListener('click', () => {
  inputValue += '/';
  inputField.value = inputValue;
});

multiplyButton.addEventListener('click', () => {
  inputValue += '*';
  inputField.value = inputValue;
});

subtractButton.addEventListener('click', () => {
  inputValue += '-';
  inputField.value = inputValue;
});

addButton.addEventListener('click', () => {
  inputValue += '+';
  inputField.value = inputValue;
});

equalsButton.addEventListener('click', () => {
  try {
    const result = eval(inputValue);
    inputField.value = result;
    inputValue = result.toString();
  } catch (error) {
    inputField.value = 'Error';
    inputValue = '';
  }
});

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    inputValue += button.textContent;
    inputField.value = inputValue;
  });
});

// Add fade-in animation to the calculator
document.addEventListener('DOMContentLoaded', () => {
  const calculator = document.querySelector('.calculator');
  calculator.classList.add('fade-in');
});
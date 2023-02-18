// Get the form element
const form = document.querySelector('form');

// Get the input and select elements
const num1Input = document.querySelector('#num1');
const num2Input = document.querySelector('#num2');
const operationSelect = document.querySelector('#operation');

// Get the result element
const resultElement = document.querySelector('#result');

// Add an event listener to the form element
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the input and select elements
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operation = operationSelect.value;

  // Calculate the result based on the selected operation
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Please select an operation';
  }

  // Display the result in the result element
  resultElement.textContent = result;
});

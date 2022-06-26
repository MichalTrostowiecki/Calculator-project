const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const display = calculator.querySelector('.display')


keys.addEventListener('click', event => {
  //this statements make sure if I click in between buttons it won't produce any results
  if (!event.target.closest('button')) return;

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calculator.dataset;

// we're checking if this is a number or operator that is pressed
  if(type === 'number') {
    if (displayValue === '0') {
      display.textContent = keyValue;
    } else if (previousKeyType === 'operator') {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
    calculator.dataset.previousKeyType = 'number'
}
  
  if (type === 'operator') {
    const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
    operatorKeys.forEach(el => {el.dataset.state = ''})
    key.dataset.state = 'selected'

    calculator.dataset.firstNumber = displayValue;
    calculator.dataset.operator = key.dataset.key;
  }

  if (type === 'equal') {

    const firstNumber = calculator.dataset.firstNumber;
    const operator = calculator.dataset.operator;
    const secondNumber = displayValue;
    display.textContent = calculate(firstNumber, operator, secondNumber);
  }

  calculator.dataset.previousKeyType = type;
});

function calculate (firstNumber, operator, secondNumber) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  let result = '';
  if (operator === 'plus') result =  firstNumber + secondNumber;
  if (operator === 'minus') result = firstNumber - secondNumber
  if (operator === 'times') result = firstNumber * secondNumber
  if (operator === 'divide') result = firstNumber / secondNumber
  return result
}


































const add = (a, b) => {
  return console.log(a + b);
}

const subtract = (a, b) => {
  return console.log(a - b);
}

const multiply = (a, b) => {
  return console.log(a * b);
}

const divide = (a, b) => {
  return console.log(a / b);
}

//This function takes an operator and calls the function on the numbers;
const operate = (operator, a, b) => {
   console.log(operator(a, b));
}


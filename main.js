const keys = document.querySelector('.calculator-keys');
const display = document.querySelector('.display')

keys.addEventListener('click', event => {
  //this statements make sure if I click in between buttons it won't produce any results
  if (!event.target.closest('button')) return;
  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;


  if(key.classList.contains('number')) {
    if (displayValue === '0') {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
}
});

































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


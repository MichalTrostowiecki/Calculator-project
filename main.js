const digitsNumbers = document.querySelector(".digits-numbers");

digitsNumbers.addEventListener('click', (event) => {
  return console.log(event.type);
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


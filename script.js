// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Function to modulo of two numbers
function modulo(a,b){
  if (b === 0){
    throw new Error("Modulo 0 is not possible");
  }
  return a % b;
}

// Function to get the selected operator
function getOperator() {
  let operator = document.getElementById("operator").value;
  // I am using switch cases rather than multiple if-elses and here I don't need break statement as I am returning the  function name.
  switch (operator) {
    case "+":
      return add;
    case "-":
      return subtract;
    case "*":
      return multiply;
    case "/":
      return divide;
    case "%":
      return modulo;
    default:
      throw new Error("Invalid operator");
  }
}

// grabbing form and answer span from DOM
let calculator = document.getElementById('calculator');
let answerSpan = document.getElementById("answer");

// Adding eventlistener and arrow function to calculate the answer
calculator.addEventListener('submit', (e) => {
  // Preventing submission of form
  e.preventDefault();
  // try catch blocks
  try {
    // Taking input value and parsing for floating points
    let operand1 = Number(document.getElementById("operand1").value);
    let operand2 = Number(document.getElementById("operand2").value);

    // Checking for empty input
    if(!(isNaN(operand1) || isNaN(operand2))){
        let operator = getOperator();
        // Rounding off to 2 decimal points.
        let answer = Number(operator(operand1, operand2).toFixed(2));
        answerSpan.innerHTML = ("Answer: " + answer);
        // Reseting the form after showing result
        calculator.reset();
    } else{
      alert("Enter correct operands");
    }
  } catch (error) {
      alert(error.message);
  }
});
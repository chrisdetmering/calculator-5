let firstOperand = ''; //3 
let secondOperand = ''; //''
let operation = ''; //+

document.querySelectorAll('.number')
  .forEach(numberButton => {
    numberButton.addEventListener('click', () => {
      const selectedNumber = numberButton.textContent;

      if (!isOperation()) {
        firstOperand += selectedNumber;
        setDisplay(firstOperand);
      } else {
        secondOperand += selectedNumber;
        setDisplay(secondOperand);
      }

    })
  })


document.querySelectorAll(".operator")
  .forEach(operatorButton => {
    operatorButton.addEventListener("click", () => {
      const selectedOperation = operatorButton.textContent;

      if (isFirstOperand()) {
        operation = selectedOperation;
      }

    })
  })

document.getElementById("equals")
  .addEventListener("click", e => {
    if (isSecondOperand()) {
      const result = calculate();
      firstOperand = result;
      secondOperand = '';
      operation = '';
      setDisplay(result);
    }

    //handle second operation click
  })

//Handle pressing decimal 

//Helper Functions 
function isOperation() {
  return !!operation
}

function setDisplay(value) {
  document.getElementById("output-box").value = value;
}

function isFirstOperand() {
  return !!firstOperand;
}

function isSecondOperand() {
  return !!secondOperand;
}

function calculate() {
  switch (operation) {
    case "+":
      return add();
    case "-":
      return subtract();
    case "x":
      return multiply();
    case "/":
      return divide();
  }
}


function add() {
  return `${Number(firstOperand) + Number(secondOperand)}`;
}

function subtract() {
  return `${Number(firstOperand) - Number(secondOperand)}`;
}

function multiply() {
  return `${Number(firstOperand) * Number(secondOperand)}`;
}

function divide() {
  return `${Number(firstOperand) / Number(secondOperand)}`;
}

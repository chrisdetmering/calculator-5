let firstOperand = '';
let operation = '';
let secondOperand = '';


document.querySelectorAll(".number")
  .forEach(numberButton => {
    numberButton.addEventListener("click", handleNumberClick);
  });

document.querySelectorAll(".operator").forEach(operationButton => {
  operationButton.addEventListener("click", e => {
    const selectedOperation = e.target.value;
    if (firstOperand && !operation) {
      operation = selectedOperation;
      return;
    }

    if (operation) {
      const result = calculate();
      firstOperand = result;
      secondOperand = '';
      operation = selectedOperation;
      setDisplay(result);
    }
  })
})

document.getElementById("equals")
  .addEventListener("click", () => {
    if (secondOperand) {
      const result = calculate();
      firstOperand = result;
      secondOperand = '';
      operation = '';
      setDisplay(result);
    }
  })



function handleNumberClick(e) {
  const selectedNumber = e.target.value;
  if (!operation) {
    firstOperand += selectedNumber;
    setDisplay(firstOperand);
  } else {
    secondOperand += selectedNumber;
    setDisplay(secondOperand);
  }
}


document.querySelector('#clear')
  .addEventListener("click", () => {
    firstOperand = '';
    operation = '';
    secondOperand = '';
    setDisplay('0');
  });

function setDisplay(value) {
  document.getElementById('output-box').value = value;
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
      return divide()
  }
}

function add() {
  return `${Number(firstOperand) + Number(secondOperand)}`
}

function subtract() {
  return `${Number(firstOperand) - Number(secondOperand)}`
}

function multiply() {
  return `${Number(firstOperand) * Number(secondOperand)}`
}

function divide() {
  return `${Number(firstOperand) / Number(secondOperand)}`
}
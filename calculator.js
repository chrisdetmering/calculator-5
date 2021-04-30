const operatorSet = new Set(["+", "-", "x", "/", "="]);
let expressionArray = [];
let numString = "";
let answer = 0;
const buttons = document.querySelectorAll("button");

 buttons.forEach(function (button) {
  button.addEventListener("click", storeNum);
});

function storeNum(event) {
  //event.preventDefault();
  let n = event.target.value;
  if (n === "C") {
    n = "";
    clearOutputBox();
  }

  if (!operatorSet.has(n)) {
    numString = numString + n;
    document.getElementById("output-box").value = numString;  
  }

  if (operatorSet.has(n)) {
    expressionArray.push(numString);
    expressionArray.push(n);
    numString = "";
  }

  if (n == "=") {
    multDiv();
    addSubt();
    //lastExpression();
  }
}

function multDiv() {
  for (i = 0; i <= expressionArray.length; i++) {
    if (expressionArray[i] == "x") {
      convertNumStringToNum();
    }
    if (expressionArray[i] == "/") {
      convertNumStringToNum();
    }
  }
}

function addSubt() {
  for (i = 0; i <= expressionArray.length; i++) {
    if (expressionArray[i] == "+") {
      convertNumStringToNum();
    }
    if (expressionArray[i] == "-") {
      convertNumStringToNum();
    }
  }
}

function lastExpression() {
  num1 = parseFloat(expressionArray[0]);
  operator = expressionArray[1];
  num2 = parseFloat(expressionArray[2]);
  answer = calculate(num1, operator, num2);
}

function convertNumStringToNum() {
  num1 = parseFloat(expressionArray[i - 1]);
  operator = expressionArray[i];
  num2 = parseFloat(expressionArray[i + 1]);
  answer = calculate(num1, operator, num2);
}

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      answer = num1 + num2;
      break;

    case "-":
      answer = num1 - num2;
      break;

    case "x":
      answer = num1 * num2;
      break;

    case "/":
      answer = num1 / num2;
  }

  replace(answer, i);
  document.getElementById("output-box").value = answer;
}

function replace(answer, i) {
  expressionArray.splice(i, 2);
  expressionArray[i - 1] = answer;
}

function clearOutputBox() {
  document.getElementById("output-box").value = "";
  expressionArray = [];
  numString = "";
}

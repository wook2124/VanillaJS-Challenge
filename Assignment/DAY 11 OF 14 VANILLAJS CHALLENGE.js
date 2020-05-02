<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <table border="1">
      <tr>
        <td colspan="3">
          <input type="text" id="display">
        </td>
        <td>C</td>
      </tr>
      <tr>
        <td onclick="add(7)">7</td>
        <td onclick="add(8)">8</td>
        <td onclick="add(9)">9</td>
        <td onclick="add('+')">+</td>
      </tr>
      <tr>
        <td onclick="add(4)">4</td>
        <td onclick="add(5)">5</td>
        <td onclick="add(6)">6</td>
        <td onclick="add('-')">-</td>
      </tr>
      <tr>
        <td onclick="add(1)">1</td>
        <td onclick="add(2)">2</td>
        <td onclick="add(3)">3</td>
        <td onclick="add('*')">*</td>
      </tr>
      <tr>
        <td colspan="2"  onclick="add(0)">0</td>
        <td onclick="add('=')">=</td>
        <td>/</td>
      </tr>
    <script src="src/index.js"></script>
  </body>
</html>


// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const display = document.getElementById("display");

function add(e) {
  display.value = display.value + e;
}

function init() {
  add();
}

init();


body {
  font-family: sans-serif;
}

table {
  border-collapse: collapse;
}

td {
  padding: 5px 10px;
  text-align: center;
}

input {
  text-align: right;
  border: none;
}

input:focus {
  outline: none;
}


// 정답
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <span class="js-result result">0</span>
    <span class="js-reset reset">C</span>
    <span class="js-number">7</span>
    <span class="js-number">8</span>
    <span class="js-number">9</span>
    <span class="js-operation operation">+</span>
    <span class="js-number">4</span>
    <span class="js-number">5</span>
    <span class="js-number">6</span>
    <span class="js-operation operation">-</span>
    <span class="js-number">1</span>
    <span class="js-number">2</span>
    <span class="js-number">3</span>
    <span class="js-operation operation">*</span>
    <span class="js-number zero">0</span>
    <span class="js-equals">=</span>
    <span class="js-operation operation">/</span>
    <script src="src/index.js"></script>
  </body>
</html>


import "./styles.css";

const result = document.querySelector(".js-result");
const reset = document.querySelector(".js-reset");
const equals = document.querySelector(".js-equals");
const numbers = Array.from(document.querySelectorAll(".js-number"));
const operations = Array.from(document.querySelectorAll(".js-operation"));

let firstValue = "",
  firstDone,
  secondValue = "",
  secondDone,
  currentOperation;

function doOperation() {
  const intValueA = parseInt(firstValue, 10);
  const intValueB = parseInt(secondValue, 10);
  switch (currentOperation) {
    case "+":
      return intValueA + intValueB;
    case "-":
      return intValueA - intValueB;
    case "/":
      return intValueA / intValueB;
    case "*":
      return intValueA * intValueB;
    default:
      return;
  }
}

function handleNumberClick(e) {
  const clickedNum = e.target.innerText;
  if (!firstDone) {
    firstValue = firstValue + clickedNum;
    result.innerHTML = firstValue;
  } else {
    secondValue = secondValue + clickedNum;
    result.innerHTML = secondValue;
    secondDone = true;
  }
}

function calculate() {
  const operation = doOperation();
  result.innerHTML = operation;
  firstValue = operation;
  secondDone = false;
  secondValue = "";
}

function handleOperationClick(e) {
  const clickedOperation = e.target.innerText;
  if (!firstDone) {
    firstDone = true;
  }
  if (firstDone && secondDone) {
    calculate();
  }
  currentOperation = clickedOperation;
}

function handleReset() {
  firstValue = "";
  secondValue = "";
  firstDone = false;
  secondDone = false;
  currentOperation = null;
  result.innerHTML = "0";
}

function handleEqualsClick() {
  if (firstDone && secondDone) {
    calculate();
  }
}

numbers.forEach(function(number) {
  number.addEventListener("click", handleNumberClick);
});
operations.forEach(function(operation) {
  operation.addEventListener("click", handleOperationClick);
});
reset.addEventListener("click", handleReset);
equals.addEventListener("click", handleEqualsClick);


body {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 80px;
  grid-auto-rows: 80px;
  grid-gap: 10px;
  background-color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body span {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3d3b41;
  border-radius: 20px;
  font-size: 28px;
  color: white;
  cursor: pointer;
}

body span:active {
  opacity: 0.8;
}

body span:not(.result) {
  user-select: none;
}

.result {
  background-color: black;
  padding-right: 20px;
  justify-content: flex-end;
  font-size: 48px;
  grid-column: 1 / 4;
}

.zero {
  grid-column: 1 / 3;
}

.operation {
  background-color: #ff9a00;
}

.reset {
  background-color: #b3b3bb;
}

<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h1>Random Number Game</h1>

    <h2>Generate a number between</h2>
    
    <div class="controls">
      <div class="controls_range">
        <input
          type="range"
          id="jsRange"
          min="5"
          max="200"
          value="10"
          step="5"
        />
    </div>

    <h4>Guess the number: <input type="number" /> <button id="playBtn">Play!</button>

    <script src="src/index.js"></script>
  </body>
</html>


// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const range = document.getElementById("jsRange");

function handleRangeChange() {}

if (range) {
  range.addEventListener("input", handleRangeChange);
}

function init() {}

init();


// 정답
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h1>Random Number Game</h1>
    <div>
      <h3 class="js-title">Generate a number between 0 and <span>10</span></h3>
      <datalist id="number">
        <option value="50"></option>
        <option value="100"></option>
        <option value="150"></option>
        <option value="200"></option>
      </datalist>
      <input
        list="number"
        id="js-range"
        type="range"
        min="5"
        max="200"
        value="5"
        step="5"
      />
    </div>
    <form id="js-guess">
      <label>Guess the number:</label>
      <input type="number" max="200" min="5" />
      <button>Play!</button>
    </form>
    <div id="js-result">
      <span></span>
    </div>
    <script src="src/index.js"></script>
  </body>
</html>


const range = document.getElementById("js-range");
const title = document.querySelector(".js-title");
const guessForm = document.getElementById("js-guess");
const result = document.getElementById("js-result");

function handleRangeChange(e) {
  const selectedRange = title.querySelector("span");
  selectedRange.innerHTML = range.value;
}

function handleGuessSubmit(e) {
  e.preventDefault();
  const guessInput = guessForm.querySelector("input");
  if (guessInput.value === "") {
    return;
  }
  const max = range.value;
  const random = Math.ceil(Math.random() * max);
  const userGuess = parseInt(guessInput.value, 10);
  const resultSpan = result.querySelector("span");
  resultSpan.innerHTML = `
  You chose: ${userGuess},
  the machine chose: ${random}.<br />
  <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
  `;
}

guessForm.addEventListener("submit", handleGuessSubmit);
range.addEventListener("input", handleRangeChange);

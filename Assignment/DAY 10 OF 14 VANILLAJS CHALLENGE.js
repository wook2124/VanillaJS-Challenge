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

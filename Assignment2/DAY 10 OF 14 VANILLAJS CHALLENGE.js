// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const title = document.querySelector(".js-title");
const range = document.getElementById("js-range");
const guessForm = document.getElementById("js-guess");
const result = document.getElementById("js-result");

// e = event
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
  resultSpan.innerHTML = `You chose: ${userGuess}<br />The machine chose: ${random}<br /><strong>${
    userGuess === random ? "Hey! You got it!!" : "😝😝😝"
  }</strong>`;
}

function handleRangeChange(e) {
  const titleSpanRange = title.querySelector("span");
  titleSpanRange.innerHTML = range.value;
}

guessForm.addEventListener("submit", handleGuessSubmit);
range.addEventListener("input", handleRangeChange);

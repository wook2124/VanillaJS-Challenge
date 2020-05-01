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
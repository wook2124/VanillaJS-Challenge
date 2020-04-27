<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h1>Where are you from?</h1>
    <select>
      <option value="">--- Choose Your Country ---</option>
      <option value="">Korea</option>
      <option value="">Greece</option>
      <option value="">Turkey</option>
      <option value="">Finland</option>
    </select>
    <script src="src/index.js"></script>
  </body>
</html>


// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const s_country = document.querySelector(".country"),
  y_country = document.querySelector(".your-country");

const COUNTRY_LS = "country";

function yourCountry(country) {
  y_country.innerText = `Your country is ${country}!🌏`;
}

function selectCountry() {}

function loadCountry() {
  const country = localStorage.getItem(COUNTRY_LS);
  if (country === null) {
    selectCountry();
  } else {
    yourCountry();
  }
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
    <h1>Where are you from?</h1>
    <select class="js-select">
      <option value="NONE">--- Choose Your Country ---</option>
      <option value="KR">Korea</option>
      <option value="GR">Greece</option>
      <option value="TR">Turkey</option>
      <option value="FI">Finland</option>
    </select>
    <script src="src/index.js"></script>
  </body>
</html>


import "./styles.css";

const select = document.querySelector(".js-select");

function handleChange() {
  const selected = select.value;
  localStorage.setItem("country", selected);
}

function loadCountries() {
  const selected = localStorage.getItem("country");
  if (selected) {
    const option = document.querySelector(`option[value="${selected}"]`);
    option.selected = true;
  }
}

function init() {
  loadCountries();
  select.addEventListener("change", handleChange);
}

init();
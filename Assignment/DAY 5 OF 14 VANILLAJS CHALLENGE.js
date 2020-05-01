import "./styles.css";

const dDay = document.querySelector(".D-day"),
  xmas = document.querySelector("h2");

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");

  /*  const end = new Date();
  const elapsed = end.getTime() - xmasDay.getTime()
  elapsed() */

  const date = xmasDay.getDate(),
    hours = xmasDay.getHours(),
    minutes = xmasDay.getMinutes(),
    seconds = xmasDay.getSeconds();

  xmas.innerText = `${date < 10 ? `0${date}` : date}d ${
    hours < 10 ? `0${hours}` : hours
    }h ${minutes < 10 ? `0${minutes}` : minutes}m ${
    seconds < 10 ? `0${seconds}` : seconds
    }s`;
}

function init() {
  getTime();
  setInterval(getTime, NINE_HOURS_MILLISECONDS);
}
init();


// 정답
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div class="js-clock">
    <script src="src/index.js"></script>
  </body>
</html>


import "./styles.css";

const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const now = new Date();
  // This is in milisecondsx
  const difference = new Date(xmasDay - now);
  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);
  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;
  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
  clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();

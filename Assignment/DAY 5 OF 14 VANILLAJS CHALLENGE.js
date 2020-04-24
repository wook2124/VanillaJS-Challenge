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

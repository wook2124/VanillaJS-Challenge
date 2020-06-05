import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const clock = document.querySelector(".clock");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const today = new Date();
  const difference = new Date(xmasDay - today);

  const secondsInMinutes = Math.floor(difference / 1000);
  const minutesInMinutes = Math.floor(secondsInMinutes / 60);
  const hoursInMinutes = Math.floor(minutesInMinutes / 60);
  const days = Math.floor(hoursInMinutes / 24);

  const seconds = secondsInMinutes % 60;
  const minutes = minutesInMinutes % 60;
  const hours = hoursInMinutes % 24;

  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
  clock.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

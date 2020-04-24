const clockContainer = document.querySelector(".js-clock"),
  clockTitle = document.querySelector("h1")

function getTime() {
  const date = new Date();

  const day = date.getDate(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  clockTitle.innerText = `${day}d ${hours < 10 ? `${hours}` : hours}h ${minutes < 10 ? `${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init()
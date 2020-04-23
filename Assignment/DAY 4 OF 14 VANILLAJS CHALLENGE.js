// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const handleResize = {
  function() {
    if(window.length < 300){
      body.style.color = colors[0];
    }
    else if(window.length >= 300 && window.length < 500){
      body.style.color = colors[1];
    }
  }
};

window.addEventListener("resize", handleResize);
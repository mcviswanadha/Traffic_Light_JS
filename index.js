// Import stylesheets
import './style.css';

const circles = document.querySelectorAll('.circles');

let activeLight = 0;

setInterval(changeLight, 1000);

function changeLight() {
  circles[activeLight].className = 'circles';
  activeLight++;

  if (activeLight > 2) {
    activeLight = 0;
  }

  const currentLight = circles[activeLight];

  currentLight.classList.add(currentLight.getAttribute('colors'));
}

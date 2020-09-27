import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('button[data-action="start"]'),
  buttonStop: document.querySelector('button[data-action="stop"]'),
};

let idTime = null;
let isActive = false;
refs.buttonStart.addEventListener('click', changeColor);
refs.buttonStop.addEventListener('click', stopChange);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
  if (!isActive) {
    idTime = setInterval(() => {
      refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
    isActive = true;
  }
}

function stopChange() {
  clearInterval(idTime);
  isActive = false;
}

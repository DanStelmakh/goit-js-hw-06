function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnEL = document.querySelector(".change-color");
const colorTxtEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

btnEL.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorTxtEl.textContent = getRandomHexColor();
}

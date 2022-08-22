// получить ссылку на input и span.
const inputEl = document.querySelector("#font-size-control");
const txtEl = document.querySelector("#text");

console.log(inputEl.value);
// console.log(txtEl);

// Повесить слушателя событий на input.
inputEl.addEventListener("input", onTxtChange);
// Создать функцию изменения размера шрифта
function onTxtChange(event) {
  txtEl.style.fontSize = inputEl.value + "px";
}

// Создать перерменную для счетчика, которая будет изменятся при клике по кнопке.
let counterValue = 0;
// Получить ссылки на каждый элемент верстки(span - для изменения его текстового значения, button - для добавления слушателя событий по клику )
const valueEl = document.querySelector("#value");
const buttonDecrement = document.querySelector("[data-action=decrement");
const buttonIncrement = document.querySelector("[data-action=increment");
console.log(buttonIncrement);
// Создать функции, которые будут делать +1 и -1.
function onIncrement() {
  // функция доложна добавлять 1 к переменной counterValue и изменять значение span.
  counterValue += 1;
  valueEl.textContent = counterValue;
}

function onDecrement() {
  // аналогично функции onIncrement, только -1.
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
// Повесить слушателя событий по клику на каждую кнопку, передав в нее ссылку на функцию.
buttonDecrement.addEventListener("click", onDecrement);
buttonIncrement.addEventListener("click", onIncrement);

// получить ссылку на input
const inputEL = document.querySelector("#validation-input");
// console.log(inputEL);
// Проверить  data-length, число это или строка? Если строка, сделать числом.
console.log(typeof inputEL.dataset.length);
const inputLengthNumber = Number(inputEL.dataset.length);
// console.log(inputLengthNumber);
// Создать функцию, которая будет проверять на нужное количество в data-length, т.к. там храниться необходимая длина введеных символов.
function addFocus(event) {
  if (inputEL.value.length === inputLengthNumber) {
    // Если длина введеных значений равна нужному, нужно удалить стиль с красной рамкой, и добавить с зеленой.
    inputEL.classList.remove("invalid");
    inputEL.classList.add("valid");
    return;
  }
  //   В протиивном случае наоборот.
  inputEL.classList.remove("valid");
  inputEL.classList.add("invalid");
}
// Слушаем, что вводят в инпут и выполняем колбэк функцию
inputEL.addEventListener("blur", addFocus);

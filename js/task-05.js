// Получить ссылки на input и span.
const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");
// Создать функцию, которая будет получать значение, которое будет вводится в input.

function onInputChangeName(event) {
  //   console.log(event.currentTarget.value);
  //   console.log(nameEl.textContent);
  nameEl.textContent = event.currentTarget.value;
  //  Изменять textContent у span на результат действия функции
  if (event.currentTarget.value === "") {
    nameEl.textContent = "Anonymous";
    return;
  }
}
//Повесить на input слушателя событий с функцией, в которой можно получить значение при каждом вводе
inputEl.addEventListener("input", onInputChangeName);

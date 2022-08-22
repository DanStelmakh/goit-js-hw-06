//  Получить ссылку на форму
const formEl = document.querySelector(".login-form");
// console.log(formEl);
// Повесить слушателя событий на форму
formEl.addEventListener("submit", onFormSubmit);
// Создать функцию
function onFormSubmit(event) {
  //   Запретить отправлять форму по дефолту
  event.preventDefault();
  //   Создать переменную для удобства, где будет ссылка на элементы формы
  const formElements = event.currentTarget.elements;
  //   Cоздать переменные для каждого поля отдельно( почты и пароля), где бцдет ссылка на значение, которое будет вводиться в поле
  const mail = formElements.email.value;
  const password = formElements.password.value;
  //   Создать переменную для сбора данных формы с помощью FormData
  const formData = new FormData(event.currentTarget);
  //   Записать условие для проверки заполненности поля.
  if (mail === "" || password === "") {
    alert(`Все поля должны быть заполнены!!!`);
  } else {
    formData.forEach((value, name) => {
      console.log(`Имя поля:`, name);
      console.log(`Значение поля:`, value);
    });
  }
  //   Очистить форму после ее отправки.
  formEl.reset();
  //   if (mail !== "" || password !== "") {
  //     formData.forEach((value, name) => {
  //       console.log(`Имя поля:`, name);
  //       console.log(`Значение поля:`, value);
  //     });
  //   }
  //   return;
}

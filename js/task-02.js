const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// получаю доступ к ul с классом ingredients
const ingredientsList = document.querySelector("#ingredients");
// импользую метод map для массива. В оператор text будет приходить каждый элемент массива ingredients по чоереди
const elementsOfList = ingredients.map((text) => {
  // добавляю  страницы  li,
  const ingredientsItem = document.createElement("li");
  //   создаю классы для li
  ingredientsItem.classList.add("item");
  //   создаю текстовый контент для li
  ingredientsItem.textContent = text;
  //   console.log(ingredientsItem);

  return ingredientsItem;
});
// console.log(elementsOfList);

// добавляю в разметку страницы (HTML) все что создал выше с 12 по 24 строку, используя метод spread, так как elementsOfList єто массив, а нужно получить его составляющие.
ingredientsList.append(...elementsOfList);

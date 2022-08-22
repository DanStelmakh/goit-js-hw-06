const categoriesEl = document.querySelectorAll(".item");
// console.log(categoriesEl);
console.log("Number of categories:", categoriesEl.length);
//* categoriesEl это массив из li с классом item. У каждой li есть дети: h2 и ul. В данном случает первый и последний реенок соответственно.
//*так как categoriesEl это массив, то можно обратиться к каждому из его элементов по индексу.
//* Это первый ребенок li. Выводим в консоль текст h2.
// console.log(`Category:`, categoriesEl[0].firstElementChild.textContent);
//* Это последний ребенок. У ul есть свои дети. lastElementChild.children возвращает массив, поэтому чтобы узнать количество его детей нужно взять его длину.
// console.log(`Category:`, categoriesEl[0].lastElementChild.children.length);
//* Таким образом, еслит нужно обращаться к каждому элементу массива, нужно его перебрать любым методом.

// /v1
for (const elem of categoriesEl) {
  console.log(`Category:`, elem.firstElementChild.textContent);
  console.log(`Elements:`, elem.lastElementChild.children.length);
}
/// v2
// categoriesEl.forEach((elem) => {
//   console.log(`Category:`, elem.firstElementChild.textContent);
//   console.log(`Elements:`, elem.lastElementChild.children.length);
// });

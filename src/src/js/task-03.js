const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// var1 Создал функцию с параметром image, которая возвращает шаблонную строку, в которой написана нужная разметка. В значение src и alt подставляю ссылку на значение.
// const makeItemMarkUp = (image) => {
//   return `
//   <li><img src="${image.url}" alt="${image.alt}" /></li>`;
// };

// var2 с деструктуризацией, убрал повторяющийся image.
const makeItemMarkUp = ({ url, alt }) => {
  return `   
   <li><img src="${url}" alt="${alt}" /></li>`;
};

//  Получаю ссылку на список из верстки с классом gallery
const galleryListEl = document.querySelector(".gallery");
// Перебрать массив, с колбэк функцией, которая создает разметку, т.е. makeItemMarkUp + превратить массив в строку, потому что insertAdjacentHTML преобразовует только строки.
const makeNewListMarkUp = images.map(makeItemMarkUp).join(" ");

// Добавить в разметку созданные элементы за один прием.
galleryListEl.insertAdjacentHTML("afterbegin", makeNewListMarkUp);

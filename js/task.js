"use strict";

import items from "gallery-items.js";

const galleryListRef = document.querySelector("js-gallery");
console.log(galleryListRef);
// посмотреть ссылку на ul основного списка

// создаю лишку
const galleryItemRef = document.createElement("li");
console.log(galleryItemRef);
// посмотреть ссылку на лишку
galleryItemRef.classList.add("gallery__item");
// добавила класс лишке

// создаю а
const galleryLinkRef = document.createElement("a");
console.log(galleryLinkRef);
// посмотреть на ссылку на а
galleryLinkRef.classList.add("gallery__link");
// добавила класс для а
galleryLinkRef.setAttribute("href", items.original);
// ПРОВЕРИТЬ добавился ли атрибут href и верна ли ссылка!!!!!!!!!!!!!!!!!!!!!!!!!!

// создаю img
const galleryImgRef = document.createElement("img");
console.log(galleryImgRef);
// добавляю класс для img
galleryImgRef.classList.add("gallery__image");
console.log(galleryImgRef);
galleryImgRef.setAttribute("src", items.preview);
// ПРОВЕРИТЬ добавился ли атрибут src и верна ли ссылка!!!!!!!!!!!!!!!!!!!!!!!!!!
galleryImgRef.setAttribute("data-source", items.original);
// ПРОВЕРИТЬ добавился ли атрибут data-source и верна ли ссылка!!!!!!!!!!!!!!!!!!!!!!!!!!
galleryImgRef.setAttribute("alt", items.description);
// ПРОВЕРИТЬ добавился ли атрибут alt и верна ли ссылка!!!!!!!!!!!!!!!!!!!!!!!!!!

// на ul вешаю li
galleryListRef.append(galleryItemRef);
// на li вешаю а
galleryItemRef.append(galleryLinkRef);
// на a вешаю img
galleryLinkRef.append(galleryImgRef);

// ПРОВЕРИТЬ!!!!
console.log(galleryListRef);


// ШАБЛОН
{/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>; */}

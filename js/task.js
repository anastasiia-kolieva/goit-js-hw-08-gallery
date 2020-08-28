"use strict";

import items from "../gallery-items.js";
// Массив обьектов

const galleryListRef = document.querySelector(".js-gallery");

// Перебор массива  forEach и создание галерееи.
const createGallery = items.forEach((item) => {
  const galleryItemRef = document.createElement("li");
  galleryItemRef.classList.add("gallery__item");

  const galleryLinkRef = document.createElement("a");
  galleryLinkRef.classList.add("gallery__link");
  galleryLinkRef.setAttribute("href", item.original);

  const galleryImgRef = document.createElement("img");
  galleryImgRef.classList.add("gallery__image");
  galleryImgRef.setAttribute("src", item.preview);
  galleryImgRef.setAttribute("data-source", item.original);
  galleryImgRef.setAttribute("alt", item.description);

  galleryListRef.append(galleryItemRef);
  galleryItemRef.append(galleryLinkRef);
  galleryLinkRef.append(galleryImgRef);
});

console.log(galleryListRef);
// проверила галярею

// const galleryListRef = document.querySelector(".js-gallery");

// const galleryItemRef = document.createElement("li");
// galleryItemRef.classList.add("gallery__item");

// const galleryLinkRef = document.createElement("a");
// galleryLinkRef.classList.add("gallery__link");
// galleryLinkRef.setAttribute("href", items.original);
// // ПРОВЕРИТЬ добавился ли атрибут href и верна ли ссылка!!!!!!!!!!!!!!!!!!!!!!!!!!

// const galleryImgRef = document.createElement("img");
// galleryImgRef.classList.add("gallery__image");
// galleryImgRef.setAttribute("src", items.preview);
// // ПРОВЕРИТЬ добавился ли атрибут src и верна ли ссылка!!!!!!!!!!!!!!!!!!!!!!!!!!
// galleryImgRef.setAttribute("data-source", items.original);
// // ПРОВЕРИТЬ добавился ли атрибут data-source и верна ли ссылка!!!!!!!!!!!!!!!!!!!!!!!!!!
// galleryImgRef.setAttribute("alt", items.description);
// // ПРОВЕРИТЬ добавился ли атрибут alt и верна ли ссылка!!!!!!!!!!!!!!!!!!!!!!!!!!

// galleryListRef.append(galleryItemRef);
// galleryItemRef.append(galleryLinkRef);
// galleryLinkRef.append(galleryImgRef);

// // ПРОВЕРИТЬ!!!!
// console.log(galleryListRef);

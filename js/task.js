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

// функция клика на изображение, вынесла отдельно.Для реализации делегирования
const onImgClick = function (event) {
  // убрала дефолтный переход по ссылке при клике на изображение
  event.preventDefault();

  // Проверка клика ИМЕННО по изображению
  if (event.target.nodeName !== "IMG") {
    console.log("Не нажали на картинку!");
    return;
  }

  // получение URL большого изображения, вывод в консоль
  console.dir(event.target.dataset.source);

  // Подмена значения атрибута src элемента img.lightbox__image.
  const lightboxImgRef = document.querySelector(".lightbox__image");
  lightboxImgRef.src = event.target.dataset.source;
};

// реализация делегирования события клика на img
galleryListRef.addEventListener("click", onImgClick);

// Открытие модального окна при клике на изображение
const openModal = document.querySelector("div.lightbox");

const galleryItemRefs = document.querySelectorAll(".gallery__item");
galleryItemRefs.forEach((galleryItem) => {
  window.addEventListener("keydown", closeOnPressEsc);
  galleryItem.addEventListener("click", () => {
    openModal.classList.add("is-open");
  });
});

// закрытие модального окна при нажатии на кнопку
const btnCloseRef = document.querySelector("[data-action]");
btnCloseRef.addEventListener("click", () => {
  openModal.classList.remove("is-open");

  // Очистка значения атрибута src элемента img.lightbox__image
  const lightboxImgRef = document.querySelector(".lightbox__image");
  lightboxImgRef.value = " ";
});

// Закрытие модального окна по клику на div.lightbox__overlay.
const overlayRef = document.querySelector(".lightbox__overlay");
overlayRef.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    openModal.classList.remove("is-open");
  }
});

// Закрытие модального окна по нажатию клавиши ESC.
function closeOnPressEsc(event) {
  if (event.code === "Escape") {
    openModal.classList.remove("is-open");
  }
}

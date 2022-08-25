import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (item) =>
      `<a class = 'gallery__link' href="${item.original}"> 
        <img class = 'gallery__image' src="${item.preview}" alt="${item.description}" />
    </a>`
  )
  .join("");

gallery.innerHTML = galleryMarkup;

const inst = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

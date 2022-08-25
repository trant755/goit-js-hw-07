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

gallery.addEventListener("click", zoomImg);

function zoomImg(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) return;

  const inst = new SimpleLightbox(".gallery a");
}

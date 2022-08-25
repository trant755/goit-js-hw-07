import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (item) =>
      `<div class = 'gallery__item'>
    <a class = 'gallery__link' href="${item.original}"> 
        <img class = 'gallery__image' src="${item.preview}" alt="${item.description}" />
    </a>
  </div>`
  )
  .join("");

gallery.innerHTML = galleryMarkup;

gallery.addEventListener("click", zoomImg);

function zoomImg(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) return;

  let originalSrc = getOriginalImgurl(e.target);

  const inst = basicLightbox.create(`
    <img src=${originalSrc} width="800" height="600">
`);
  inst.show();

  gallery.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      inst.close();
    }
  });
}

function getOriginalImgurl(ref) {
  return ref.closest(".gallery__link").href;
  //   return galleryItems.find((item) => item.preview === src).original; <--- тоже рабочий вариант))
}

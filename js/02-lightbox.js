import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divGalleryRef = document.querySelector(".gallery");
divGalleryRef.insertAdjacentHTML("afterbegin", createGallery());

const imagesMarkup = createGallery(galleryItems);
function createGallery(images) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}

divGalleryRef.addEventListener("click", onDivGalleryClick);

const linkRef = document.querySelector(".gallery__item");

console.log(linkRef);

function onDivGalleryClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}

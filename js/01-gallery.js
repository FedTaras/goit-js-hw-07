import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems[0]);

const divGalleryRef = document.querySelector(".gallery");
divGalleryRef.insertAdjacentHTML("afterbegin", createGallery());

const imagesMarkup = createGallery(galleryItems);
function createGallery(images) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
       <a class="gallery__link" href="${original} " rel="noreferrer noopener">
        <img
          src="${preview}"
          class="gallery__image"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

// console.log(document.querySelectorAll(".gallery__image"));
divGalleryRef.addEventListener("click", onDivGalleryClick);

function onDivGalleryClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  console.log(evt.target.dataset.source);
  document.querySelector(".gallery__image").onclick = () => {
    basicLightbox
      .create(
        `
    <img width="1400" height="900" src="${evt.target.dataset.source}">
`
      )
      .show();
  };
}

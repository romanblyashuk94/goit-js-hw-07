import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Refs:
const gallery = document.querySelector(".gallery");
const selectedImageModal = document.querySelector(".backdrop");
const selectedImage = selectedImageModal.querySelector(
  ".selectedImageModal__image"
);
const closeBtn = document.querySelector(".closeButton");
// -------------------------------------------

const galleryImagesMurkup = createGalleryImagesMurkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryImagesMurkup);
gallery.addEventListener("click", onOpenImageModal);

function onOpenImageModal(e) {
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  e.preventDefault();

  selectedImageModal.classList.remove("is-hidden");
  selectedImage.src = e.target.dataset.source;
  selectedImage.alt = e.target.alt;

  addEventListenersToCloseElements();
}

function onCloseImageModal(e) {
  if (
    !e.target.classList.contains("backdrop") &&
    !e.target.classList.contains("closeButton") &&
    !(e.code === "Escape")
  ) {
    return;
  }

  selectedImageModal.classList.add("is-hidden");
  selectedImage.src = "";
  selectedImage.alt = "";

  removeEventListenersFromCloseElements();
}

function addEventListenersToCloseElements() {
  closeBtn.addEventListener("click", onCloseImageModal);
  selectedImageModal.addEventListener("click", onCloseImageModal);
  window.addEventListener("keydown", onCloseImageModal);
}

function removeEventListenersFromCloseElements() {
  closeBtn.removeEventListener("click", onCloseImageModal);
  selectedImageModal.removeEventListener("click", onCloseImageModal);
  window.removeEventListener("keydown", onCloseImageModal);
}

function createGalleryImagesMurkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt=${description}
        />
      </a>
    </div>`;
    })
    .join("");
}

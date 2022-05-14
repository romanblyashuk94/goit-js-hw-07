// Refs:
const gallery = document.querySelector(".gallery");
const selectedImageModal = document.querySelector(".backdrop");

const closeBtn = document.querySelector(".closeButton");
const selectedImage = selectedImageModal.querySelector(
    ".selectedImageModal__image"
  );
 
 export function onOpenImageModal(e) {
    if (!e.target.classList.contains("gallery__image")) {
      return;
    }
  
    e.preventDefault();
    document.body.classList.add('modal-open')
    selectedImage.src = e.target.dataset.source;
    selectedImage.alt = e.target.alt;
  
    addEventListenersToCloseElements();
  }

  function addEventListenersToCloseElements() {
    closeBtn.addEventListener("click", onCloseImageModal);
    selectedImageModal.addEventListener("click", onCloseImageModal);
    window.addEventListener("keydown", onCloseImageModal);
  }
  
  
  function onCloseImageModal(e) {
    if (
      !e.target.classList.contains("backdrop") &&
      !e.target.classList.contains("closeButton") &&
      !(e.code === "Escape")
    ) {
      return;
    }
  
    document.body.classList.remove('modal-open')
  
    selectedImage.src = "";
    selectedImage.alt = "";
  
    removeEventListenersFromCloseElements();
  }
  

  function removeEventListenersFromCloseElements() {
    closeBtn.removeEventListener("click", onCloseImageModal);
    selectedImageModal.removeEventListener("click", onCloseImageModal);
    window.removeEventListener("keydown", onCloseImageModal);
  }
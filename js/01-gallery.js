import { galleryItems } from "./gallery-items.js";
import createGalleryImagesMurkup from "./galleryFunctions/createGalleryImagesMurkup.js";
import { onOpenImageModal } from "./galleryFunctions/eventListenersCallbacks.js";

// Change code below this line

// Refs:
const gallery = document.querySelector(".gallery");
// -------------------------------------------

const galleryImagesMurkup = createGalleryImagesMurkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryImagesMurkup);
gallery.addEventListener("click", onOpenImageModal);
import { galleryItems } from "./gallery-items.js";
import createGalleryImagesMurkup from './galleryFunctions/createGalleryImagesMurkup'
import {onOpenImageModal} from './galleryFunctions/eventListenersCallbacks'
// Change code below this line

// Refs:
const gallery = document.querySelector(".gallery");
// -------------------------------------------

const galleryImagesMurkup = createGalleryImagesMurkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryImagesMurkup);
gallery.addEventListener("click", onOpenImageModal);
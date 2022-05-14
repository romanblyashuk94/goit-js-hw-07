import { galleryItems } from "./gallery-items.js";
import createGalleryImagesMurkup from './galleryFunctions/createGalleryImagesMurkup'
import SimpleLightbox from "simplelightbox"
// Change code below this line

const galleryRef = document.querySelector(".gallery");
galleryRef.innerHTML = createGalleryImagesMurkup(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
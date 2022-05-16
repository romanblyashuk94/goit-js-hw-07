import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";
import createGalleryImagesMurkup from './galleryFunctions/createGalleryImagesMurkup'
// Change code below this line

const galleryRef = document.querySelector(".gallery");
galleryRef.innerHTML = createGalleryImagesMurkup(galleryItems);

var lightbox = new SimpleLightbox(".gallery a");
import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => 
   `<li><a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a></li>`);

gallery.innerHTML = galleryMarkup.join('');
// console.log(gallery);

// console.log(SimpleLightbox);

let lightboxGallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionPosition: 'bottom',captionDelay: '250',});

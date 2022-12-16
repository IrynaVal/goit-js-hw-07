import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => 
   `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`);

gallery.innerHTML = galleryMarkup.join('');

gallery.addEventListener('click', onGalleryImgClick);

function onGalleryImgClick(evt) {
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    evt.preventDefault();
    
    const originalImg = evt.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${originalImg}">`, {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscPress);
    }
  })
  
  instance.show();

function onEscPress(evt) {
    if(evt.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscPress);
    }
}
}

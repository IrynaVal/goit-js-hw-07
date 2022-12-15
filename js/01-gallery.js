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
// console.log(gallery);

gallery.addEventListener('click', onGalleryImgClick);

function onGalleryImgClick(evt) {
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    evt.preventDefault();
    // console.log(evt.target.dataset.source);
    // console.log(evt.target)
    // console.log(evt.target.src)
    const originalImg = evt.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${originalImg}">
`
        // , {
        // onClose: (instance) => {
        //     instance.element().querySelector('a').onclick = instance.close
        // }
        // }
    )

    window.addEventListener('keydown', onEscPress); 
    instance.show();
    // instance.close(onEscPress);
}

function onEscPress(evt) {
    console.log(instance.close());
    if (evt.code === 'Escape') {
         window.removeEventListener('keydown', onEscPress);
        basicLightbox.instance.close();
    }
      
    // console.log(evt);
}
// const instance = basicLightbox.create(evt.target, {
    //     onShow: (instance) => {
    //     evt.target.src = evt.target.dataset.source;
    // }});

//  const instance = basicLightbox.create(`<img
// //       class="gallery__image"
// //       src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg"
// //           alt="img"
// //     />
	
// // `)




// instance.show()
// instance.show(() => console.log('lightbox now visible'))
// instance.close()
// instance.close(() => console.log('lightbox not visible anymore'))


/*
	 * Function that gets executed before the lightbox will be shown.
	 * Returning false will prevent the lightbox from showing.
	 */
	// onShow: (instance) => {},
	/*
	 * Function that gets executed before the lightbox closes.
	 * Returning false will prevent the lightbox from closing.
	 */
	// onClose: (instance) => {}


//     const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
//         <input placeholder="Type something">
//         <a>Close</a>
//     </div>
// `, {
//     onShow: (instance) => {
//         instance.element().querySelector('a').onclick = instance.close
//     }
// })

// instance.show()
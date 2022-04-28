import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryItems(galleryItems);

function createGalleryItems(galleryItems) {
     
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
    }
    ).join("");   
};

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', galleryItemClick);

let instance;

function galleryItemClick(event) {
    const isGalleryLinkEl = event.target.classList.contains('gallery__image');
    const lightGalleryItem = event.target.dataset.source;
  
  if (!isGalleryLinkEl) {
      return  
    }
  event.preventDefault();

  instance = basicLightbox.create(
        `<img src="${lightGalleryItem}" alt="${event.target.alt}">`
); 
  instance.show();
};

document.body.addEventListener('keydown', galleryItemClickEsc);

function galleryItemClickEsc(event) {
  
    if (event.key === 'Escape' & instance !== 'undefined') {
      instance.close();
    }
};
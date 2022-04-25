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

function galleryItemClick(event) {
    const isGalleryLinkEl = event.target.classList.contains('gallery__image');
    if (!isGalleryLinkEl) {
        return;
    }
    event.preventDefault();

  const lightGalleryItem = event.target.dataset.source;
  
  const instance = basicLightbox.create(
    `<img src="${lightGalleryItem}" alt="${event.target.alt}">`
    );
  
  instance.show();
};

console.log(galleryItems);

import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const imagesList = document.querySelector('.gallery');
const imagesMarkup = createImagesList(galleryItems);

imagesList.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesList(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            title="${description}"
          />
        </a>`;
    }).join('');
}
const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
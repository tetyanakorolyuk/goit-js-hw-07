import { galleryItems } from './gallery-items.js';

// Change code below this line
console.log(galleryItems);

const imagesList = document.querySelector('.gallery');
const imagesMarkup = createImagesList(galleryItems);

imagesList.insertAdjacentHTML('beforeend', imagesMarkup);
imagesList.addEventListener('click', onImageClick);


function createImagesList(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    }).join('');
}

const visible = basicLightbox.visible();

function onImageClick(event) {
    event.preventDefault();
    const isImageOriginal = event.target.dataset.source;
    if (!isImageOriginal) {
        return
    };
    const instance = basicLightbox.create(`
        <img src="${isImageOriginal}" width="800" height="600">`);
    instance.show();

    if (!visible) {
        document.removeEventListener("keydown", onCloseImageOriginalModal);
    }
    document.addEventListener("keydown", onCloseImageOriginalModal);

}

function onCloseImageOriginalModal(event) {
    if (event.code === 'Escape')
        document.removeEventListener("keydown", onCloseImageOriginalModal);
    instance.close();
}
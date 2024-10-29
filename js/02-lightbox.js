import { galleryItems } from './gallery-items.js';
// Change code below this line


const listEl = document.querySelector('.gallery');


galleryItems.forEach(image => {
    // Creating and adding li element to ul
    const li = document.createElement('li');
    listEl.append(li);
    li.classList.add('gallery__item');
    // Creating and adding anchor element to li
    const anchor = document.createElement('a');
    anchor.classList.add('gallery__link');
    anchor.href = image.original;
    li.append(anchor);
    // Creating and adding img element to anchor tag
    const listImg = document.createElement('img');
    anchor.append(listImg);
    listImg.classList.add('gallery__image');
    listImg.src = image.preview;
    listImg.alt = image.description;
    listImg.dataset.source = image.original;
});

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',    
    captionDelay: 250       
});
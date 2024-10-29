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

listEl.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();

     // Check if the target is an image
     if (event.target.tagName === 'IMG') {
        // Get the source of the large-image
        const imageSrc = event.target.dataset.source;
        const imageAlt = event.target.alt;
        
        // Create the lightbox instance with the image HTML
        const instance = basicLightbox.create(`
            <img width="1400" height="900" src="${imageSrc}" alt="${imageAlt}">
        `, {
            onShow: (instance) => {
                if(event.keyCode === 27) {
                    instance.close();
                }
            }
        });
        
        instance.show(() => {
            // console.log('Lightbox now visible');
            document.addEventListener('keydown', function onKeydown(event) {
                if(event.key === 'Escape') {
                    instance.close();
                    document.removeEventListener('keydown', onKeydown);
                }
            })
        });
    
    }

}




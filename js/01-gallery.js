import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const markup = galleryItems.map (({preview, original, description}) => {
     return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
}) .join("");
console.log(markup);

const gallaryList = document.querySelector('.gallery');
gallaryList.insertAdjacentHTML('beforeend', markup);

// Відкриття модального вікна по кліку на елементі галереї

gallaryList.addEventListener ('click', onGalleryItemClick )

function onGalleryItemClick(evt){

    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
    return;
    }
    console.log(evt.target)
    
// Закриття модального вікна після натискання клавіші Escape
    const selectedImg = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">`)
    selectedImg.show()

    window.addEventListener('keydown', onOpenGalleryItemKeydown)
    function onOpenGalleryItemKeydown (evt){
    if (evt.code == 'Escape') {
        selectedImg.close() 
        } 
    window.removeEventListener("keydown", onOpenGalleryItemKeydown);      
    }   
   
}
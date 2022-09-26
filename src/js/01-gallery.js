import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const getGallery = document.querySelector('.gallery');
const gallerylist = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<a class='gallery__item' href='${original}' >
      <img class='gallery__image' src='${preview}' alt='${description}' title="${description}"> </a>`
  )
  .join('');

getGallery.innerHTML = gallerylist;

new SimpleLightbox('.gallery a ', {
  captionsData: 'alt',
  captionDelay: 250,
});

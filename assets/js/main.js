import { Carousel } from './carousel/carousel.js';
import { fetchAndReplaceImages } from './imageLoader/imageLoader.js'; 
import { initializeStyles } from './styles/styles.js';
function initializeCarousels() {
    const carousels = document.querySelectorAll('.nk-carousel, .nk-carousel-2');
    carousels.forEach(carousel => {
        new Carousel(carousel);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    initializeStyles();
    initializeCarousels();
    fetchAndReplaceImages();
});
export { initializeCarousels, fetchAndReplaceImages };

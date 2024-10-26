import { Carousel } from './carousel/carousel';
import { fetchAndReplaceImages } from './imageLoader/imageLoader';
import { initializeStyles } from './styles/styles';

function initializeCarousels(): void {
    const carousels = document.querySelectorAll('.nk-carousel, .nk-carousel-2');
    carousels.forEach(carousel => {
        new Carousel(carousel as HTMLElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeStyles();
    initializeCarousels();
    fetchAndReplaceImages();
});

export { initializeCarousels, fetchAndReplaceImages };
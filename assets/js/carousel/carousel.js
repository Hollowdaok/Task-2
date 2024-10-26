export class Carousel {
    element;
    inner;
    slides;
    currentIndex;
    autoplayInterval;
    options;
    constructor(element) {
        this.element = element;
        this.inner = element.querySelector('.nk-carousel-inner');
        this.slides = Array.prototype.slice.call(this.inner.children);
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.options = this.parseOptions();
        this.setupCarousel();
        this.createNavigationDots();
        this.showSlide(0);
        if (this.options.autoplay) {
            this.startAutoplay();
        }
    }
    parseOptions() {
        return {
            autoplay: parseInt(this.element.dataset.autoplay || '0') || false,
            dots: this.element.dataset.dots === 'true',
            slidesToShow: this.element.classList.contains('nk-carousel-x4') ? 4 :
                this.element.classList.contains('nk-carousel-x2') ? 2 : 1
        };
    }
    setupCarousel() {
        this.slides.forEach((slide, index) => {
            slide.dataset.index = index.toString();
            slide.style.flex = `0 0 ${100 / this.options.slidesToShow}%`;
        });
    }
    createNavigationDots() {
        if (!this.options.dots)
            return;
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'carousel-dots';
        this.slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'carousel-dot';
            dot.addEventListener('click', () => this.showSlide(index));
            dotsContainer.appendChild(dot);
        });
        this.element.appendChild(dotsContainer);
    }
    showSlide(index) {
        this.currentIndex = index;
        const offset = -index * (100 / this.options.slidesToShow);
        this.inner.style.transform = `translateX(${offset}%)`;
        if (this.options.dots) {
            const dots = this.element.querySelectorAll('.carousel-dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
    }
    nextSlide() {
        let nextIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(nextIndex);
    }
    startAutoplay() {
        this.autoplayInterval = window.setInterval(() => {
            this.nextSlide();
        }, this.options.autoplay);
    }
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
    }
}

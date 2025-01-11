const menuOpenButton = document.querySelector('#menu-open-btn');
const menuCloseButton = document.querySelector('#menu-close-btn');


menuOpenButton.addEventListener('click', () => {
  document.body.classList.toggle('show-mobile-menu');
});

menuCloseButton.addEventListener('click', () => {
  document.body.classList.remove('show-mobile-menu');
});


// Scrollng side by side on team

// JavaScript for Scrolling Controls
const carouselContent = document.querySelector('.carousel-content');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

// Scroll by a fixed amount (e.g., one team member's width)
const scrollAmount = 250;

prevButton.addEventListener('click', () => {
    carouselContent.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
    carouselContent.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Dragging (Optional)
let isDragging = false;
let startX;

carouselContent.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carouselContent.offsetLeft;
    carouselContent.style.cursor = 'grabbing';
});

carouselContent.addEventListener('mouseleave', () => {
    isDragging = false;
    carouselContent.style.cursor = 'grab';
});

carouselContent.addEventListener('mouseup', () => {
    isDragging = false;
    carouselContent.style.cursor = 'grab';
});

carouselContent.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselContent.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust the scroll speed
    carouselContent.scrollLeft -= walk;
    startX = x;
});


// Gallery Lightbox
// Lightbox Functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');

// Open Lightbox
galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
        const img = item.querySelector('.gallery-image');
        const caption = item.querySelector('.gallery-overlay p').textContent;

        lightboxImage.src = img.src;
        lightboxCaption.textContent = caption;
        lightbox.style.display = 'flex';
    });
});

// Close Lightbox
lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close on Outside Click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});


// Contact Form and Validation

const images = document.getElementById('carousel-images_top');
const totalImages = images.children.length;
let currentIndex = 0;
let autoScrollTimeout;
let isHovering = false;
let isTransitioning = false;

// Function to show a specific image
function showImage(index) {
    images.style.transform = `translateX(${-index * 100}%)`;
    isTransitioning = true;
}

// Move to the next image
function nextImage() {
    if (!isTransitioning) {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }
}

// Move to the previous image
function prevImage() {
    if (!isTransitioning) {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }
}

// Set up auto-scroll
function setupAutoScroll() {
    autoScrollTimeout = setTimeout(() => {
        if (!isHovering) {
            nextImage();
        }
        setupAutoScroll();  // Recursively set up auto-scroll
    }, 3000);  // 5 seconds delay
}

// Stop auto-scroll
function stopAutoScroll() {
    clearTimeout(autoScrollTimeout);
}

// Restart auto-scroll without affecting timing
function restartAutoScroll() {
    stopAutoScroll();
    setupAutoScroll();
}

// Transition end event listener
images.addEventListener('transitionend', () => {
    isTransitioning = false;
});

// Button event listeners
document.getElementById('next').addEventListener('click', () => {
    if (!isTransitioning) {
        nextImage();
        restartAutoScroll();  // Restart auto-scroll with a fresh timer
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (!isTransitioning) {
        prevImage();
        restartAutoScroll();  // Restart auto-scroll with a fresh timer
    }
});

// Hover control for auto-scroll
const carouselContainer = document.getElementById('carousel-container');

carouselContainer.addEventListener('mouseenter', () => {
    isHovering = true;
    stopAutoScroll();  // Stop auto-scroll when hovering
});

carouselContainer.addEventListener('mouseleave', () => {
    isHovering = false;
    restartAutoScroll();  // Restart auto-scroll after leaving
});

// Initialize auto-scroll
setupAutoScroll();

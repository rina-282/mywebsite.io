
// testimonial js
let currentSlide_testimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalSlides = testimonials.length;
const slidesToShow = 4; // Show 4 boxes visible at once
const testimonialWrapper = document.querySelector('.testimonial-wrapper');
let autoScrollInterval;

function updateTestimonialDisplay() {
  const slideWidth = testimonials[0].clientWidth + 20; // Box width + margin
  const offset = -currentSlide_testimonial * slideWidth;
  testimonialWrapper.style.transform = `translateX(${offset}px)`;
}

function nextTestimonial() {
  if (currentSlide_testimonial < totalSlides - slidesToShow) {
    currentSlide_testimonial++;
  } else {
    currentSlide_testimonial = 0; // Go back to the start after reaching the end
  }
  updateTestimonialDisplay();
}

function prevTestimonial() {
  if (currentSlide_testimonial > 0) {
    currentSlide_testimonial--;
  } else {
    currentSlide_testimonial = totalSlides - slidesToShow; // Go to the last slide if at the start
  }
  updateTestimonialDisplay();
}

// Auto-scroll every 3 seconds
function startAutoScroll() {
  autoScrollInterval = setInterval(nextTestimonial, 3000);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Pause auto-scroll on hover
testimonials.forEach(testimonial => {
  testimonial.addEventListener('mouseenter', stopAutoScroll);
  testimonial.addEventListener('mouseleave', startAutoScroll);
});

// Start the auto-scrolling when the page loads
startAutoScroll();

// Initial display
updateTestimonialDisplay();
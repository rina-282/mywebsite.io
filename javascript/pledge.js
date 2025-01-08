document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section'); // Get all sections
    sections.forEach(section => {
        const rect = section.getBoundingClientRect(); // Get section position
        if (rect.top < window.innerHeight - 100) { // Check if section is in view
            section.style.opacity = '1'; // Make section visible
        }
    });
});
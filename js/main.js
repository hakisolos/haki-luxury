 // Smooth scrolling effect for internal links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Product filtering
const productItems = document.querySelectorAll('.product-item');
const productFilters = document.querySelectorAll('.product-filter');

productFilters.forEach(filter => {
    filter.addEventListener('click', function() {
        const category = this.dataset.category;

        productItems.forEach(item => {
            item.style.display = 'none';

            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            }
        });
    });
});

// Form submission handling (dummy)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted! This is a dummy function.');
    this.reset();
});
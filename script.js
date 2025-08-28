// Function to open the popup form
    function openPopup() {
        document.getElementById('popupOverlay').style.display = 'block';
        document.getElementById('popupForm').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // Function to close the popup form
    function closePopup() {
        document.getElementById('popupOverlay').style.display = 'none';
        document.getElementById('popupForm').style.display = 'none';
        document.getElementById('comingSoonOverlay').style.display = 'none';
        document.getElementById('comingSoonPopup').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Function to open form with specific apartment type
    function openForm(apartmentType) {
        document.getElementById('apartmentType').value = apartmentType;
        openPopup();
    }
    
    // Close popup when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closePopup();
        }
    });
    
    // Close coming soon popup when clicking outside
    document.getElementById('comingSoonOverlay').addEventListener('click', closePopup);
    document.getElementById('popupOverlay').addEventListener('click', closePopup);
    
    // Prevent closing when clicking inside the popup
    document.getElementById('comingSoonPopup').addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    document.getElementById('popupForm').addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Amenities Slider functionality
    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.amenity-slide');
        const dots = document.querySelectorAll('.slider-dot');
        let currentSlide = 0;
        
        function showSlide(n) {
            slides.forEach(slide => slide.style.opacity = 0);
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentSlide = (n + slides.length) % slides.length;
            
            slides[currentSlide].style.opacity = 1;
            dots[currentSlide].classList.add('active');
        }
        
        // Initialize slider
        showSlide(currentSlide);
        
        // Add click events to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });
        
        // Auto slide
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
        
        // Show coming soon popup on page load after 1 second
        setTimeout(() => {
            document.getElementById('comingSoonOverlay').style.display = 'block';
            document.getElementById('comingSoonPopup').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, 1000);
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Form submission handlers
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your interest! We will contact you shortly.');
                this.reset();
                closePopup();
            });
        });
    });
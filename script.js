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
      // SIMPLE JAVASCRIPT FOR POPUP FUNCTIONALITY
    function openPopup() {
        document.getElementById('popupOverlay').style.display = 'block';
        document.getElementById('popupForm').style.display = 'block';
    }
    
    function closePopup() {
        document.getElementById('popupOverlay').style.display = 'none';
        document.getElementById('popupForm').style.display = 'none';
    }
    
    function openForm(apartmentType) {
        document.getElementById('popupOverlay').style.display = 'block';
        document.getElementById('popupForm').style.display = 'block';
        
        // If you want to set the selected apartment type inside the form
        let aptField = document.getElementById('apartmentTypeField');
        if (aptField) {
            aptField.value = apartmentType;
        }
    }

    // Close popup if user clicks outside form
    window.onclick = function(event) {
        let overlay = document.getElementById('popupOverlay');
        let form = document.getElementById('popupForm');
        if (event.target === overlay) {
            overlay.style.display = 'none';
            form.style.display = 'none';
        }
    }
    // JavaScript for Amenities Row Slider
        document.addEventListener('DOMContentLoaded', function() {
            const slider = document.getElementById('amenitiesSlider');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            
            // Scroll amount (based on card width + gap)
            const scrollAmount = 300; // Adjust as needed
            
            // Next button event
            nextBtn.addEventListener('click', function() {
                slider.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
            
            // Previous button event
            prevBtn.addEventListener('click', function() {
                slider.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });
            
            // Enable/disable buttons based on scroll position
            function updateButtonStates() {
                // Show previous button if not at the start
                if (slider.scrollLeft > 0) {
                    prevBtn.style.opacity = '1';
                    prevBtn.style.pointerEvents = 'auto';
                } else {
                    prevBtn.style.opacity = '0.5';
                    prevBtn.style.pointerEvents = 'none';
                }
                
                // Show next button if not at the end
                if (slider.scrollLeft < (slider.scrollWidth - slider.clientWidth - 10)) {
                    nextBtn.style.opacity = '1';
                    nextBtn.style.pointerEvents = 'auto';
                } else {
                    nextBtn.style.opacity = '0.5';
                    nextBtn.style.pointerEvents = 'none';
                }
            }
            
            // Initial state
            updateButtonStates();
            
            // Update on scroll
            slider.addEventListener('scroll', updateButtonStates);
            
            // Update on window resize
            window.addEventListener('resize', updateButtonStates);
        });
   
// Coming Soon Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const comingSoonOverlay = document.getElementById('comingSoonOverlay');
    const comingSoonPopup = document.getElementById('comingSoonPopup');
    const notifyForm = comingSoonPopup.querySelector('form');
    
    // Function to show the coming soon popup
    function showComingSoonPopup() {
        comingSoonOverlay.style.display = 'block';
        comingSoonPopup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    // Function to hide the coming soon popup
    function hideComingSoonPopup() {
        comingSoonOverlay.style.display = 'none';
        comingSoonPopup.style.display = 'none';
        document.body.style.overflow = ''; // Enable scrolling
    }
    
    // Show popup when page loads (you can change this trigger as needed)
    setTimeout(showComingSoonPopup, 2000); // Shows after 2 seconds
    
    // Close popup when clicking on overlay
    comingSoonOverlay.addEventListener('click', hideComingSoonPopup);
    
    // Handle form submission
    notifyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const phoneInput = this.querySelector('input[type="tel"]');
        
        // Simple validation
        if (!emailInput.value || !phoneInput.value) {
            alert('Please fill in both email and phone fields.');
            return;
        }
        
        // Here you would typically send the data to your server
        // For now, we'll just show a confirmation and close the popup
        alert('Thank you! We will notify you when we launch.');
        hideComingSoonPopup();
        
        // Reset form
        this.reset();
    });
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && comingSoonPopup.style.display === 'block') {
            hideComingSoonPopup();
        }
    });
});

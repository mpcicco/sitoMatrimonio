document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
    const weddingDate = new Date('September 25, 2025 11:30:00').getTime();
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        // Calculate days, hours, minutes, seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display results
        daysEl.textContent = days.toString().padStart(2, '0');
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
        
        // If the countdown is over
        if (distance < 0) {
            clearInterval(countdownInterval);
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
        }
    }
    
    // Initial call
    updateCountdown();
    
    // Update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Smooth scrolling for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const welcomeSection = document.querySelector('.welcome');
            if (welcomeSection) {
                welcomeSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Copy IBAN functionality
    const copyIbanBtn = document.getElementById('copyIban');
    
    if (copyIbanBtn) {
        copyIbanBtn.addEventListener('click', function() {
            const ibanText = document.querySelector('.iban').textContent;
            
            // Create a temporary input element to copy the text
            const tempInput = document.createElement('input');
            tempInput.value = ibanText;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            
            // Change button icon temporarily to show success
            const originalIcon = this.innerHTML;
            this.innerHTML = '<i class="fa-solid fa-check"></i>';
            
            setTimeout(() => {
                this.innerHTML = originalIcon;
            }, 2000);
        });
    }
    
    // Add animation on scroll for sections
    const sections = document.querySelectorAll('section');
    
    function checkSections() {
        const triggerBottom = window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            }
        });
    }
    
    // Initial check
    checkSections();
    
    // Check on scroll
    window.addEventListener('scroll', checkSections);
}); 
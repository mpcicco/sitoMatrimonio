document.addEventListener('DOMContentLoaded', function() {

    
    
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

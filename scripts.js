// Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();
        
        // Simple script for section switching
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all sections and nav links
                document.querySelectorAll('section').forEach(section => {
                    section.classList.remove('active');
                });
                document.querySelectorAll('nav a').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                
                // Add active class to clicked nav link
                this.classList.add('active');
                
                // Show corresponding section
                const targetId = this.getAttribute('href');
                if (targetId !== '#') {
                    document.querySelector(targetId).classList.add('active');
                }
            });
        });
        
        // Mobile menu toggle
        const menuIcon = document.getElementById('menu-icon');
        const nav = document.querySelector('nav');
        
        menuIcon.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuIcon.classList.toggle('bx-x');
        });
        document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all fields', 'error');
            return;
        }
        
        // Here you would normally send the form data to a server
        // For demonstration, we'll just show a success message
        showMessage('Message sent successfully! I will get back to you soon.', 'success');
        
        // Reset form
        document.getElementById('contact-form').reset();
        });
        
        function showMessage(text, type) {
            const messageElement = document.getElementById('form-message');
            messageElement.textContent = text;
            messageElement.style.display = 'block';
            messageElement.style.color = type === 'success' ? '#4CAF50' : '#F44336';
            
            // Hide message after 5 seconds
            setTimeout(() => {
                messageElement.style.display = 'none';
            }, 5000);
        }
        // Function to animate progress bars when section comes into view
        function animateSkills() {
            const skillSection = document.getElementById('skills');
            const progressBars = document.querySelectorAll('.progress-bar div');
            const skillPercents = document.querySelectorAll('.skill-percent');
            
            // Check if section is in view
            const sectionPosition = skillSection.getBoundingClientRect();
            const isVisible = (sectionPosition.top < window.innerHeight - 100) && (sectionPosition.bottom >= 0);
            
            if (isVisible && !skillSection.classList.contains('animated')) {
                skillSection.classList.add('animated');
                
                progressBars.forEach((bar, index) => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                    
                    // Animate percentage counter
                    let current = 0;
                    const target = parseInt(width);
                    const increment = target / 50; // Adjust speed
                    
                    const updatePercent = () => {
                        current += increment;
                        if (current < target) {
                            skillPercents[index].textContent = Math.round(current) + '%';
                            requestAnimationFrame(updatePercent);
                        } else {
                            skillPercents[index].textContent = target + '%';
                        }
                    };
                    
                    updatePercent();
                });
            }
        }
        
        // Run on initial load
        document.addEventListener('DOMContentLoaded', animateSkills);
        
        // Run on scroll
        window.addEventListener('scroll', animateSkills);

        
    
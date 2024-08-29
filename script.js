document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('.navbar a, .footer a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Change Text Color on Hover
    const textElements = document.querySelectorAll('.home-content h1, .about-content h2 span, .projects-info h4');
    textElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            el.style.color = '#04fffb'; // Change color on hover
        });
        el.addEventListener('mouseout', () => {
            el.style.color = ''; // Reset color
        });
    });

    // Menu Toggle for Mobile View
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x'); // Change icon to close
    });

    // Show a "Scroll to Top" Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="bx bx-arrow-to-top"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

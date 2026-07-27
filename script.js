document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('.navbar a[href^="#"], .footer a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetElem = document.querySelector(targetId);
                if (targetElem) {
                    e.preventDefault();
                    targetElem.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile nav menu
                    const navbar = document.querySelector('.navbar');
                    const menuIcon = document.getElementById('menu-icon');
                    if (navbar && navbar.classList.contains('active')) {
                        navbar.classList.remove('active');
                        menuIcon.classList.remove('bx-x');
                    }
                }
            }
        });
    });

    // Mobile Menu Toggle
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('bx-x');
        });
    }

    // Scroll Active Section Highlight
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    });

    // Dynamic Typing Effect
    const typingSpan = document.querySelector('.text-animation span');
    if (typingSpan) {
        const words = ['Shopify & WordPress Stores', 'SEO & Search Engine Ranking', 'SMM & Meta Ad Marketing', 'Amazon & eBay Store Management', 'AI-Powered Web Applications'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typingSpan.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingSpan.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }

            setTimeout(typeEffect, typeSpeed);
        }

        typeEffect();
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="bx bx-up-arrow-alt"></i>';
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

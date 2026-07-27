document.addEventListener("DOMContentLoaded", () => {
    // 1. Theme Toggle System (Dark / Light Mode)
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle-btn';
    themeBtn.setAttribute('title', 'Toggle Theme');
    themeBtn.innerHTML = '<i class="bx bx-sun"></i>';
    document.body.appendChild(themeBtn);

    const savedTheme = localStorage.getItem('ahad_theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeBtn.innerHTML = '<i class="bx bx-moon"></i>';
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('ahad_theme', isLight ? 'light' : 'dark');
        themeBtn.innerHTML = isLight ? '<i class="bx bx-moon"></i>' : '<i class="bx bx-sun"></i>';
    });

    // 2. Smooth Scroll for Navigation Links
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

    // 3. Mobile Menu Toggle
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('bx-x');
        });
    }

    // 4. Dynamic Typing Effect
    const typingSpan = document.querySelector('.typing-text');
    if (typingSpan) {
        const words = [
            'Shopify E-Commerce Stores',
            'WordPress & WooCommerce',
            'SEO & Google Page 1 Rankings',
            'SMM & Meta Ad Funnels',
            'Amazon & eBay Storefronts',
            'AI Web Applications'
        ];
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

            let typeSpeed = isDeleting ? 40 : 70;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2200;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 400;
            }

            setTimeout(typeEffect, typeSpeed);
        }

        typeEffect();
    }

    // 5. Interactive Project Filtering & Real-Time Search
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const searchInput = document.getElementById('projectSearch');

    function filterProjects() {
        const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
        const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const title = card.querySelector('h4')?.textContent.toLowerCase() || '';
            const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
            const tech = card.querySelector('.project-subtext')?.textContent.toLowerCase() || '';

            const matchesCategory = (activeFilter === 'all' || category === activeFilter);
            const matchesSearch = (!searchQuery || title.includes(searchQuery) || desc.includes(searchQuery) || tech.includes(searchQuery));

            if (matchesCategory && matchesSearch) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.4s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProjects();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', filterProjects);
    }

    // 6. Interactive FAQ Accordion
    const faqCards = document.querySelectorAll('.faq-card');
    faqCards.forEach(card => {
        const question = card.querySelector('h3');
        if (question) {
            question.style.cursor = 'pointer';
            question.addEventListener('click', () => {
                faqCards.forEach(c => {
                    if (c !== card) c.classList.remove('open');
                });
                card.classList.toggle('open');
            });
        }
    });

    // 7. Scroll to Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="bx bx-up-arrow-alt"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
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

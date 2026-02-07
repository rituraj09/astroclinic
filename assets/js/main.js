// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Service Cards Modal
    const serviceCards = document.querySelectorAll('.service-card');
    const modalOverlay = document.getElementById('service-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalTitle = document.getElementById('modal-service-title');
    const modalBody = document.getElementById('modal-service-body');
    
    // Service details data
    const serviceDetails = {
        1: {
            title: "Horoscope & Birth Chart Analysis",
            content: `
                <p>In-depth analysis of your natal chart to understand:</p>
                <ul>
                    <li><strong>Career growth & timing:</strong> Identify favorable periods for career advancement and opportunities</li>
                    <li><strong>Financial stability:</strong> Understand wealth patterns and investment timing</li>
                    <li><strong>Health tendencies:</strong> Preventive insights based on planetary influences</li>
                    <li><strong>Relationship patterns:</strong> Analyze compatibility and relationship dynamics</li>
                    <li><strong>Life purpose & strengths:</strong> Discover your innate talents and life direction</li>
                </ul>
                <p>This comprehensive analysis forms the foundation for all our other services.</p>
            `
        },
        2: {
            title: "Match Making & Marriage Compatibility",
            content: `
                <p>Accurate and detailed compatibility analysis using:</p>
                <ul>
                    <li><strong>Ashtakoota Milan:</strong> Traditional 8-point compatibility system for marriage matching</li>
                    <li><strong>KP-based marriage timing:</strong> Precise timing for marriage using Krishnamurti Paddhati</li>
                    <li><strong>Dosha evaluation:</strong> Assessment of planetary doshas with practical remedies</li>
                    <li><strong>Long-term relationship harmony:</strong> Analysis of emotional and practical compatibility</li>
                </ul>
                <p>Ideal for marriage decisions and relationship clarity. We provide detailed reports and guidance for harmonious partnerships.</p>
            `
        },
        3: {
            title: "Astro-Vastu Consultation",
            content: `
                <p>Align your home, office, or commercial space with planetary energies to:</p>
                <ul>
                    <li><strong>Improve peace & productivity:</strong> Create harmonious environments that support well-being</li>
                    <li><strong>Reduce obstacles and stress:</strong> Identify and correct energy blockages in your space</li>
                    <li><strong>Enhance financial and career growth:</strong> Optimize spatial arrangements for prosperity</li>
                    <li><strong>No demolition. No superstition:</strong> Only logical corrections based on astro-vastu principles</li>
                </ul>
                <p>We combine Vastu Shastra with astrological principles to create balanced, supportive environments.</p>
            `
        },
        4: {
            title: "Education & Career Guidance",
            content: `
                <p>Astrology-based insights to help with:</p>
                <ul>
                    <li><strong>Choosing the right field of study:</strong> Identify subjects and disciplines aligned with your chart</li>
                    <li><strong>Competitive exams & education timing:</strong> Optimal periods for academic pursuits and examinations</li>
                    <li><strong>Career change decisions:</strong> Guidance on timing and direction for career transitions</li>
                    <li><strong>Business vs Job analysis:</strong> Determine your natural inclination and success potential</li>
                </ul>
                <p>Perfect for students, professionals, and entrepreneurs seeking clarity on educational and career paths.</p>
                <p>We also offer consultations for: Career & Business Astrology, Finance & Investment Timing, Health Astrology (Preventive Focus), Transit & Dasha Predictions, and Yearly Forecasts.</p>
            `
        }
    };
    
    // Open modal when service card is clicked
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');
            const service = serviceDetails[serviceId];
            
            if (service) {
                modalTitle.textContent = service.title;
                modalBody.innerHTML = service.content;
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside content
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Video play/pause control on mobile for better performance
    const heroVideo = document.getElementById('hero-video');
    
    // Pause video when not in viewport for performance
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroVideo.play().catch(e => console.log("Autoplay prevented:", e));
            } else {
                heroVideo.pause();
            }
        });
    }, { threshold: 0.5 });
    
    if (heroVideo) {
        videoObserver.observe(heroVideo);
    }
    
    // Add animation to elements on scroll
    const animatedElements = document.querySelectorAll('.expertise-card, .service-card, .philosophy-point, .contact-detail');
    
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        elementObserver.observe(element);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Lazy load images for better performance
    const lazyImages = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src') || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    }, { rootMargin: '50px 0px' });
    
    lazyImages.forEach(img => {
        // If image is already in viewport, load it immediately
        if (img.getBoundingClientRect().top < window.innerHeight) {
            img.src = img.getAttribute('data-src') || img.src;
            img.classList.add('loaded');
        } else {
            imageObserver.observe(img);
        }
    });
});
// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });
    
  // Header scroll effect with height and image animation - Mobile compatible
const header = document.querySelector('.header');
const logoImg = document.querySelector('.logo img');
let lastScrollTop = 0;
const scrollThreshold = 50;

// Set initial logo sizes based on screen width
function getLogoHeights() {
    const screenWidth = window.innerWidth;
    
    if (screenWidth <= 576) {
        // Mobile phones
        return { original: 45, small: 30 };
    } else if (screenWidth <= 768) {
        // Tablets
        return { original: 50, small: 35 };
    } else {
        // Desktop
        return { original: 80, small: 50 };
    }
}

// Update logo heights on resize
let logoHeights = getLogoHeights();

window.addEventListener('resize', function() {
    logoHeights = getLogoHeights();
    
    // Reset logo size based on current scroll state
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > scrollThreshold) {
        logoImg.style.height = `${logoHeights.small}px`;
        header.classList.add('scrolled');
    } else {
        logoImg.style.height = `${logoHeights.original}px`;
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Update logo heights in case of resize during scroll
    logoHeights = getLogoHeights();
    
    if (scrollTop > scrollThreshold) {
        header.classList.add('scrolled');
        
        // Smooth image scaling based on scroll position
        const scrollProgress = Math.min((scrollTop - scrollThreshold) / 200, 1);
        const currentLogoHeight = logoHeights.original - (scrollProgress * (logoHeights.original - logoHeights.small));
        
        // Apply smooth scaling to logo
        logoImg.style.height = `${currentLogoHeight}px`;
        
        // Optional: Add opacity effect during transition
        const logoOpacity = 1 - (scrollProgress * 0.2);
        logoImg.style.opacity = logoOpacity;
        
        // Add subtle parallax effect
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            // Scrolling down fast
            header.style.transform = 'translateY(-3px)';
        } else {
            // Scrolling up or slow scroll
            header.style.transform = 'translateY(0)';
        }
    } else {
        header.classList.remove('scrolled');
        
        // Reset logo to original size
        logoImg.style.height = `${logoHeights.original}px`;
        logoImg.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Initialize logo size on page load
document.addEventListener('DOMContentLoaded', function() {
    logoHeights = getLogoHeights();
    logoImg.style.height = `${logoHeights.original}px`;
});

// Reset logo on window resize
window.addEventListener('resize', function() {
    // Reset to ensure proper scaling
    if (!header.classList.contains('scrolled')) {
        logoImg.style.height = `${logoOriginalHeight}px`;
    } else {
        logoImg.style.height = `${logoSmallHeight}px`;
    }
});
    // Update active nav link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to corresponding link
                const activeLink = document.querySelector(`.nav a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Call on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Call on page load
    document.addEventListener('DOMContentLoaded', updateActiveNavLink);
    
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
    
    // VIDEO PLAY SOLUTION - Always playing, never pausing on scroll
    const heroVideo = document.getElementById('hero-video');
    
    if (heroVideo) {
        // Strategy 1: Try to play immediately
        const playPromise = heroVideo.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Initial autoplay blocked:", error);
                
                // Strategy 2: Play on first user interaction
                const playVideoOnInteraction = () => {
                    heroVideo.play();
                    
                    // Remove listeners after first successful play
                    ['click', 'touchstart', 'scroll', 'keydown'].forEach(eventType => {
                        document.removeEventListener(eventType, playVideoOnInteraction);
                    });
                };
                
                // Add multiple interaction listeners
                ['click', 'touchstart', 'scroll', 'keydown'].forEach(eventType => {
                    document.addEventListener(eventType, playVideoOnInteraction, { once: true });
                });
            });
        }
        
        // Strategy 3: Monitor and restart if paused (except when page is hidden)
        let isPageVisible = true;
        
        document.addEventListener('visibilitychange', () => {
            isPageVisible = !document.hidden;
            
            if (isPageVisible && heroVideo.paused) {
                heroVideo.play().catch(e => console.log("Visibility resume failed:", e));
            }
        });
        
        // Check every second if video should be playing
        const videoMonitor = setInterval(() => {
            if (isPageVisible && heroVideo.paused) {
                heroVideo.play().catch(e => {
                    console.log("Resume attempt failed:", e);
                });
            }
        }, 1000);
        
        // Clean up on page unload
        window.addEventListener('beforeunload', () => {
            clearInterval(videoMonitor);
        });
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
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
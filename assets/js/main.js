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
        },
         5: {
        title: "Gemstone & Rudraksha Recommendation",
        content: `
            <p><strong>Scientifically recommended gemstones and Rudraksha based on your birth chart</strong></p>
            <p>We analyze your planetary positions and recommend specific gemstones to:</p>
            <ul>
                <li><strong>Balance planetary energies:</strong> Strengthen weak planets and harmonize malefic influences</li>
                <li><strong>Enhance specific life areas:</strong> Target improvements in career, health, relationships, or finances</li>
                <li><strong>Authentic gemstone verification:</strong> Guidance on genuine vs. synthetic stones, proper weight, and quality</li>
                <li><strong>Customized recommendations:</strong> Based on your ascendant, moon sign, and specific planetary positions</li>
                <li><strong>Proper wearing instructions:</strong> Right metal, finger, day, time, and mantras for activation</li>
                <li><strong>Rudraksha selection:</strong> Recommend specific Mukhi (faced) Rudraksha for spiritual and material benefits</li>
            </ul>
            
            <p><strong>Common Gemstone Recommendations:</strong></p>
            <ul>
                <li><strong>Ruby (Manikya):</strong> For Sun - leadership, confidence, government success</li>
                <li><strong>Pearl (Moti):</strong> For Moon - emotional balance, mental peace, maternal happiness</li>
                <li><strong>Red Coral (Moonga):</strong> For Mars - courage, property, siblings harmony</li>
                <li><strong>Emerald (Panna):</strong> For Mercury - intelligence, communication, business success</li>
                <li><strong>Yellow Sapphire (Pukhraj):</strong> For Jupiter - wisdom, prosperity, children happiness</li>
                <li><strong>Diamond (Heera):</strong> For Venus - luxury, relationships, artistic talents</li>
                <li><strong>Blue Sapphire (Neelam):</strong> For Saturn - discipline, career stability, karmic balance</li>
                <li><strong>Hessonite (Gomed):</strong> For Rahu - technology success, foreign travel, sudden gains</li>
                <li><strong>Cat's Eye (Lehsunia):</strong> For Ketu - spirituality, intuition, protection</li>
            </ul>
            
            <p><strong>Our Approach:</strong></p>
            <ul>
                <li>We recommend gemstones only after thorough chart analysis</li>
                <li>Provide guidance on where to purchase authentic stones</li>
                <li>Follow-up consultations to monitor effects and adjustments</li>
                <li>Only genuine recommendations</li>
                <li>Combination stones for multiple planetary corrections</li>
            </ul>
            
            <p><strong>Note:</strong> Gemstones are powerful tools that should be chosen carefully. Wrong gemstones can cause harm rather than benefit. We ensure safe, accurate recommendations based on your unique astrological configuration.</p>
        `
        },
        6: {
            title: "Medical Astrology & Health Analysis",
            content: `
                <p><strong>Preventive health analysis and timing of health issues through astrology</strong></p>
                
                <p>Medical astrology analyzes the connection between planetary positions and your health patterns to:</p>
                
                <ul>
                    <li><strong>Identify health tendencies:</strong> Understand your constitutional strengths and weaknesses based on planetary influences</li>
                    <li><strong>Preventive guidance:</strong> Early warnings about potential health issues before they manifest</li>
                    <li><strong>Timing of health events:</strong> Predict favorable and challenging health periods through dasha and transit analysis</li>
                    <li><strong>Chronic condition management:</strong> Astrological insights for managing ongoing health conditions</li>
                    <li><strong>Remedies for health issues:</strong> Simple astrological remedies to support healing and recovery</li>
                    <li><strong>Mental health analysis:</strong> Understanding emotional and mental health patterns through moon and mercury positions</li>
                    <li><strong>Diet and lifestyle recommendations:</strong> Personalized suggestions based on your planetary constitution</li>
                </ul>
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

 

// Enhanced Particles.js with bigger, clearer particles
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 60, // Slightly fewer but bigger particles
                    density: {
                        enable: true,
                        value_area: 600
                    }
                },
                color: {
                    value: ["#d3bb00", "#cac600", "#bad010", "#cdd021", "#ffffff"]
                },
                shape: {
                    type: ["circle", "star", "triangle"],
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: 0.8, // Increased opacity
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.4,
                        sync: false
                    }
                },
                size: {
                    value: 5, // Increased from 3 to 5
                    random: true,
                    anim: {
                        enable: true,
                        speed: 3,
                        size_min: 2,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 120,
                    color: "#b8d400",
                    opacity: 0.6, // Increased opacity
                    width: 1.5, // Thicker lines
                    triangles: {
                        enable: true,
                        color: "#f1d535",
                        opacity: 0.3
                    }
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 150,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 10,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 6
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
    
    // Create bigger constellation elements
    createEnhancedConstellations();
});

// Enhanced constellation elements
function createEnhancedConstellations() {
    const container = document.querySelector('.hero');
    if (!container) return;
    
    // Remove existing constellation elements
    const existing = container.querySelectorAll('.constellation-element, .constellation-line');
    existing.forEach(el => el.remove());
    
    // Create bigger star elements
    for (let i = 0; i < 12; i++) {
        const star = document.createElement('div');
        star.className = 'constellation-element star';
        
        const size = 4 + Math.random() * 6; // Bigger stars: 4-10px
        const x = Math.random() * 95;
        const y = Math.random() * 95;
        const opacity = 0.6 + Math.random() * 0.4;
        
        star.style.cssText = `
            position: fixed;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, 
                rgba(255,255,255,0.9) 0%, 
                rgba(195, 172, 0, 0.7) 70%, 
                transparent 100%);
            border-radius: 50%;
            box-shadow: 0 0 ${size * 2}px rgba(157, 80, 187, 0.8);
            z-index: -1;
            pointer-events: none;
            animation: starPulse ${2 + Math.random() * 3}s infinite alternate;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        container.appendChild(star);
    }
    
    // Create bigger special stars
    for (let i = 0; i < 4; i++) {
        const specialStar = document.createElement('div');
        specialStar.className = 'constellation-element special-star';
        
        const x = 20 + Math.random() * 60;
        const y = 20 + Math.random() * 60;
        
        specialStar.style.cssText = `
            position: fixed;
            left: ${x}%;
            top: ${y}%;
            width: 12px;
            height: 12px;
            background: radial-gradient(circle, 
                #ffffff 0%, 
                #cfd200 30%, 
                #d7d400 70%, 
                transparent 100%);
            border-radius: 50%;
            box-shadow: 0 0 25px rgb(223, 233, 85);
            z-index: -1;
            pointer-events: none;
            animation: specialStarGlow ${3 + Math.random() * 2}s infinite alternate;
            animation-delay: ${Math.random() * 1.5}s;
        `;
        
        container.appendChild(specialStar);
    }
    
    // Create thicker constellation lines
    for (let i = 0; i < 8; i++) {
        const line = document.createElement('div');
        line.className = 'constellation-line';
        
        const x1 = Math.random() * 100;
        const y1 = Math.random() * 100;
        const x2 = x1 + (Math.random() * 30 - 15);
        const y2 = y1 + (Math.random() * 30 - 15);
        
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
        
        line.style.cssText = `
            position: fixed;
            left: ${Math.min(x1, x2)}%;
            top: ${Math.min(y1, y2)}%;
            width: ${length}vw;
            height: 2px; /* Thicker lines */
            background: linear-gradient(90deg, 
                transparent 0%, 
                rgba(210, 178, 0, 0.6) 20%, 
                rgba(228, 198, 0, 0.9) 50%, 
                rgba(210, 217, 7, 0.6) 80%, 
                transparent 100%);
            transform: rotate(${angle}deg);
            transform-origin: 0 0;
            z-index: -1;
            pointer-events: none;
            animation: linePulse ${4 + Math.random() * 4}s infinite alternate;
            filter: blur(0.5px);
        `;
        
        container.appendChild(line);
    }
}

// Add enhanced CSS animations
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
    @keyframes starPulse {
        0% {
            transform: scale(1);
            opacity: 0.5;
            box-shadow: 0 0 15px rgba(242, 226, 0, 0.5);
        }
        100% {
            transform: scale(1.3);
            opacity: 1;
            box-shadow: 0 0 25px rgb(217, 175, 7);
        }
    }
    
    @keyframes specialStarGlow {
        0% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(201, 195, 3, 0.7);
        }
        100% {
            transform: scale(1.5);
            box-shadow: 0 0 40px rgb(217, 207, 9),
                        0 0 60px rgba(208, 192, 10, 0.5);
        }
    }
    
    @keyframes linePulse {
        0% {
            opacity: 0.3;
            transform: rotate(var(--angle)) scaleX(0.8);
        }
        100% {
            opacity: 0.7;
            transform: rotate(var(--angle)) scaleX(1.2);
        }
    }
    
    /* Enhanced floating elements */
    .floating-element {
        position: absolute;
        color: rgba(215, 204, 0, 0.8);
        font-size: 32px; /* Bigger font size */
        z-index: 0;
        text-shadow: 0 0 15px rgba(202, 168, 14, 0.7);
        animation: floatEnhanced 8s ease-in-out infinite;
        filter: drop-shadow(0 0 8px rgba(218, 169, 10, 0.5));
    }
    
    @keyframes floatEnhanced {
        0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 0.7;
        }
        33% {
            transform: translateY(-30px) rotate(120deg) scale(1.2);
            opacity: 0.9;
        }
        66% {
            transform: translateY(15px) rotate(240deg) scale(1.1);
            opacity: 0.8;
        }
    }
    
    /* Bigger specific floating elements */
    .element-1 { font-size: 40px; animation-delay: 0s; }
    .element-2 { font-size: 36px; animation-delay: 1s; }
    .element-3 { font-size: 38px; animation-delay: 2s; }
    .element-4 { font-size: 42px; animation-delay: 3s; }
`;
document.head.appendChild(enhancedStyles);



// Add this to your main.js file
document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.getElementById('hero-video');
    
    if (heroVideo) {
        // Set playback rate to 0.5x (half speed)
        heroVideo.playbackRate = 0.5;
        
        // Optional: Also try to play the video
        heroVideo.play().catch(error => {
            console.log("Video autoplay prevented:", error);
            // Play on user interaction
            document.addEventListener('click', function playVideo() {
                heroVideo.play();
                heroVideo.playbackRate = 0.5;
                document.removeEventListener('click', playVideo);
            });
        });
    }
});


// Add to your main.js
document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.getElementById('hero-video');
    
    if (heroVideo) {
        // Set slower playback for better feel (optional)
        heroVideo.playbackRate = 0.5;
        
        // Handle video loading with fallback
        heroVideo.addEventListener('error', function() {
            console.log('Video failed to load, using fallback');
            this.style.display = 'none';
            const fallback = document.querySelector('.video-fallback');
            if (fallback) fallback.style.display = 'block';
        });
        
        // Lazy load for mobile
        if (window.innerWidth <= 768) {
            heroVideo.style.display = 'none';
        }
        
        // Try to play with error handling
        const playPromise = heroVideo.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('Video autoplay prevented:', error);
            });
        }
    }
});
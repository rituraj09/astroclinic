<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Astro-Clinic - Align Your Destiny</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Fixed Header -->
    <header class="header">
        <div class="container">
            <div class="logo">
                <img src="assets/images/logo_large.jpeg" alt="Astro-Clinic Logo">
            </div>
            <nav class="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#expertise">Expertise</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#philosophy">Philosophy</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div class="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </header>

   <!-- Replace the video section with this -->
   <section id="home" class="hero">
         <div class="video-background">
        <video autoplay muted loop playsinline id="hero-video">
            <source src="assets/video/hero-bg.mp4" type="video/mp4">
            <!-- Fallback to image if video doesn't load -->
            <div class="video-fallback"></div>
        </video>
    </div>
        <!-- Particle.js Canvas -->
        <div id="particles-js"></div>
        
        <!-- Dark Overlay -->
        <div class="hero-overlay"></div>
        
        <!-- Content -->
        <div class="hero-content">
            <h4 class="hero-subtitle">Ancient Wisdom. Precise Astrology. Practical Guidance.</h4>
            <h1 class="hero-title">Astro-Clinic</h1>
            <h2 class="hero-tagline">Align Your Destiny</h2>
            <p class="hero-description">With over 10 years of professional experience, we offer accurate, ethical, and result-oriented astrological guidance tailored to your unique birth chart.</p>
            <a href="#contact" class="btn-hero">Book a Consultation</a>
        </div>
       
    </section>

    <!-- About Section -->
    <section id="about" class="section about">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">About Astro-Clinic</h2>
                <p class="section-subtitle">Our approach is not fear-based or ritual-heavy. We believe astrology is a tool for clarity, timing, and alignment—not dependency.</p>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <p>At Astro-Clinic, we combine time-tested astrological traditions with deep analytical expertise to help you make informed life decisions.</p>
                    <p>We guide you to align with the right time, not force outcomes.</p>
                    <div class="features-grid">
                        <div class="feature">
                            <i class="fas fa-award"></i>
                            <span>10+ Years of Experience</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-shield-alt"></i>
                            <span>Ethical & Confidential</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-check-circle"></i>
                            <span>Practical & Logical</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-heart"></i>
                            <span>Focus on Solutions</span>
                        </div>
                    </div>
                </div>
                <div class="about-image">
                    <img src="assets/images/vastu_philosophy.jpg" alt="Astrology Chart">
                </div>
            </div>
        </div>
    </section>

    <!-- Expertise Section -->
    <section id="expertise" class="section expertise">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Expertise</h2>
                <p class="section-subtitle">We practice multiple advanced systems of astrology to ensure accuracy and depth</p>
            </div>
            <div class="expertise-grid">
                <div class="expertise-card">
                    <div class="expertise-icon">
                        <i class="fas fa-star-and-crescent"></i>
                    </div>
                    <h3>Vedic Astrology</h3>
                    <p>Parāśari System for comprehensive life analysis</p>
                </div>
                <div class="expertise-card">
                    <div class="expertise-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3>KP System</h3>
                    <p>Krishnamurti Paddhati – event-based and precise predictions</p>
                </div>
                <div class="expertise-card">
                    <div class="expertise-icon">
                        <i class="fas fa-eye"></i>
                    </div>
                    <h3>Jaimini Astrology</h3>
                    <p>Predictive and spiritual insights for life purpose</p>
                </div>
                <div class="expertise-card">
                    <div class="expertise-icon">
                        <i class="fas fa-book-open"></i>
                    </div>
                    <h3>Nadi Astrology</h3>
                    <p>Karma-centric and life-path analysis</p>
                </div>
                <div class="expertise-card">
                    <div class="expertise-icon">
                        <i class="fas fa-home"></i>
                    </div>
                    <h3>Astro-Vastu</h3>
                    <p>Harmonizing spaces with planetary energies</p>
                </div>
            </div>
            <p class="expertise-note">This multi-system approach allows us to cross-verify predictions and deliver highly reliable guidance.</p>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section services">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Services</h2>
                <p class="section-subtitle">Personalized consultations to guide you through life's challenges</p>
            </div>
            <div class="services-grid">
                <!-- Service Card 1 -->
                <div class="service-card" data-service="1">
                    <div class="service-image">
                        <img src="assets/images/birth_chart.jpg" alt="Horoscope Analysis">
                    </div>
                    <div class="service-content">
                        <h3>Horoscope & Birth Chart Analysis</h3>
                        <div class="service-hover">
                            <p>Click for details</p>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                
                <!-- Service Card 2 -->
                <div class="service-card" data-service="2">
                    <div class="service-image">
                        <img src="assets/images/match_making.jpg" alt="Match Making">
                    </div>
                    <div class="service-content">
                        <h3>Match Making & Marriage Compatibility</h3>
                        <div class="service-hover">
                            <p>Click for details</p>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                
                <!-- Service Card 3 -->
                <div class="service-card" data-service="3">
                    <div class="service-image">
                        <img src="assets/images/vastu.jpg" alt="Vastu Consultation">
                    </div>
                    <div class="service-content">
                        <h3>Astro-Vastu Consultation</h3>
                        <div class="service-hover">
                            <p>Click for details</p>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                
                <!-- Service Card 4 -->
                <div class="service-card" data-service="4">
                    <div class="service-image">
                        <img src="assets/images/career.jpg" alt="Career Guidance">
                    </div>
                    <div class="service-content">
                        <h3>Education & Career Guidance</h3>
                        <div class="service-hover">
                            <p>Click for details</p>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Philosophy Section -->
    <section id="philosophy" class="section philosophy">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Philosophy</h2>
                <p class="section-subtitle">Astrology should empower, not control</p>
            </div>
            <div class="philosophy-content">
                <div class="philosophy-image">
                    <img src="assets/images/vastu_body.jpg" alt="Philosophy">
                </div>
                <div class="philosophy-text">
                    <div class="philosophy-point">
                        <i class="fas fa-dove"></i>
                        <div>
                            <h3>Your free will matters</h3>
                            <p>We believe in guiding you to make informed decisions, not taking away your autonomy.</p>
                        </div>
                    </div>
                    <div class="philosophy-point">
                        <i class="fas fa-clock"></i>
                        <div>
                            <h3>Timing is everything</h3>
                            <p>Aligning actions with favorable planetary periods leads to better outcomes.</p>
                        </div>
                    </div>
                    <div class="philosophy-point">
                        <i class="fas fa-spa"></i>
                        <div>
                            <h3>Simple and practical remedies</h3>
                            <p>No complex rituals—only meaningful actions that create positive change.</p>
                        </div>
                    </div>
                    <div class="philosophy-point">
                        <i class="fas fa-lightbulb"></i>
                        <div>
                            <h3>Awareness leads to better decisions</h3>
                            <p>We don't promise miracles—we help you align with your destiny through knowledge.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Book a Consultation</h2>
                <p class="section-subtitle">Whether you're at a crossroads or simply seeking clarity, Astro-Clinic is here to guide you with precision and integrity.</p>
            </div>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-detail">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h3>Email</h3>
                            <p>consultation@astro-clinic.com</p>
                            <p>📩 Personal consultations available by appointment</p>
                        </div>
                    </div>
                    <div class="contact-detail">
                        <i class="fas fa-globe"></i>
                        <div>
                            <h3>Online Consultations</h3>
                            <p>🌐 Online consultations supported worldwide</p>
                            <p>Available via Zoom, WhatsApp, or Skype</p>
                        </div>
                    </div>
                    <div class="contact-detail">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <h3>Address</h3>
                            <p>Astro-Clinic Center</p>
                            <p>123 Wisdom Street, Cosmic City</p>
                            <p>Galaxy 10001</p>
                        </div>
                    </div>
                </div>
                <div class="contact-map">
                    <div class="map-placeholder">
                        <div class="map-overlay">
                            <h3>Find Us Here</h3>
                            <p>Our center is located in the heart of Cosmic City</p>
                        </div>
                        <!-- In a real implementation, you would embed a Google Map here -->
                        <div class="map-image">
                            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Astro-Clinic Location">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="assets/images/logo_large.jpeg" alt="Astro-Clinic Logo">
                    <p>Align Your Destiny with Ancient Wisdom</p>
                </div>
                <div class="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-social">
                    <h3>Connect With Us</h3>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 Astro-Clinic. All rights reserved. | Ancient Wisdom. Precise Astrology. Practical Guidance.</p>
            </div>
        </div>
    </footer>

    <!-- Fixed Call and Message Buttons -->
    <div class="fixed-buttons">
        <a href="tel:+1234567890" class="call-button">
            <i class="fas fa-phone"></i>
        </a>
        <a href="https://wa.me/1234567890" class="message-button">
            <i class="fab fa-whatsapp"></i>
        </a>
    </div>

    <!-- Service Details Modal -->
    <div class="modal-overlay" id="service-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title" id="modal-service-title">Service Details</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body" id="modal-service-body">
                <!-- Content will be loaded dynamically -->
            </div>
        </div>
    </div>

    <script src="assets/js/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
</body>
</html>
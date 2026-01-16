import React from "react";
import "./Footer.css";
import { 
  FaHeart, 
  FaCode, 
  FaCoffee, 
  FaRocket,
  FaArrowUp,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaRegCopyright
} from "react-icons/fa";

const GuestFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      {/* Animated Background */}
      <div className="footer-bg-shape"></div>
      <div className="footer-bg-shape"></div>
      
      <div className="container">
        
        {/* Main Footer Content */}
        <div className="footer-content">
          
          {/* Brand Section */}
          <div className="footer-brand" data-aos="fade-up">
            <div className="brand-header">
              <FaRocket className="brand-icon" />
              <span className="brand-name">Darshan<span className="brand-highlight">.</span></span>
            </div>
            <p className="brand-tagline">
              Crafting digital experiences with passion and precision
            </p>
            <div className="footer-quote">
              <FaCode className="quote-icon" />
              <p>
                "Good design is as little design as possible." 
                <span className="quote-author"> - Dieter Rams</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links" data-aos="fade-up" data-aos-delay="100">
            <h3 className="links-title">Quick Navigation</h3>
            <ul className="links-list">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/projects" className="footer-link">Projects</a></li>
              <li><a href="/experience" className="footer-link">Experience</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="footer-tech" data-aos="fade-up" data-aos-delay="200">
            <h3 className="tech-title">Tech Stack</h3>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">CSS3</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">Git</span>
              <span className="tech-tag">Machine Learning</span>
              <span className="tech-tag">Deep Learning</span>
              <span className="tech-tag">Git-Hub</span>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="footer-social" data-aos="fade-up" data-aos-delay="300">
            <h3 className="social-title">Connect With Me</h3>
            <div className="social-icons" >
              <a 
                href="https://www.linkedin.com/in/darshan-nandagavi/" 
                className="social-icon linkedin"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                
                
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://github.com/Darshannandagavi" 
                className="social-icon github"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.instagram.com/mr_darshan_nandagavi/" 
                className="social-icon instagram"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              
            </div>
            
            <div className="footer-contact">
              <a href="mailto:nandagavidarshan562@gmail.com" className="contact-email">
                nandagavidarshan562@gmail.com
              </a>
              <a href="tel:+916362460082" className="contact-phone">
                +91 6362460082
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider" data-aos="fade-up"></div>

        {/* Bottom Section */}
        <div className="footer-bottom" data-aos="fade-up">
          
          <div className="copyright">
            <FaRegCopyright className="copyright-icon" />
            <span>{currentYear} Darshan Nandagavi. All rights reserved.</span>
          </div>
          
          <div className="footer-meta">
            <div className="made-with">
              <FaHeart className="heart-icon" />
              <span>Made with</span>
              <FaCode className="code-icon" />
              <span>and</span>
              <FaCoffee className="coffee-icon" />
              <span>in India</span>
            </div>
          </div>
          
          {/* Back to Top Button */}
          <button 
            className="back-to-top" 
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

      {/* Floating Elements */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
    </footer>
  );
};

export default GuestFooter;
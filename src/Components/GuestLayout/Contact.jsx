import React from "react";
import "./Contact.css";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedinIn, 
  FaGithub, 
  FaInstagram,
  FaPaperPlane,
  FaGlobe,
 
} from "react-icons/fa";


const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        {/* Animated Background Elements */}
        <div className="contact-bg-circle"></div>
        <div className="contact-bg-circle"></div>
        
        {/* Header */}
        <div className="section-header" data-aos="fade-up">
          <div className="header-label">
            <FaPaperPlane className="label-icon" />
            <span>Contact</span>
          </div>
          
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span> & Create
            <span className="title-highlight"> Together</span>
          </h2>
          
          <p className="section-subtitle">
            Have a project in mind or just want to say hello? 
            I'm always open to discussing new opportunities and creative ideas.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Left Column - Contact Info */}
          <div className="contact-left" data-aos="fade-right">
            <div className="contact-card">
              <div className="card-header">
                <div className="card-icon">
                  <FaEnvelope />
                </div>
                <h3>Direct Contact</h3>
                <p className="card-subtitle">Quick response guaranteed</p>
              </div>
              
              <div className="contact-methods">
                <a 
                  href="mailto:nandagavidarshan562@gmail.com" 
                  className="method-item email-item"
                >
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Email Address</span>
                    <span className="method-value">nandagavidarshan562@gmail.com</span>
                  </div>
                  <div className="method-action">
                    <span>Send</span>
                  </div>
                </a>
                
                <a 
                  href="tel:+916362460082" 
                  className="method-item phone-item"
                >
                  <div className="method-icon">
                    <FaPhone />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Phone Number</span>
                    <span className="method-value">+91 6362460082</span>
                  </div>
                  <div className="method-action">
                    <span>Call</span>
                  </div>
                </a>
                
                <div className="method-item location-item">
                  <div className="method-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Location</span>
                    <span className="method-value">Sankeshwar, Belagavi, Karnataka</span>
                  </div>
                  <div className="method-action">
                    <FaGlobe />
                  </div>
                </div>
              </div>
              
              <div className="contact-cta">
                <p>Prefer to chat directly? I'm available for quick calls!</p>
                <a href="tel:+916362460082" className="cta-button">
                  <FaPhone /> Schedule a Call
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div className="contact-right" data-aos="fade-left">
            <div className="social-card">
              <div className="social-header">
                <h3>Connect Socially</h3>
                <p>Follow for updates and insights</p>
              </div>
              
              <div className="social-grid">
                <a 
                  href="https://www.linkedin.com/in/darshan-nandagavi/"
                  className="social-item linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="social-icon">
                    <FaLinkedinIn />
                  </div>
                  <div className="social-info">
                    <span className="social-name">LinkedIn</span>
                    <span className="social-handle">@darshan-nandagavi</span>
                  </div>
                  <div className="social-stats">
                    <span className="stat-tag">Professional</span>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/Darshannandagavi"
                  className="social-item github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="social-icon" style={{background:"white"}}>
                    <FaGithub />
                  </div>
                  <div className="social-info">
                    <span className="social-name">GitHub</span>
                    <span className="social-handle">@Darshannandagavi</span>
                  </div>
                  <div className="social-stats">
                    <span className="stat-tag">Code</span>
                  </div>
                </a>
                
                <a 
                  href="https://www.instagram.com/mr_darshan_nandagavi/"
                  className="social-item instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="social-icon">
                    <FaInstagram />
                  </div>
                  <div className="social-info">
                    <span className="social-name">Instagram</span>
                    <span className="social-handle">@mr_darshan_nandagavi</span>
                  </div>
                  <div className="social-stats">
                    <span className="stat-tag">Personal</span>
                  </div>
                </a>
              </div>
              
              <div className="social-cta">
                <div className="availability">
                  <div className="status-dot"></div>
                  <span>Usually responds within 2 hours</span>
                </div>
                
                <div className="social-actions">
                  <a 
                    href="mailto:nandagavidarshan562@gmail.com" 
                    className="action-button primary"
                  >
                    Send Message
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/darshan-nandagavi/" 
                    className="action-button secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
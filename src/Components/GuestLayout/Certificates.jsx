import React, { useState } from 'react';
import './Certificates.css';
import { FaCertificate, FaCalendarAlt, FaExternalLinkAlt, FaTimes, FaExpand, FaDownload } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: "Programming in Python",
      issuer: "Meta via Coursera",
      date: "November 28, 2025",
      photoUrl: "/certificates/python_programming_coursera_certificate.png", 
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/HNKXVNJ3BU15",
      downloadUrl: "/certificates/python_programming_coursera_certificate.png", 
      fileName: "python_programming_coursera_certificate.png",
      description: "Programming in Python - Learn Python programming fundamentals and build applications",
    },
    
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  // Function to handle download with proper file name
  const handleDownload = (cert) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cert.downloadUrl;
    link.download = cert.fileName || cert.name.replace(/\s+/g, '_').toLowerCase() + '.png';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  return (
    <div className="certificates-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional credentials and achievements</p>
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              
              {/* Certificate Photo with Click Handler */}
              <div 
                className="certificate-photo-container"
                onClick={() => openModal(cert.photoUrl)}
              >
                <img 
                  src={cert.photoUrl} 
                  alt={cert.name}
                  className="certificate-photo"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop";
                  }}
                />
                <div className="photo-overlay">
                  <FaExpand className="overlay-icon" />
                  <span className="overlay-text">Click to Expand</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="certificate-content">
                {/* Header */}
                <div className="certificate-header">
                  <div className="certificate-header-right">
                    <h3 className="certificate-title">{cert.name}</h3>
                    <div className="certificate-issuer-date">
                      <span className="issuer">{cert.issuer}</span>
                      <span className="date">
                        <FaCalendarAlt className="date-icon" />
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="certificate-description">{cert.description}</p>

                {/* Footer with Both Buttons in Single Row */}
                <div className="certificate-footer">
                  <div className="certificate-buttons">
                    <a 
                      href={cert.verifyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="verify-btn"
                    >
                      <FaExternalLinkAlt className="btn-icon" />
                      Verify
                    </a>
                    
                    <button 
                      onClick={() => handleDownload(cert)}
                      className="download-btn"
                    >
                      <FaDownload className="btn-icon" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {isModalOpen && (
          <div 
            className="modal-overlay" 
            onClick={handleModalClick}
          >
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              <img 
                src={selectedImage} 
                alt="Certificate Preview" 
                className="modal-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=800&fit=crop";
                }}
              />
              <div className="modal-footer">
                <a 
                  href={selectedImage} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-download-btn"
                >
                  <FaExternalLinkAlt />
                  Open in New Tab
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
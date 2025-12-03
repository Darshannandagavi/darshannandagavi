import "./Projects.css";
import { 
  FaCheckCircle, 
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaHome,
  FaShieldAlt,
  FaCar,
  FaRobot
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "LetMySpace",
      description: "A full-stack property listing and booking platform with authentication, uploads, OTP email verification, and admin panel.",
      icon: <FaHome />,
      date: "June 2024",
      status: "completed",
      tech: ["React.js", "Node.js", "MongoDB"],
      features: [
        "User/admin login system",
        "OTP email verification",
        "Secure file upload",
        "Admin dashboard"
      ]
    },
    {
      id: 2,
      title: "Morse-Security",
      description: "Secure file-sharing system using Morse code encryption with role-based access control.",
      icon: <FaShieldAlt />,
      date: "July 2024",
      status: "completed",
      tech: ["Node.js", "React.js", "MongoDB"],
      features: [
        "Morse-code encryption",
        "Role-based access",
        "File management",
        "Email alerts"
      ]
    },
    {
      id: 3,
      title: "QuickFix",
      description: "Vehicle emergency breakdown booking platform with real-time location tracking.",
      icon: <FaCar />,
      date: "July 2025",
      status: "completed",
      tech: ["MERN Stack", "Google Maps", "Nodemailer"],
      features: [
        "Find nearest shops",
        "Location sharing",
        "Booking system",
        "Email notifications"
      ]
    },
    {
      id: 4,
      title: "Jarvis AI",
      description: "AI-powered voice assistant with multilingual support and automation capabilities.",
      icon: <FaRobot />,
      date: "June 2025",
      status: "completed",
      tech: ["Python", "Gemini API", "SpeechRecognition"],
      features: [
        "Voice commands",
        "Email automation",
        "Multilingual",
        "Web automation"
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Projects
          </h2>
          <p className="section-subtitle">
            Selected work showcasing my technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={project.id * 100}
            >
              
              {/* Header */}
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-header-right">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-date">
                    <FaCalendarAlt className="date-icon" />
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="project-description">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="features-list">
                {project.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="project-footer">
                <div className={`status-badge ${project.status}`}>
                  {project.status === 'in-progress' ? 'In Progress' : 'Completed'}
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="view-all" data-aos="fade-up">
          <NavLink to="/projects" className="view-all-btn">
            View All Projects
            <FaExternalLinkAlt className="btn-icon" />
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default Projects;
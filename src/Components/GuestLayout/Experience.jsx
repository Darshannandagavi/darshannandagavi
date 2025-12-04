import React from "react";
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaCode, 
  FaBrain,
  FaServer,
  FaExternalLinkAlt,
  FaChartLine,
  FaShieldAlt,
  FaLaptopCode
} from "react-icons/fa";
import "./Experience.css";


const Experience = () => {

  const experience = {
    title: "Full Stack Development Intern",
    company: "Ligand Software Solutions, Sankeshwar",
    period: "Feb 2025 – Present",
    description:
      "Developing multiple end-to-end MERN applications with secure authentication, REST APIs, role-based access, and responsive dashboards. Integrated ML models into apps for real-time prediction and automation.",
    responsibilities: [
      "Developed end-to-end MERN applications",
      "Integrated Machine Learning models",
      "Built REST APIs with secure authentication",
      "Created responsive UI dashboards",
      "Contributed to internal tools and live client websites"
    ]
  };

  const keyProjects = [
    {
      id: 1,
      title: "Cyber Attack Predictor",
      category: "Machine Learning",
      description:
        "Predictive model using 40+ input features, optimized Scikit-learn classifiers, and feature engineering.",
      icon: <FaBrain />,
      tech: ["Python", "Scikit-learn", "Feature Engineering"]
    },
    {
      id: 2,
      title: "Pothole Detection System",
      category: "Machine Learning",
      description:
        "OpenCV-based pothole detection system with auto-email reporting.",
      icon: <FaChartLine />,
      tech: ["Python", "OpenCV", "Email Automation"]
    },
    {
      id: 3,
      title: "Morse Security",
      category: "MERN Stack",
      description:
        "Secure file-sharing app using Morse-code-based password encryption.",
      icon: <FaShieldAlt />,
      tech: ["MERN Stack", "Encryption", "File Sharing"]
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Gururaj Foundation",
      type: "Live Client Project",
      description:
        "Complete NGO platform with donations, exams, student dashboards, and paid courses.",
      liveUrl: "https://gururajfoundation.com",
      icon: <FaServer />,
      features: [
        "Public donations",
        "Student registration",
        "Online exams",
        "Course management"
      ]
    },
    {
      id: 2,
      title: "Ligand Work-Space",
      type: "Internal Project",
      description:
        "Learning management system featuring attendance, homework evaluation, fee management, project grouping, and admin controls.",
        liveUrl: "https://liganddevelopers.vercel.app/",
      icon: <FaLaptopCode />,
      features: [
        "Attendance tracking",
        "Homework evaluation",
        "Fee management",
        "Admin controls"
      ]
    }
  ];

  return (
    <section id="experience" className="exp-section">
      <div className="exp-container">

        {/* Header */}
        <div className="exp-header" data-aos="fade-up">
          <h2 className="exp-title">Experience</h2>
          <p className="exp-subtitle">Professional journey and key achievements</p>
        </div>

        {/* Experience Card */}
        <div className="exp-card" data-aos="fade-up">
          <div className="exp-main-header">
            <div className="exp-company-icon">
              <FaBriefcase />
            </div>

            <div className="exp-info">
              <h3 className="exp-job-title">{experience.title}</h3>
              <p className="exp-company">{experience.company}</p>

              <div className="exp-period">
                <FaCalendarAlt className="exp-period-icon" />
                <span>{experience.period}</span>
              </div>
            </div>
          </div>

          <p className="exp-description">{experience.description}</p>

          <div className="exp-responsibilities">
            <h4 className="exp-resp-title">Responsibilities</h4>

            <ul className="exp-resp-list">
              {experience.responsibilities.map((item, index) => (
                <li key={index} className="exp-resp-item">
                  <FaCode className="exp-resp-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Projects */}
        <div className="exp-projects" data-aos="fade-up">
          <h3 className="exp-sub-header">Key Projects</h3>

          <div className="exp-projects-grid">
            {keyProjects.map((project) => (
              <div key={project.id} className="exp-project-card">
                <div className="exp-project-header">
                  <div className="exp-project-icon">{project.icon}</div>

                  <div>
                    <h4 className="exp-project-title">{project.title}</h4>
                    <span className="exp-project-category">{project.category}</span>
                  </div>
                </div>

                <p className="exp-project-description">{project.description}</p>

                <div className="exp-tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="exp-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="exp-achievements" data-aos="fade-up">
          <h3 className="exp-sub-header">Achievements</h3>

          <div className="exp-achievements-grid">
            {achievements.map((item) => (
              <div key={item.id} className="exp-achievement-card">
                <div className="exp-achievement-header">
                  <div className="exp-achievement-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="exp-achievement-title">{item.title}</h4>
                    <span className="exp-achievement-type">{item.type}</span>
                  </div>
                </div>

                <p className="exp-achievement-description">{item.description}</p>

                <div className="exp-feature-list">
                  {item.features.map((feature, index) => (
                    <span key={index} className="exp-feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-live-btn"
                  >
                    <FaExternalLinkAlt className="exp-live-icon" /> View Live
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;

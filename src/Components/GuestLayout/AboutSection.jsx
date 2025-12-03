import React from "react";
import "./AboutSection.css";
import { FaCloud, FaTools } from "react-icons/fa";

import {
  SiMongodb,
  SiC,
  SiVercel,
  SiRender,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

// React Icons
import {
  FaRocket,
  FaHome,
  FaHandshake,
  FaReact,
  FaNodeJs,
  FaJs,
  FaCode,
  FaBrain,
  FaChartLine,
} from "react-icons/fa";
import { SiPython, SiTensorflow } from "react-icons/si";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Animated Background Elements */}
        <div className="about-bg-blob"></div>
        <div className="about-bg-blob"></div>

        {/* Header */}
        <div className="section-header" data-aos="fade-up">
          <div className="header-label">
            <FaCode className="label-icon" />
            <span>About Me</span>
          </div>

          <h2 className="section-title">
            Passionate <span className="gradient-text">Developer</span> &
            <span className="highlight"> Tech Enthusiast</span>
          </h2>

          <div className="title-line"></div>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left Column - About Info */}
          <div className="about-left">
            {/* About Card */}
            <div className="about-card" data-aos="fade-right">
              <div className="card-header">
                <h3>Who I Am</h3>
                <div className="card-subtitle">
                  Full Stack Developer • MCA Student • Problem Solver
                </div>
              </div>

              <div className="card-body">
                <p className="about-text">
                  I'm <strong>Darshan Nandagavi</strong>, a passionate Full
                  Stack Developer specializing in the
                  <span className="tech-highlight"> MERN stack</span>. With a
                  strong foundation in both frontend and backend technologies, I
                  create scalable, efficient web applications that solve
                  real-world problems.
                </p>

                <p className="about-text">
                  My approach combines <strong>clean architecture</strong> with
                  <strong> intuitive user experiences</strong>, ensuring every
                  project I work on is not only functional but also delightful
                  to use.
                </p>

                <div className="expertise">
                  <div className="expertise-item">
                    <div className="expertise-dot"></div>
                    <span>Full Stack Development</span>
                  </div>
                  <div className="expertise-item">
                    <div className="expertise-dot"></div>
                    <span>API Design & Integration</span>
                  </div>
                  <div className="expertise-item">
                    <div className="expertise-dot"></div>
                    <span>Database Architecture</span>
                  </div>
                  <div className="expertise-item">
                    <div className="expertise-dot"></div>
                    <span>Performance Optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Highlight */}
            <div
              className="projects-card"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="projects-header">
                <FaRocket className="projects-icon" />
                <h3>Active Projects</h3>
              </div>

              <div className="projects-list">
                <div className="project-item">
                  <div className="project-badge">
                    <FaRocket />
                  </div>
                  <div className="project-info">
                    <h4>QuickFix</h4>
                    <p>Vehicle emergency booking platform</p>
                  </div>
                  <div className="project-status">
                    <div className="status-dot active"></div>
                    <span>In Progress</span>
                  </div>
                </div>

                <div className="project-item">
                  <div className="project-badge">
                    <FaHome />
                  </div>
                  <div className="project-info">
                    <h4>LetMySpace</h4>
                    <p>Property listing system</p>
                  </div>
                  <div className="project-status">
                    <div className="status-dot active"></div>
                    <span>In Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="about-right">
            {/* Skills Card */}
            <div className="skills-card" data-aos="fade-left">
              <div className="skills-header">
                <h3>Technologies I work with daily</h3>
              </div>

              <div className="skills-grid">
                {/* AI/ML Section */}
                <div className="skill-category">
                  <div className="category-header">
                    <FaBrain className="category-icon" />
                    <h4>AI & ML</h4>
                  </div>
                  <div className="category-skills">
                    <div
                      className="skill-item"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <div className="skill-icon-wrapper">
                        <FaBrain />
                      </div>
                      <span>Artificial Intelligence</span>
                    </div>

                    <div
                      className="skill-item"
                      data-aos="zoom-in"
                      data-aos-delay="150"
                    >
                      <div className="skill-icon-wrapper">
                        <FaChartLine />
                      </div>
                      <span>Machine Learning</span>
                    </div>

                    <div
                      className="skill-item"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <div className="skill-icon-wrapper">
                        <SiTensorflow />
                      </div>
                      <span>Deep Learning</span>
                    </div>
                  </div>
                </div>

                {/* Web Development Section */}
                <div className="skill-category">
                  <div className="category-header">
                    <FaCode className="category-icon" />
                    <h4>Web Development</h4>
                  </div>
                  <div className="category-skills">
                    <div
                      className="skill-item"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <div className="skill-icon-wrapper react">
                        <FaReact />
                      </div>
                      <span>React</span>
                    </div>

                    <div
                      className="skill-item"
                      data-aos="zoom-in"
                      data-aos-delay="150"
                    >
                      <div className="skill-icon-wrapper node">
                        <FaNodeJs />
                      </div>
                      <span>Node.js</span>
                    </div>

                    <div
                      className="skill-item"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <div className="skill-icon-wrapper mongo">
                        <SiMongodb />
                      </div>
                      <span>MongoDB</span>
                    </div>
                  </div>
                </div>

                {/* Programming Languages */}
                <div className="skill-category">
                  <div className="category-header">
                    <FaCode className="category-icon" />
                    <h4>Programming Languages</h4>
                  </div>

                  <div className="category-skills">
                    <div
                      className="skill-item"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <div className="skill-icon-wrapper">
                        <SiC />
                      </div>
                      <span>C</span>
                    </div>

                    <div
                      className="skill-item"
                      data-aos="zoom-in"
                      data-aos-delay="150"
                    >
                      <div className="skill-icon-wrapper">
                        <SiPython />
                      </div>
                      <span>Python</span>
                    </div>

                    <div
                      className="skill-item"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <div className="skill-icon-wrapper">
                        <FaJs />
                      </div>
                      <span>JavaScript</span>
                    </div>
                  </div>
                </div>

                {/* Deployment Section */}
                <div className="skill-category">
                  <div className="category-header">
                    <FaCloud className="category-icon" />
                    <h4>Deployment</h4>
                  </div>

                  <div className="category-skills">
                    <div
                      className="skill-item"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <div className="skill-icon-wrapper">
                        <SiVercel />
                      </div>
                      <span>Vercel</span>
                    </div>

                    <div
                      className="skill-item"
                      data-aos="zoom-in"
                      data-aos-delay="150"
                    >
                      <div className="skill-icon-wrapper">
                        <SiRender />
                      </div>
                      <span>Render</span>
                    </div>
                  </div>
                </div>

                {/* Other Skills */}
                <div className="skill-category">
                  <div className="category-header">
                    <FaTools className="category-icon" />
                    <h4>Other Skills</h4>
                  </div>

                  <div className="category-skills">
                    <div
                      className="skill-item"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <div className="skill-icon-wrapper">
                        <SiGit />
                      </div>
                      <span>Git</span>
                    </div>

                    <div
                      className="skill-item"
                      data-aos="zoom-in"
                      data-aos-delay="150"
                    >
                      <div className="skill-icon-wrapper">
                        <SiGithub />
                      </div>
                      <span>GitHub</span>
                    </div>

                    <div
                      className="skill-item"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <div className="skill-icon-wrapper">
                        <SiPostman />
                      </div>
                      <span>Postman</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section" data-aos="fade-up">
          <div className="cta-card">
            <div className="cta-icon-wrapper">
              <FaHandshake />
            </div>
            <div className="cta-content">
              <h3>Let's Build Something Amazing</h3>
              <p>
                Have a project in mind? Let's collaborate and bring your ideas
                to life.
              </p>
            </div>
            <a href="#contact" className="btn btn-primary">
              <FaHandshake className="btn-icon" />
              <span>Start a Conversation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from "react";
import "./HeroSection.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Tilt from "react-parallax-tilt";

// React Icons
import { AiOutlineSearch } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import AboutSection from "./AboutSection";
import Projects from "./Projects";
import Contact from "./Contact";
import Education from "./Education"
import Experience from "./Experience";
const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <main className="main" style={{marginTop:"40px"}}>
      <section className="hero">
        
        {/* LEFT SIDE - Content */}
        <div className="hero-left" data-aos="fade-up">
          
          {/* Badge/Title */}
          <div className="hero-intro" data-aos="fade-up" data-aos-delay="50">
          
            <h1>
              Hi, I'm <span className="highlight-name">Darshan Nandagavi</span>
            </h1>
          </div>

          {/* Subtitle */}
          <h2 data-aos="fade-up" data-aos-delay="100">
            <span >🚀</span> MERN Stack Specialist
          </h2>

          {/* Description */}
          <p className="hero-desc" data-aos="fade-up" data-aos-delay="150">
            Full-stack web developer specializing in MERN — creating apps that
            scale and impress. Driven by performance, clean architecture, and
            intuitive interfaces. Transforming ideas into functional, real-world
            applications.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="200">
            <a href="#projects" className="btn btn-primary">
              <AiOutlineSearch className="btn-icon" /> 
              <span>View Projects</span>
            </a>
            
            <a 
              href="/Darshan_Resume.pdf" 
              className="btn btn-secondary"
              download
            >
              <FaDownload className="btn-icon" /> 
              <span>Download Resume</span>
            </a>
          </div>

         

        </div>

        {/* RIGHT SIDE - Profile Image */}
        <div className="hero-right" data-aos="fade-left" data-aos-delay="300">
  <Tilt
    glareEnable={true}
    gyroscope={true}
    tiltReverse={true}
    glareMaxOpacity={0.45}
    glareColor="#ffffff"
    glarePosition="all"
    scale={1.05}
    transitionSpeed={2500}
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    className="tilt-wrapper"
  >
    <div className="image-wrapper">
      <img
        src="./DarshanNandagavi.png"
        alt="Darshan Nandagavi"
        className="profile-pic"
      />

      <div className="tech-badge react-badge">
        <span>React</span>
      </div>
      <div className="tech-badge node-badge">
        <span>Node.js</span>
      </div>
      <div className="tech-badge mongo-badge">
        <span>MongoDB</span>
      </div>
    </div>
  </Tilt>
</div>


      </section>
      <AboutSection/>
      <Education/>
      <Projects/>
      <Experience/>
      <Contact/>
    </main>
  );
};

export default HeroSection;
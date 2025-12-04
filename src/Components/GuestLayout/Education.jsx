import React, { useEffect } from "react";
import "./Education.css";
import { FaBookOpen, FaFlask, FaGraduationCap } from "react-icons/fa";
import AOS from "aos";

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const educationItems = [
    {
      id: 1,
      title: "Masters of Computer Applications (MCA)",
      institution: "Presidency College Autonomous, Bengaluru",
      date: "2025 – 2027",
      icon: <FaGraduationCap />,
      iconColor: "#6c5ce7"
    },
    {
      id: 2,
      title: "Bachelor of Computer Applications (BCA)",
      institution: "SDVS'S BCA College, Sankeshwar",
      date: "2022 – 2025",
      grade: "CGPA: 9.0 / 10",
      icon: <FaGraduationCap />,
      iconColor: "#6c5ce7"
    },
    {
      id: 3,
      title: "Pre-University (PU) – Science",
      institution: "SJPN PU College, Nidasoshi",
      date: "2020 – 2022",
      grade: "Percentage: 72.4%",
      icon: <FaFlask />,
      iconColor: "#ffa726"
    }
  ];

  return (
    <section id="education" className="edu-section">
      <div className="edu-container">

        {/* Header */}
        <div className="edu-header" data-aos="fade-up">
          <h2 className="edu-title">Education</h2>
          <p className="edu-subtitle">My academic background and achievements</p>
        </div>

        {/* Cards */}
        <div className="edu-cards">
          {educationItems.map((item) => (
            <div
              key={item.id}
              className="edu-card"
              data-aos="fade-up"
              data-aos-delay={item.id * 100}
            >
              <div className="edu-icon" style={{ color: item.iconColor }}>
                {item.icon}
              </div>

              <div className="edu-content">
                <h3 className="edu-card-title">{item.title}</h3>
                <p className="edu-institution">{item.institution}</p>

                <div className="edu-meta">
                  <div className="edu-meta-item">
                    <span className="edu-meta-label">Duration </span>
                    <span className="edu-meta-value"> {item.date}</span>
                  </div>

                  <div className="edu-meta-item">
                    <span className="edu-meta-label">Grade </span>
                    <span className="edu-meta-value edu-grade"> {item.grade}</span>
                  </div>
                </div>
              </div>

              
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="edu-extra" data-aos="fade-up">
          <div className="edu-extra-item">
            <FaBookOpen className="edu-extra-icon" />
            <div className="edu-extra-content">
              <h4>Academic Focus</h4>
              <p>Computer Science, Web Development, Software Engineering</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;

import React, { useEffect } from "react";
import styles from './Education.module.css';
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
    <section id="education" className={styles.educationSection}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.sectionHeader} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Education</h2>
          <p className={styles.sectionSubtitle}>My academic background and achievements</p>
        </div>

        {/* Education Cards */}
        <div className={styles.educationCards}>
          {educationItems.map((item) => (
            <div 
              key={item.id} 
              className={styles.educationCard}
              data-aos="fade-up"
              data-aos-delay={item.id * 100}
            >
              
              {/* Icon */}
              <div className={styles.educationIcon} style={{ color: item.iconColor }}>
                {item.icon}
              </div>

              {/* Content */}
              <div className={styles.educationContent}>
                <h3 className={styles.educationTitle}>{item.title}</h3>
                <p className={styles.educationInstitution}>{item.institution}</p>
                
                <div className={styles.educationMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Duration</span>
                    <span className={styles.metaValue}>{item.date}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Grade</span>
                    <span className={`${styles.metaValue} ${styles.grade}`}>{item.grade}</span>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className={styles.statusIndicator}>
                <div 
                  className={`${styles.statusDot} ${item.id === 1 ? styles.current : styles.completed}`}
                ></div>
                <span className={styles.statusText}>
                  {item.id === 1 ? 'Current' : 'Completed'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={styles.additionalInfo} data-aos="fade-up">
          <div className={styles.infoItem}>
            <FaBookOpen className={styles.infoIcon} />
            <div className={styles.infoContent}>
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
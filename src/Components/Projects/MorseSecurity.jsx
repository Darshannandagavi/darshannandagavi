import React, { useState } from "react";
import "./LetMySpace.css";

const MorseSecurity = () => {
  const [modalImage, setModalImage] = useState(null);
  const projectImages = [
    {
      title: "Landing Page / Hero Section",
      src: "/morsehero.png",
      note: "Replace with homepage screenshot showing branding, navigation, and authentication entry points.",
    },
    {
      title: "User Workspace",
      src: "/morseuser.png",
      note: "Replace with logged-in user view showing received files, share panel, and profile widgets.",
    },
    {
      title: "Secure File Share Flow",
      src: "/morseadmindashboard.png",
      note: "Replace with file share form screenshot showing recipient targeting and optional password protection.",
    },
    {
      title: "Admin Control Panel",
      src: "/morsefiles.png",
      note: "Replace with admin dashboard screenshot showing role management, pending approvals, and moderation.",
    },
    {
      title: "Notifications and Activity View",
      src: "/morsenotification.png",
      note: "Replace with user notifications and file history/activity tracking screenshot.",
    },
  ];

  const coreFeatures = [
    "Role-based workflow with dedicated interfaces for Guest, User, and Admin.",
    "Secure authentication using bcrypt password hashing, JWT tokens, and HTTP-only cookie-based sessions.",
    "Admin approval pipeline for new registrations with pending, approved, and rejected verification states.",
    "File sharing with audience targeting (all users, specific role, or specific user) using Multer uploads.",
    "Optional file password protection with Morse-oriented transformation logic before secure distribution.",
    "Download protection with failed-attempt tracking and automatic temporary banning for repeated invalid access.",
    "Real-time role-based notifications powered by Socket.IO and persisted notification records.",
    "User account security utilities including forgot password, password change, and profile update workflows.",
  ];

  const architecture = [
    "Frontend (React): Manages role-aware routing, authentication state, file sharing UI, admin workflows, and notification views.",
    "Backend (Node.js + Express): Provides REST APIs for auth, file lifecycle, role management, moderation, profile operations, and contact handling.",
    "Realtime Layer (Socket.IO): Delivers live notification broadcasts to role-specific rooms for immediate communication updates.",
    "Database (MongoDB + Mongoose): Stores users, roles, files, notifications, and contact submissions with indexed schemas.",
    "Media and File Handling (Multer + File System): Accepts uploads, persists metadata, and streams downloads with access validation.",
    "Email Service (Nodemailer + Gmail SMTP): Sends welcome emails, admin registration alerts, approval/rejection updates, and recovery credentials.",
  ];

  const importantModules = [
    {
      name: "Authentication and Access Control",
      details:
        "Handles registration, login, logout, auth status checks, JWT cookie validation, password hashing, and account verification state transitions.",
    },
    {
      name: "Secure File Distribution",
      details:
        "Supports file upload/share, recipient scoping by role or user, optional password protection, protected download checks, and download streaming.",
    },
    {
      name: "Morse Security Logic",
      details:
        "Applies custom password transformation flow (letter shifting + Morse conversion for communication context) while storing hashed original passwords for verification.",
    },
    {
      name: "Admin Governance and Moderation",
      details:
        "Provides tools to manage roles, review pending users, approve/reject onboarding, view banned users, unban accounts, and audit shared file actions.",
    },
    {
      name: "Notifications and Communication",
      details:
        "Includes role-targeted announcements, read-tracking for notifications, and contact message handling between users and administrators.",
    },
  ];

  const challengesAndSolutions = [
    {
      challenge: "Designing secure file access without sacrificing usability.",
      solution:
        "Implemented optional password-protected downloads with hashed verification, tracked attempts, and temporary ban policies for repeated failures.",
    },
    {
      challenge:
        "Coordinating multi-role navigation and authorization boundaries.",
      solution:
        "Used route-level separation and backend role checks to enforce clear Guest, User, and Admin access paths.",
    },
    {
      challenge: "Keeping users informed of updates in real time.",
      solution:
        "Integrated Socket.IO role rooms so notifications are pushed instantly and aligned with each user’s access scope.",
    },
    {
      challenge: "Scaling feature complexity while maintaining code clarity.",
      solution:
        "Structured backend into modular controllers, routes, and Mongoose models, enabling maintainable growth of auth, file, and admin features.",
    },
  ];

  const outcomes = [
    "Built a practical full-stack secure file sharing platform using MERN architecture.",
    "Implemented production-relevant security patterns including hashed credentials, token-based auth, and account protection controls.",
    "Developed deeper expertise in role-driven backend API design and moderation workflows.",
    "Delivered end-to-end file lifecycle handling with upload, protection, history tracking, and controlled download delivery.",
  ];

  return (
    <section className="lms-page">
      <header className="lms-header">
        <h1 className="lms-title">Morse Security File Sharing System</h1>
        <p className="lms-subtitle">
          Full-stack secure file sharing platform focused on role-based access,
          protected downloads, and real-time communication.
        </p>
      </header>

      <section className="lms-section lms-section--overview">
        <h2 className="lms-section-heading">Project Overview</h2>
        <p className="lms-body-text">
          Morse Security File Sharing System is designed to enable safe and
          structured file communication across different user types. Guests can
          explore the platform and register, users can securely share and
          receive files, and administrators can supervise registrations,
          permissions, and moderation workflows. The system emphasizes
          controlled access and practical security behavior in day-to-day
          collaboration scenarios.
        </p>
        <p className="lms-body-text">
          The project combines a React client, Express API layer, and MongoDB
          persistence with dedicated modules for authentication, file transfer,
          user-role governance, real-time notifications, and account lifecycle
          management. It integrates upload pipelines, protected downloads, and
          email-based communication to simulate real-world secure product
          behavior.
        </p>
      </section>

      <section className="lms-section lms-section--gallery">
        <div className="lms-image-grid">
          {projectImages.map((img) => (
            <figure
              className="lms-image-card"
              key={img.title}
              onClick={() => setModalImage(img)}
            >
              <div className="lms-image-card__wrapper">
                <img
                  src={img.src}
                  alt={img.title}
                  className="lms-image-card__img"
                />
                <div className="lms-image-card__overlay">
                  <span className="lms-image-card__overlay-icon">⛶</span>
                  <span className="lms-image-card__overlay-text">
                    Click to expand
                  </span>
                </div>
              </div>
              <figcaption className="lms-image-card__caption">
                <strong className="lms-image-card__title">{img.title}</strong>
                <p className="lms-image-card__note">{img.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="lms-section lms-section--features">
        <h2 className="lms-section-heading">Core Features</h2>
        <ul className="lms-feature-list">
          {coreFeatures.map((feature) => (
            <li className="lms-feature-list__item" key={feature}>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="lms-section lms-section--architecture">
        <h2 className="lms-section-heading">System Architecture</h2>
        <ul className="lms-arch-list">
          {architecture.map((item) => (
            <li className="lms-arch-list__item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="lms-section lms-section--modules">
        <h2 className="lms-section-heading">Major Functional Modules</h2>
        {importantModules.map((module) => (
          <article className="lms-module-card" key={module.name}>
            <h3 className="lms-module-card__name">{module.name}</h3>
            <p className="lms-module-card__details">{module.details}</p>
          </article>
        ))}
      </section>

      <section className="lms-section lms-section--stack">
        <h2 className="lms-section-heading">Technical Stack</h2>
        <ul className="lms-stack-list">
          <li className="lms-stack-list__item">
            Frontend: React, React Router, Axios, Bootstrap
          </li>
          <li className="lms-stack-list__item">
            Backend: Node.js, Express.js, Body Parser, CORS, Cookie Parser
          </li>
          <li className="lms-stack-list__item">
            Database: MongoDB with Mongoose ODM
          </li>
          <li className="lms-stack-list__item">
            Realtime: Socket.IO for role-based live notifications
          </li>
          <li className="lms-stack-list__item">
            Authentication/Security: bcrypt, JWT, HTTP-only cookies
          </li>
          <li className="lms-stack-list__item">
            Email: Nodemailer with Gmail SMTP integration
          </li>
          <li className="lms-stack-list__item">
            File Uploads: Multer + local file system streaming
          </li>
        </ul>
      </section>

      <section className="lms-section lms-section--challenges">
        <h2 className="lms-section-heading">Challenges and Solutions</h2>
        {challengesAndSolutions.map((item) => (
          <article className="lms-challenge-card" key={item.challenge}>
            <p className="lms-challenge-card__challenge">
              <span className="lms-challenge-card__label">Challenge:</span>{" "}
              {item.challenge}
            </p>
            <p className="lms-challenge-card__solution">
              <span className="lms-challenge-card__label">Solution:</span>{" "}
              {item.solution}
            </p>
          </article>
        ))}
      </section>

      <section className="lms-section lms-section--outcomes">
        <h2 className="lms-section-heading">Results and Learning Outcomes</h2>
        <ul className="lms-outcome-list">
          {outcomes.map((point) => (
            <li className="lms-outcome-list__item" key={point}>
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="lms-section lms-section--future">
        <h2 className="lms-section-heading">Future Improvements</h2>
        <ul className="lms-future-list">
          <li className="lms-future-list__item">
            Add refresh-token rotation and token revocation for stronger session
            control.
          </li>
          <li className="lms-future-list__item">
            Move uploads to cloud object storage with signed URL download
            support.
          </li>
          <li className="lms-future-list__item">
            Introduce file-level encryption at rest with per-file key
            management.
          </li>
          <li className="lms-future-list__item">
            Add advanced audit dashboards and anomaly detection for suspicious
            access behavior.
          </li>
          <li className="lms-future-list__item">
            Implement comprehensive automated tests for auth, file flow, and
            moderation endpoints.
          </li>
        </ul>
      </section>

      <section className="lms-section lms-section--summary">
        <h2 className="lms-section-heading">Portfolio Summary</h2>
        <p className="lms-body-text">
          Morse Security demonstrates end-to-end development capability for a
          security-focused full-stack product. The project includes role-based
          frontend experiences, modular backend APIs, secure authentication
          flows, guarded file distribution, and operational admin governance. It
          reflects practical engineering decisions around usability, access
          control, real-time communication, and maintainable system structure.
        </p>
      </section>
      {modalImage && (
        <div className="lms-modal-overlay" onClick={() => setModalImage(null)}>
          <div
            className="lms-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lms-modal-close"
              onClick={() => setModalImage(null)}
              aria-label="Close image"
            >
              &#x2715;
            </button>
            <img
              src={modalImage.src}
              alt={modalImage.title}
              className="lms-modal-image"
            />
            <div className="lms-modal-footer">
              <span className="lms-modal-title">{modalImage.title}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MorseSecurity;

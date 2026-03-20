import React, { useState } from "react";
import "./LetMySpace.css";

const LetMySpace = () => {
  const [modalImage, setModalImage] = useState(null);
  const projectImages = [
    {
      title: "Landing Page / Hero Section",
      src: "/letmyspacehero.png",
    },
    {
      title: "User Dashboard",
      src: "/letmyspaceuserdashboard.png",
    },
    {
      title: "Property Upload Flow",
      src: "/letmyspaceproperty.png",
    },
    {
      title: "Admin Panel",
      src: "/letmyspaceadmin.png",
    },
    {
      title: "Mobile Responsive View",
      src: "/letmyspaceresponsive.png",
    },
  ];

  const coreFeatures = [
    "Role-based application flow with separate interfaces for Guest, User, and Admin.",
    "Secure user registration and login with encrypted password storage using bcrypt.",
    "Email verification flow and welcome emails using Nodemailer + Gmail SMTP.",
    "Forgot password and password change functionality for account recovery and security.",
    "Property upload and listing workflow with server-side file handling using Multer.",
    "Dynamic category and subcategory management for structured property organization.",
    "Admin moderation tools to manage users and flag spam accounts.",
    "Responsive UI with React and Bootstrap for desktop and mobile devices.",
  ];

  const architecture = [
    "Frontend (React): Handles routing, role-based views, forms, and API integration through Axios.",
    "Backend (Node.js + Express): Exposes REST APIs for authentication, property operations, admin actions, and content management.",
    "Database (MongoDB + Mongoose): Stores users, property details, categories, subcategories, contact data, and spam-user records.",
    "Media Handling (Multer): Uploads and serves user files and property images through static directories.",
    "Email Service (Nodemailer): Sends account verification codes, welcome messages, and temporary password emails.",
  ];

  const importantModules = [
    {
      name: "Authentication and User Management",
      details:
        "Supports registration, login, logout, password reset, profile updates, and role/status handling. Includes email verification before account completion.",
    },
    {
      name: "Property Lifecycle Management",
      details:
        "Users can submit property data, upload images, and view their uploaded properties. Backend APIs support create, read, and delete operations.",
    },
    {
      name: "Admin Controls",
      details:
        "Admin area provides high-level user data, user deletion actions, and spam-user blocking for platform moderation.",
    },
    {
      name: "Category Taxonomy",
      details:
        "Category and subcategory APIs help organize listings into a manageable hierarchy for better browsing and data structure.",
    },
    {
      name: "Contact and Engagement",
      details:
        "Contact APIs and feedback workflows support communication between platform users and administrators.",
    },
  ];

  const challengesAndSolutions = [
    {
      challenge: "Coordinating multiple user roles with different page flows.",
      solution:
        "Implemented route-level separation for guest, user, and admin layouts to keep navigation and access paths clean.",
    },
    {
      challenge:
        "Handling secure account flows without external auth providers.",
      solution:
        "Used bcrypt for password hashing and nodemailer-based verification/forgot-password flows for secure user onboarding and recovery.",
    },
    {
      challenge: "Managing image and file uploads reliably.",
      solution:
        "Configured Multer disk storage with static serving paths for uploaded media and property image retrieval.",
    },
    {
      challenge: "Keeping backend modular as features expanded.",
      solution:
        "Split logic into controllers, routes, and models for maintainable and scalable development.",
    },
  ];

  const outcomes = [
    "Built a complete full-stack real estate platform from scratch using MERN concepts.",
    "Improved understanding of API design, route architecture, and data modeling in MongoDB.",
    "Implemented practical security patterns including password hashing and verification workflows.",
    "Learned production-oriented patterns for file upload, image serving, and role-based navigation.",
  ];

  return (
    <section className="lms-page">
      <header className="lms-header">
        <h1 className="lms-title">LetMySpace</h1>
        <p className="lms-subtitle">
          Full-stack real estate platform for property discovery, listing
          management, and role-based administration.
        </p>
      </header>

      <section className="lms-section lms-section--demo">
        <h2 className="lms-section-heading">Live Demo</h2>
        <p className="lms-demo-text">
          Deployed Link:{" "}
          <a
            href="https://letmyspace.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="lms-demo-link"
          >
            https://letmyspace.vercel.app
          </a>
        </p>
      </section>

      <section className="lms-section lms-section--overview">
        <h2 className="lms-section-heading">Project Overview</h2>
        <p className="lms-body-text">
          LetMySpace is a real estate web application designed to simplify the
          process of listing and finding rental or sale-ready properties. The
          platform supports different user journeys for guests, registered
          users, and administrators. Guests can explore and understand the
          platform, users can create accounts and manage property-related
          activities, and admins can supervise user behavior and platform data.
        </p>
        <p className="lms-body-text">
          The project was developed with a strong focus on practical full-stack
          architecture: a React frontend for dynamic user experience, an Express
          backend for API logic, and MongoDB for flexible data storage. It
          includes authentication, role control, email-based verification, media
          uploads, and structured category systems that mirror real-world
          product workflows.
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
            Frontend: React, React Router, Axios, Bootstrap, AOS, GSAP
          </li>
          <li className="lms-stack-list__item">
            Backend: Node.js, Express.js, Body Parser, CORS
          </li>
          <li className="lms-stack-list__item">
            Database: MongoDB with Mongoose ODM
          </li>
          <li className="lms-stack-list__item">
            Authentication/Security: bcrypt password hashing
          </li>
          <li className="lms-stack-list__item">
            Email: Nodemailer with Gmail SMTP integration
          </li>
          <li className="lms-stack-list__item">
            File Uploads: Multer for image/file storage and static serving
          </li>
          <li className="lms-stack-list__item">
            Deployment: Vercel (frontend deployment)
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
            Add JWT-based token auth with refresh token flow.
          </li>
          <li className="lms-future-list__item">
            Introduce advanced search filters with location and pricing ranges.
          </li>
          <li className="lms-future-list__item">
            Add image optimization and cloud storage integration.
          </li>
          <li className="lms-future-list__item">
            Implement role-level route guards on both client and server sides.
          </li>
          <li className="lms-future-list__item">
            Add analytics dashboard for property engagement metrics.
          </li>
        </ul>
      </section>

      <section className="lms-section lms-section--summary">
        <h2 className="lms-section-heading">Portfolio Summary</h2>
        <p className="lms-body-text">
          LetMySpace demonstrates my end-to-end ability to design and build a
          real-world full-stack product. I implemented frontend and backend
          modules, integrated database models and REST APIs, secured core
          authentication flows, and added practical features such as file
          uploads and transactional email communication. This project reflects
          my capability to move from idea to deployable application with
          scalable structure and maintainable code organization.
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

export default LetMySpace;

import React, { useState } from "react";
import "./LetMySpace.css";

const QuickFix = () => {
  const [modalImage, setModalImage] = useState(null);
  const projectImages = [
    {
      title: "Landing Page / Hero Section",
      src: "/quickfixhero.png",
    },
    {
      title: "User Workspace",
      src: "/quickfixuser.png",
    },
    {
      title: "Booking History",
      src: "/quickfixuserbook.png",
    },
    {
      title: "Shop Owner Profile",
      src: "/quickfixshopownerprofile.png",
    },
    {
      title: "Admin Approval and Management",
      src: "/quickfixadmindashboard.png",
    },
  ];

  const coreFeatures = [
    "Role-based access with separate experiences for Guest, User, ShopOwner, and Admin.",
    "Secure auth with bcrypt password hashing and JWT-based protected APIs.",
    "Email verification during registration and email-based forgot-password recovery.",
    "ShopOwner onboarding approval flow with pending and approved states.",
    "Geo-near mechanic discovery using coordinate-based location queries.",
    "Booking creation with issue capture, optional towing context, and user location metadata.",
    "Booking status lifecycle management: Pending, Approved, Scheduled, Rejected, Cancelled, and Replaced.",
    "Auto replacement logic for conflicting recent bookings with shop-owner notification and email.",
    "Payment proof flow via image upload and client-side Razorpay initiation support.",
    "Shop-owner booking dashboard with image preview and route/map visualization support.",
    "Contact/feedback capture and admin review workflows.",
    "Automated no-response booking monitoring with scheduled reminder emails.",
  ];

  const architecture = [
    "Frontend (React): Role-based routing, auth context, shop discovery and booking forms, admin/shop-owner dashboards, and profile workflows.",
    "Backend (Node.js + Express): REST APIs for authentication, users, bookings, shops, admin actions, and contact management.",
    "Database (MongoDB + Mongoose): Stores users, shops, bookings, reviews, notifications, and contact submissions.",
    "Geospatial Layer (MongoDB 2dsphere): Supports nearby-shop search by user longitude/latitude.",
    "Media Handling (Multer + File System): Handles profile/media/property uploads and booking payment screenshots.",
    "Automation Layer (node-cron + Nodemailer): Runs periodic booking-response checks and sends system emails.",
  ];

  const importantModules = [
    {
      name: "Authentication and Account Security",
      details:
        "Handles registration, login, token-protected routes, password hashing, email verification, password change, and reset flows.",
    },
    {
      name: "Shop Discovery and Profile Management",
      details:
        "Allows shop owners to create and update shop profiles with services, timings, photos, and geospatial coordinates.",
    },
    {
      name: "Booking and Dispatch Workflow",
      details:
        "Supports booking creation, replacement logic for rapid re-booking, status progression, cancellation rules, and history retrieval.",
    },
    {
      name: "Shop Owner Operations",
      details:
        "Provides booking queue visibility, status decisions (approve/schedule/reject), payment proof checks, and map-assisted context.",
    },
    {
      name: "Admin Governance",
      details:
        "Supports pending shop-owner approvals, user moderation actions, spam-list workflows, and overall platform monitoring.",
    },
    {
      name: "Feedback and Communication",
      details:
        "Captures contact/feedback submissions and uses email notifications for onboarding and booking-response events.",
    },
  ];

  const challengesAndSolutions = [
    {
      challenge: "Matching users to truly nearby repair options.",
      solution:
        "Implemented geospatial indexing and $geoNear-based shop search using stored coordinates.",
    },
    {
      challenge:
        "Managing booking conflicts when users quickly book multiple shops.",
      solution:
        "Added a replacement rule that marks older conflicting bookings as Replaced and notifies affected shop owners.",
    },
    {
      challenge: "Preventing stalled user requests when shops do not respond.",
      solution:
        "Added cron-based monitoring that detects long-pending bookings and sends no-response emails to users.",
    },
    {
      challenge: "Controlling operational access across multiple roles.",
      solution:
        "Built role-specific frontend routes and protected backend endpoints, with approval gating for ShopOwner accounts.",
    },
  ];

  const outcomes = [
    "Built a practical full-stack emergency service platform tailored for vehicle breakdown assistance.",
    "Implemented production-style role-based workflows across user, shop-owner, and admin journeys.",
    "Delivered location-aware booking and status orchestration for real-world service coordination.",
    "Integrated authentication, email automation, file handling, and booking lifecycle controls in one product.",
    "Strengthened experience in geospatial querying, modular Express architecture, and multi-role frontend design.",
  ];

  return (
    <section className="lms-page">
      <header className="lms-header">
        <h1 className="lms-title">Quick Fix</h1>
        <p className="lms-subtitle">
          Full-stack MERN platform that connects users with nearby mechanic
          shops for emergency vehicle support, booking management, and
          shop-owner service workflows.
        </p>
      </header>

      <section className="lms-section lms-section--overview">
        <h2 className="lms-section-heading">Project Overview</h2>
        <p className="lms-body-text">
          Quick Fix is designed to help users get fast roadside and repair
          assistance by finding nearby mechanic shops, submitting service
          bookings, and tracking booking status. The platform supports three
          roles: User, ShopOwner, and Admin. Users can discover services and
          place bookings, shop owners can manage incoming requests, and admins
          can oversee users, feedback, and shop-owner approvals.
        </p>
        <p className="lms-body-text">
          The system combines a React frontend with a Node.js/Express backend
          and MongoDB data persistence. It includes role-based authentication,
          geolocation-based shop discovery, booking status lifecycle management,
          payment proof uploads, admin moderation flows, and email-driven
          communication for onboarding and booking events.
        </p>
      </section>

      <section className="lms-section lms-section--gallery">
        <h2 className="lms-section-heading">Image Placeholders </h2>
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
            Frontend: React, React Router, Axios, React Bootstrap, Styled
            Components, Framer Motion, AOS, Leaflet
          </li>
          <li className="lms-stack-list__item">
            Backend: Node.js, Express.js, Body Parser, CORS, Multer, node-cron
          </li>
          <li className="lms-stack-list__item">
            Database: MongoDB with Mongoose ODM
          </li>
          <li className="lms-stack-list__item">
            Authentication/Security: bcrypt, JWT bearer token flow
          </li>
          <li className="lms-stack-list__item">
            Email: Nodemailer with Gmail SMTP
          </li>
          <li className="lms-stack-list__item">
            Payments/Proof: Razorpay checkout integration + uploaded payment
            screenshot handling
          </li>
          <li className="lms-stack-list__item">
            File Storage: Local file-system storage for uploads and property
            images
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
            Replace local upload storage with cloud object storage and signed
            access URLs.
          </li>
          <li className="lms-future-list__item">
            Use real payment verification on backend (webhooks/signature
            verification) instead of proof-only validation.
          </li>
          <li className="lms-future-list__item">
            Add real-time updates via WebSockets for booking status changes
            instead of interval polling.
          </li>
          <li className="lms-future-list__item">
            Introduce stronger role authorization middleware coverage on all
            admin/shop-sensitive routes.
          </li>
          <li className="lms-future-list__item">
            Add comprehensive automated tests for auth, booking lifecycle,
            geospatial search, and admin approval flows.
          </li>
        </ul>
      </section>

      <section className="lms-section lms-section--summary">
        <h2 className="lms-section-heading">Portfolio Summary</h2>
        <p className="lms-body-text">
          Quick Fix demonstrates end-to-end MERN execution for a
          service-dispatch problem domain. The project combines role-aware UX,
          secure account flows, geospatial discovery, booking lifecycle
          automation, and operational admin controls. It reflects practical
          engineering around reliability, usability, and maintainable modular
          architecture.
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

export default QuickFix;

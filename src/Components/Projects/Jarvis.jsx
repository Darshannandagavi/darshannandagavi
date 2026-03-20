import React, { useState } from "react";
import "./LetMySpace.css";

const Jarvis = () => {
  const [modalImage, setModalImage] = useState(null);
  const projectImages = [
    {
      title: "Assistant Home Interface",
      src: "/jarvis1.png",
    },
    {
      title: "Conversation Workspace",
      src: "/jarvis3.png",
    },
    {
      title: "Task and Command History",
      src: "/jarvis4.png",
    },
    {
      title: "Skill Execution Panel",
      src: "/jarvis5.png",
    },
  ];

  const coreFeatures = [
    "Role-like interaction modes for conversational chat, system automation, skills, and emotional response handling.",
    "Secure API-key-based LLM integration with structured JSON output parsing for controlled execution.",
    "Memory-aware command recall to execute previously known commands without repeated model classification.",
    "Query classification into general, real_time, task_automation, skill, and feeling response types.",
    "Smart web intelligence flow using Wikipedia-first lookup with Google scraping fallback when needed.",
    "System control automation for opening apps, browser targets, and desktop-level action handling.",
    "Skill orchestration for email, WhatsApp messaging, and phone-message style task flows.",
    "Voice-first experience through spoken processing cues and spoken assistant responses.",
    "Chat history persistence for user-assistant conversation context and traceability.",
    "Alias-aware app normalization for better natural-language app launch recognition.",
    "Asynchronous task handling to keep assistant responsiveness smooth during blocking operations.",
    "Extensible module architecture to plug in new skills, parsers, and control handlers easily.",
  ];

  const architecture = [
    "Frontend (Web UI): Browser-based interaction surface for text commands, assistant responses, and feature access workflows.",
    "Backend (Python Assistant Engine): Core orchestration for query classification, routing, skill dispatch, chat handling, and control actions.",
    "Data Persistence (JSON Memory Layer): Stores chat history, known commands, and reusable assistant memory artifacts.",
    "Knowledge and Web Layer (LLM + Web Sources): Uses model-driven reasoning with Wikipedia and web scraping fallback for information retrieval.",
    "Automation Layer (Async + Modular Handlers): Executes long-running tasks asynchronously and dispatches domain-specific modules for operations.",
  ];

  const importantModules = [
    {
      name: "Authentication and Access Control",
      details:
        "Handles environment-based key loading, controlled model invocation, and safe request handling for assistant execution.",
    },
    {
      name: "Conversation Intelligence and Response Routing",
      details:
        "Classifies user prompts into actionable query categories and routes them to the right module for response generation.",
    },
    {
      name: "System Control and Action Execution",
      details:
        "Supports automation commands for desktop and browser interactions, including app launching and control-oriented workflows.",
    },
    {
      name: "Skill Management Operations",
      details:
        "Provides structured execution for messaging, email, and extended helper skills through reusable module contracts.",
    },
    {
      name: "Memory and Context Continuity",
      details:
        "Maintains known command mappings and chat history so repeated intents can be handled faster and more consistently.",
    },
    {
      name: "Web Search and Knowledge Retrieval",
      details:
        "Combines encyclopedia lookup and web scraping to answer real-time and fact-oriented user questions with fallback logic.",
    },
  ];

  const challengesAndSolutions = [
    {
      challenge:
        "Correctly routing highly varied natural-language inputs into reliable execution paths.",
      solution:
        "Implemented strict query-type classification with JSON extraction and type-based handler dispatch.",
    },
    {
      challenge:
        "Avoiding repeated model calls for frequent or known commands.",
      solution:
        "Added known-command memory lookup and response reuse before invoking classification.",
    },
    {
      challenge:
        "Providing useful answers when a single information source fails.",
      solution:
        "Built layered retrieval with Wikipedia-first strategy and Google scraping fallback.",
    },
    {
      challenge:
        "Keeping assistant responsiveness during blocking control and network tasks.",
      solution:
        "Used asynchronous orchestration with thread offloading for blocking module operations.",
    },
  ];

  const outcomes = [
    "Built a practical AI assistant platform focused on real desktop productivity and conversational task execution.",
    "Implemented modular orchestration across chat, automation, skills, memory, and web intelligence flows.",
    "Delivered context-aware assistant behavior with voice feedback and reusable command memory.",
    "Integrated LLM reasoning, fallback search, and action pipelines into one maintainable architecture.",
    "Strengthened experience in async Python design, prompt-structured routing, and extensible assistant engineering.",
  ];

  return (
    <section className="lms-page">
      <header className="lms-header">
        <h1 className="lms-title">Jarvis</h1>
        <p className="lms-subtitle">
          Full-stack AI assistant platform that enables users to interact
          through voice and text for system control, smart task handling, web
          intelligence, and skill-based automation workflows.
        </p>
      </header>

      <section className="lms-section lms-section--overview">
        <h2 className="lms-section-heading">Project Overview</h2>
        <p className="lms-body-text">
          Jarvis is designed to help users complete everyday digital tasks
          quickly by combining conversational AI, voice interaction, and command
          automation. The platform supports natural language input, intelligent
          query classification, and modular execution of skills such as system
          operations, messaging, email workflows, and media handling. Users can
          ask knowledge questions, run device actions, trigger communication
          tasks, and receive contextual responses through speech and text.
        </p>
        <p className="lms-body-text">
          The system combines a Python-driven backend assistant engine with a
          lightweight web interface and modular service handlers. It includes
          intent classification, memory-assisted command reuse, task-type
          routing, web and knowledge lookup fallbacks, voice response output,
          and structured skill execution for communication and productivity
          flows.
        </p>
      </section>

      <section className="lms-section lms-section--gallery">
        <h2 className="lms-section-heading">Image Placeholders</h2>
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
            Frontend: HTML, CSS, JavaScript (web interface layer)
          </li>
          <li className="lms-stack-list__item">
            Backend: Python, AsyncIO, Requests, BeautifulSoup, Webbrowser
            integration
          </li>
          <li className="lms-stack-list__item">
            Assistant Intelligence: Groq API with Llama model inference and
            JSON-structured classification prompts
          </li>
          <li className="lms-stack-list__item">
            Voice and Interaction: Speech response module with conversational
            processing cues
          </li>
          <li className="lms-stack-list__item">
            Data and Memory: JSON-based history and command memory persistence
          </li>
          <li className="lms-stack-list__item">
            Automation and Skills: Modular Python handlers for system control,
            messaging, and communication workflows
          </li>
          <li className="lms-stack-list__item">
            Environment and Security: Dotenv-based secret management and
            key-driven external service access
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
            Replace local JSON persistence with a scalable database-backed
            memory and analytics layer.
          </li>
          <li className="lms-future-list__item">
            Add stronger validation and schema enforcement for model-generated
            structured outputs.
          </li>
          <li className="lms-future-list__item">
            Introduce real-time UI updates and streaming assistant responses for
            richer interaction.
          </li>
          <li className="lms-future-list__item">
            Expand authorization and safety guardrails for sensitive
            system-level action execution.
          </li>
          <li className="lms-future-list__item">
            Add comprehensive automated tests for routing logic, skill handlers,
            memory behavior, and fallback paths.
          </li>
        </ul>
      </section>

      <section className="lms-section lms-section--summary">
        <h2 className="lms-section-heading">Portfolio Summary</h2>
        <p className="lms-body-text">
          Jarvis demonstrates end-to-end assistant engineering for a real
          automation and intelligence problem domain. The project combines
          conversational UX, voice feedback, modular control workflows,
          memory-driven execution, and resilient information retrieval. It
          reflects practical engineering around usability, reliability, and
          scalable assistant architecture.
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

export default Jarvis;

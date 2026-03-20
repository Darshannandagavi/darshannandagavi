import React, { useState } from "react";
import "./LetMySpace.css";

const FridayAI = () => {
  const [modalImage, setModalImage] = useState(null);

  const projectImages = [
    {
      title: "Assistant Dashboard Interface",
      src: "/fridayai1.png",
    },
    {
      title: "Conversation and Response Workspace",
      src: "/fridayai3.png",
    },
    {
      title: "Automation and Task Execution View",
      src: "/fridayai2.png",
    },
  ];

  const coreFeatures = [
    "Dual interaction mode: voice input plus text input with responsive assistant feedback.",
    "Intent classification for routing user prompts into general chat, real-time lookup, or automation actions.",
    "Real-time intelligence flow using Tavily search context with LLM summarization.",
    "Desktop automation support for app opening, closing, media actions, and system command handling.",
    "Modular automation architecture for extending command handlers and skill-like workflows.",
    "Persistent conversation memory using JSON chat history for continuity.",
    "Speech output integration for natural assistant responses.",
    "Status-aware assistant behavior across listening, searching, and responding states.",
    "Query normalization and command preprocessing to improve natural-language reliability.",
    "Async and threaded execution paths to keep UI interaction smooth during background work.",
  ];

  const architecture = [
    "Frontend (Desktop UI): PyQt-based interface for home view, chat view, waveform/status visualization, and command input.",
    "Backend Assistant Engine: Intent detection, routing logic, chat/realtime response generation, and automation orchestration.",
    "Data Layer: JSON-based history and runtime state files for chat and assistant status.",
    "Intelligence Layer: LLM-powered response generation plus real-time web retrieval context.",
    "Automation Layer: Modular command execution for app/system/media operations with async dispatch.",
  ];

  const importantModules = [
    {
      name: "Conversation and Intent Routing",
      details:
        "Classifies user queries and dispatches them to the correct pipeline for general chat, real-time lookup, or automation execution.",
    },
    {
      name: "Real-Time Search Engine",
      details:
        "Retrieves web context and generates timely, context-grounded answers using Tavily search integration and LLM summarization.",
    },
    {
      name: "Chat Engine",
      details:
        "Handles conversational and knowledge responses with persistent JSON-backed history for continuity across sessions.",
    },
    {
      name: "Automation Engine",
      details:
        "Executes open/close/system/play/search/content actions through modular handlers with async and threaded dispatch.",
    },
    {
      name: "Voice Pipeline",
      details:
        "Speech-to-text input and text-to-speech output for a hands-free, natural assistant interaction experience.",
    },
    {
      name: "GUI State Manager",
      details:
        "Handles visual status chips, waveform feedback, and interaction screens to reflect the assistant's real-time operational state.",
    },
  ];

  const challengesAndSolutions = [
    {
      challenge: "Reliable routing across mixed prompts (for example: action plus question in one request).",
      solution:
        "Decision-layer categorization with multi-intent handling and route-specific execution.",
    },
    {
      challenge: "Maintaining responsiveness during blocking operations.",
      solution:
        "Async task execution and background threading for long-running actions.",
    },
    {
      challenge: "Real-time answer quality when web context is noisy.",
      solution:
        "Structured retrieval formatting before LLM response synthesis.",
    },
    {
      challenge: "Consistent UX across voice and text flows.",
      solution:
        "Shared status signaling and centralized response display pipeline.",
    },
  ];

  const outcomes = [
    "Built a practical assistant for real desktop productivity scenarios.",
    "Integrated conversation, realtime lookup, and system automation into one maintainable architecture.",
    "Improved reliability of user command handling with modular routing and execution.",
    "Strengthened implementation experience in async Python, LLM orchestration, and UI-driven assistant systems.",
  ];

  return (
    <section className="lms-page">
      <header className="lms-header">
        <h1 className="lms-title">Friday AI</h1>
        <p className="lms-subtitle">
          Full-stack desktop AI assistant platform that enables users to interact through voice and text for system control, intelligent task handling, real-time web intelligence, and modular automation workflows.
        </p>
      </header>

      <section className="lms-section lms-section--overview">
        <h2 className="lms-section-heading">Project Overview</h2>
        <p className="lms-body-text">
          Friday AI is built to help users complete everyday digital tasks faster by combining conversational AI, voice
          interaction, and command automation in one assistant. Users can ask questions, trigger desktop actions, run
          communication-style tasks, and receive responses through both text and speech.
        </p>
        <p className="lms-body-text">
          The platform uses a Python backend with a modern PyQt interface. It includes intent classification, task-type
          routing, real-time search integration, automation execution, chat memory persistence, and assistant status
          orchestration across listening, thinking, and answering states.
        </p>
      </section>

      <section className="lms-section lms-section--gallery">
        <h2 className="lms-section-heading">Project Screenshots</h2>
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
                  <span className="lms-image-card__overlay-text">Click to expand</span>
                </div>
              </div>
              <figcaption className="lms-image-card__caption">
                <strong className="lms-image-card__title">{img.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="lms-section lms-section--features">
        <h2 className="lms-section-heading">Core Features</h2>
        <ul className="lms-feature-list">
          {coreFeatures.map((feature) => (
            <li className="lms-feature-list__item" key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="lms-section lms-section--architecture">
        <h2 className="lms-section-heading">System Architecture</h2>
        <ul className="lms-arch-list">
          {architecture.map((item) => (
            <li className="lms-arch-list__item" key={item}>{item}</li>
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
          <li className="lms-stack-list__item">Frontend: Python, PyQt5</li>
          <li className="lms-stack-list__item">Backend: Python, AsyncIO, Threading</li>
          <li className="lms-stack-list__item">Assistant Intelligence: Groq LLM inference, Cohere-based intent decision model</li>
          <li className="lms-stack-list__item">Real-Time Web Layer: Tavily search integration</li>
          <li className="lms-stack-list__item">Automation Utilities: subprocess, webbrowser, keyboard, OS handlers</li>
          <li className="lms-stack-list__item">Data Persistence: JSON runtime/chat logs</li>
          <li className="lms-stack-list__item">Environment Management: python-dotenv for API key and config loading</li>
        </ul>
      </section>

      <section className="lms-section lms-section--challenges">
        <h2 className="lms-section-heading">Challenges and Solutions</h2>
        {challengesAndSolutions.map((item) => (
          <article className="lms-challenge-card" key={item.challenge}>
            <p className="lms-challenge-card__challenge">
              <span className="lms-challenge-card__label">Challenge:</span> {item.challenge}
            </p>
            <p className="lms-challenge-card__solution">
              <span className="lms-challenge-card__label">Solution:</span> {item.solution}
            </p>
          </article>
        ))}
      </section>

      <section className="lms-section lms-section--outcomes">
        <h2 className="lms-section-heading">Results and Learning Outcomes</h2>
        <ul className="lms-outcome-list">
          {outcomes.map((point) => (
            <li className="lms-outcome-list__item" key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="lms-section lms-section--future">
        <h2 className="lms-section-heading">Future Improvements</h2>
        <ul className="lms-future-list">
          <li className="lms-future-list__item">Move JSON persistence to a scalable database-backed memory store.</li>
          <li className="lms-future-list__item">Add stronger schema validation for model outputs and routing payloads.</li>
          <li className="lms-future-list__item">Introduce streaming responses in UI for faster perceived responsiveness.</li>
          <li className="lms-future-list__item">Expand permission/safety controls for sensitive system-level commands.</li>
          <li className="lms-future-list__item">Add automated tests for intent routing, realtime fallback quality, and automation handlers.</li>
        </ul>
      </section>

      <section className="lms-section lms-section--summary">
        <h2 className="lms-section-heading">Portfolio Summary</h2>
        <p className="lms-body-text">
          Friday AI demonstrates end-to-end assistant engineering focused on practical automation, conversational UX, and
          real-time information access. The project combines voice, text, modular execution, and contextual intelligence
          into a production-style assistant workflow designed for usability, extensibility, and reliability.
        </p>
      </section>

      {/* ── Image Modal ── */}
      {modalImage && (
        <div
          className="lms-modal-overlay"
          onClick={() => setModalImage(null)}
        >
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

export default FridayAI;
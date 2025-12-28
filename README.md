[![Portfolio](https://img.shields.io/badge/portfolio-Darshan-blue?style=flat-square)](https://github.com)

# Darshan — Personal Portfolio

> A modern, minimal and responsive React portfolio showcasing projects, experience, education, and ways to contact me. Built with Create React App and focused on accessibility, performance, and clarity.

---

## Live Demo

- Add your deployed URL here (Netlify, Vercel, GitHub Pages, etc.)

## Key Highlights

- Clean, mobile-first design
- Hero section with clear call-to-action
- Projects gallery with cards and links to live demos & source code
- Experience & education timeline
- Contact details and optional contact form
- Accessible semantic markup and keyboard-friendly navigation

## Tech Stack

- React (Create React App)
- JavaScript (ES6+)
- HTML5 & CSS3 (Flexbox & Grid)
- Optional: Netlify / Vercel for deployments

---

## Quick Start

Clone and run locally:

```bash
git clone https://github.com/Darshannandagavi/darshannandagavi.git
cd client
npm install
npm start

# open http://localhost:3000
```

Build for production:

```bash
npm run build
```

---

## Project Structure

- public/ — static files and `index.html`
- src/ — React source
	- App.js, index.js — app entry
	- Components/GuestLayout/ — layout and page sections

---

## Suggested Styling (drop into `src/index.css`)

The project already uses component-level styles. Below is a polished global stylesheet you can paste into `src/index.css` to get a modern, consistent look across components. Import it from `src/index.js` (`import './index.css'`).

```css
:root{
	--bg: #071229;
	--card: #0b1220;
	--muted: #9aa4b2;
	--accent: #00d4ff;
	--accent-2: #7c5cff;
	--text: #e6eef8;
	--glass: rgba(255,255,255,0.04);
	--radius: 12px;
	--container: 1100px;
}
*{box-sizing:border-box}
html,body,#root{height:100%}
body{
	margin:0;
	font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial;
	background:linear-gradient(180deg,var(--bg),#021426 70%);
	color:var(--text);
	-webkit-font-smoothing:antialiased;
}
.container{max-width:var(--container);margin:0 auto;padding:0 1.25rem}
.nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 0}
.hero{display:grid;grid-template-columns:1fr 420px;gap:2rem;padding:3.5rem 0}
.projects-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}
.card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));padding:1rem;border-radius:var(--radius);box-shadow:0 10px 30px rgba(2,6,23,0.55);border:1px solid rgba(255,255,255,0.03)}
.cta{display:inline-flex;padding:0.75rem 1rem;border-radius:999px;background:linear-gradient(90deg,var(--accent),var(--accent-2));color:#02101a;font-weight:700}
@media (max-width:980px){.hero{grid-template-columns:1fr}.projects-grid{grid-template-columns:repeat(2,1fr)}}
@media (max-width:620px){.projects-grid{grid-template-columns:1fr}}
```

---

## Accessibility & Performance Tips

- Use semantic elements (`<header>`, `<main>`, `<section>`, `<footer>`).
- Provide meaningful `alt` text for images and `aria-label` for non-text controls.
- Use `loading="lazy"` for non-critical images.
- Keep color contrast high (adjust `--accent` if needed) for WCAG AA.
- Minimize large libraries; lazy-load heavy components when possible.

---

## How to Customize

- Replace the hero text, your name, and links (GitHub, LinkedIn, email).
- Add or remove projects in `Components/GuestLayout/Projects.jsx` (or your Projects component).
- Hook up a contact form backend (Formspree, Netlify Forms, or your own API).

---

## Deployment

- Build with `npm run build` and deploy the `build/` folder to Netlify, Vercel, or GitHub Pages.
- For Netlify/Vercel: connect the repo and set the publish directory to `client/build` if deploying from monorepo; otherwise, default settings will work for this project root.

---

## Credits

Built with Create React App. Design inspired by modern developer portfolios — minimal, usable, and fast.

---

If you'd like, I can also:

- Create `src/index.css` with the recommended styles and import it into `src/index.js`.
- Add a sample `README` demo GIF, badges (license, build), or a CONTRIBUTING.md.

Replace placeholders (links, name, email) and this README is ready to ship.

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Icon from "./components/Icon";
import "./App.css";

function Modal({ project, resume, onClose }) {
  useEffect(() => {
    if (!project && !resume) return undefined;
    const handleKeyDown = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [project, resume, onClose]);

  if (!project && !resume) return null;
  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="icon-button modal-close" type="button" onClick={onClose} aria-label="Close dialog"><Icon name="close" /></button>
        {resume ? (
          <>
            <span className="eyebrow">A little about me</span>
            <h2 id="modal-title">Josh Banjao</h2>
            <p className="modal-lead">IT student · Developer · Problem solver</p>
            <p>I’m a 3rd year IT student passionate about creating clean and efficient web applications.</p>
            <div className="resume-skills"><span>React</span><span>Next.js</span><span>TailwindCSS</span><span>JavaScript</span><span>MySQL</span><span>C++</span></div>
            <a className="button button-primary modal-action" href="mailto:joshbanjao@email.com"><Icon name="mail" size={17} /> Get in touch</a>
          </>
        ) : (
          <>
            <span className="eyebrow">{project.tag}</span>
            <h2 id="modal-title">{project.title}</h2>
            <p className="modal-lead">{project.description}</p>
            <p>{project.details}</p>
            <h3 className="technology-heading">Technologies &amp; focus</h3>
            <div className="resume-skills">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            <button className="button button-primary modal-action" type="button" onClick={onClose}>Back to projects <Icon name="arrow" size={16} /></button>
          </>
        )}
      </section>
    </div>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [showResume, setShowResume] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark");
  const closeModal = () => { setActiveProject(null); setShowResume(false); };

  useEffect(() => {
    const revealTargets = document.querySelectorAll(".about-panel, .skills-panel, .project-card, .contact-banner");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      revealTargets.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    }, { threshold: 0.15 });

    revealTargets.forEach((element) => {
      element.classList.add("scroll-reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "light" ? "#f2f3f5" : "#09090b");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <>
      <div className="hero-backdrop" aria-hidden="true" />
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main>
        <Hero onResume={() => setShowResume(true)} />
        <div className="intro-grid section-wrap"><About /><Skills /></div>
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>© 2026 Josh Banjao. All rights reserved.</span>
      </footer>
      <Modal project={activeProject} resume={showResume} onClose={closeModal} />
    </>
  );
}

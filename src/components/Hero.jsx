import React from "react";
import Icon from "./Icon";

export default function Hero({ onResume }) {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <span className="status-pill"><span /> Hello, I’m</span>
        <h1>Josh <span>Banjao</span></h1>
        <p className="hero-role">IT Student <b>·</b> Developer <b>·</b> Problem Solver</p>
        <p className="hero-description">I build modern and functional web applications<br className="desktop-break" /> using React, and other technologies.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View Projects <Icon name="arrow" size={16} /></a>
          <button className="button button-outline hero-resume" type="button" onClick={onResume}><Icon name="file" size={15} /> Resume</button>
        </div>
        <div className="social-icons" aria-label="Social profiles">
          <a href="https://github.com/joshbanjao-cpu" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
          <a href="https://www.linkedin.com/in/josh-banjao-a3b880451/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a href="mailto:joshbanjao@email.com" aria-label="Email"><Icon name="mail" /></a>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="hero-orbit" />
        <div className="hero-code-card">
          <div className="hero-code-top">
            <span className="hero-code-dots"><i /><i /><i /></span>
            <span>portfolio.jsx</span>
          </div>
          <div className="hero-code-lines">
            <span><b>const</b> developer = {"{"}</span>
            <span className="hero-code-indent">name: <em>"Josh"</em>,</span>
            <span className="hero-code-indent">focus: <em>"building for people"</em>,</span>
            <span className="hero-code-indent">status: <em>"always learning"</em></span>
            <span>{"}"}</span>
          </div>
        </div>
        <span className="hero-float-tag hero-float-tag-react">React</span>
        <span className="hero-float-tag hero-float-tag-ui">UI / UX</span>
        <p>Code. Create. Innovate.</p>
      </div>
    </section>
  );
}

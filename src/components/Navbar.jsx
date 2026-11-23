import React, { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pinnedSection = useRef(null);
  const navItems = [["Home", "#home"], ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]];

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const updateActiveSection = () => {
      if (pinnedSection.current) return;
      const headerHeight = document.querySelector(".site-header").getBoundingClientRect().height;
      const activeLine = Math.min(window.innerHeight * 0.5, window.innerHeight - headerHeight - 1);
      let currentSection = sections[0]?.id ?? "home";

      for (const section of sections) {
        const bounds = section.getBoundingClientRect();
        if (bounds.top <= activeLine && bounds.bottom > activeLine) {
          currentSection = section.id;
          break;
        }
      }

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        currentSection = sections[sections.length - 1]?.id ?? currentSection;
      }

      setActiveSection(currentSection);
    };
    const releasePinnedSection = () => {
      if (!pinnedSection.current) return;
      pinnedSection.current = null;
      updateActiveSection();
    };
    const handleKeyDown = (event) => {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) {
        releasePinnedSection();
      }
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("wheel", releasePinnedSection, { passive: true });
    window.addEventListener("touchstart", releasePinnedSection, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    updateActiveSection();
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("wheel", releasePinnedSection);
      window.removeEventListener("touchstart", releasePinnedSection);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Josh Banjao home">
        <span className="brand-mark"><Icon name="code" size={30} /></span>
        <span>Josh Banjao</span>
      </a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
        <span>{menuOpen ? "Close" : "Menu"}</span>
        <span className={`menu-lines ${menuOpen ? "is-open" : ""}`} aria-hidden="true"><i /><i /></span>
      </button>
      <nav id="primary-navigation" className={`main-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
        {navItems.map(([label, href]) => {
          const isActive = activeSection === href.slice(1);
          return (
            <a
              className={isActive ? "active" : ""}
              aria-current={isActive ? "location" : undefined}
              href={href}
              key={label}
              onClick={() => {
                pinnedSection.current = href.slice(1);
                setActiveSection(href.slice(1));
                setMenuOpen(false);
              }}
            >
              {label}
            </a>
          );
        })}
      </nav>
      <div className="header-actions">
        <button className="theme-toggle" type="button" onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
          <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
        </button>
        <a className="button button-outline contact-nav-link" href="#contact">Contact Me</a>
      </div>
    </header>
  );
}

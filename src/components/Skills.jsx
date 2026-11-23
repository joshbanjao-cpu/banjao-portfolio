import React from "react";
import Icon from "./Icon";

const skills = [
  ["React", "⚛", "react"], ["Next.js", "N", "next"], ["TailwindCSS", "≈", "tailwind"],
  ["JavaScript", "JS", "node"], ["MySQL", "◉", "mysql"], ["C++", "C++", "cpp"],
];

export default function Skills() {
  return (
    <section className="panel skills-panel" id="skills">
      <div className="section-title"><Icon name="wrench" size={22} /><h2>Skills</h2></div>
      <div className="skills-list">
        {skills.map(([name, mark, color]) => (
          <div className="skill-tile" key={name} title={name}>
            <span className={`skill-mark ${color}`} aria-hidden="true">{mark}</span><span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

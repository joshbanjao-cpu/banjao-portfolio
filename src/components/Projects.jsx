import React from "react";
import Icon from "./Icon";

const projects = [
  { title: "EXPAND", image: "/assets/expand.png" },
  { title: "LAY Instruments", image: "/assets/lay-instruments.png" },
  { title: "WorkSystem", image: "/assets/worksystem.png" },
];

export default function Projects() {
  return (
    <section className="projects-section section-wrap" id="projects">
      <div className="section-heading">
        <div className="section-title"><Icon name="folder" size={22} /><h2>Projects</h2></div>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-visual">
              <img src={project.image} alt={`${project.title} project preview`} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

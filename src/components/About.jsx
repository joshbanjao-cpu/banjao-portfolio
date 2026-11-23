import React from "react";
import Icon from "./Icon";

export default function About() {
  return (
    <section className="panel about-panel" id="about">
      <div className="section-title"><Icon name="user" size={23} /><h2>About Me</h2></div>
      <p>I’m a 2nd year IT student who enjoys creating clean and simple web applications. I’m always willing to learn new technologies, improve my skills, and grow as a developer.</p>
    </section>
  );
}

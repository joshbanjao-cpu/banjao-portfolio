import React from "react";
import Icon from "./Icon";

export default function Contact() {
  return (
    <section className="contact-banner section-wrap" id="contact">
      <div className="contact-intro">
        <Icon name="send" size={25} />
        <div><h2>Contact Me</h2><p>Let's connect! Feel free to reach out.</p></div>
      </div>
      <div className="contact-links">
        <a href="mailto:banjaojosh@email.com"><Icon name="mail" size={16} /> banjaojosh@email.com</a>
        <a href="https://github.com/joshbanjao-cpu" target="_blank" rel="noreferrer"><Icon name="github" size={16} /> GitHub</a>
        <a href="https://www.linkedin.com/in/josh-banjao-a3b880451/" target="_blank" rel="noreferrer"><Icon name="linkedin" size={16} /> LinkedIn</a>
        <a href="https://www.instagram.com/joshy_1only/" target="_blank" rel="noreferrer"><Icon name="instagram" size={16} /> Instagram</a>
      </div>
    </section>
  );
}

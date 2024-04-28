import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">

          <div className="column right">
            <div className="text">
              Hello, my name is Sourabh Gautam And <br /> I'm a Ui/Ux Developer{" "}
            </div>
            <p>
              My name is Sourabh Gautam. I'm a UX/UI designer, available for
              work, new projects, collaborations, and freelance opportunities. I
              also have experience as a graphic designer, creating digital and
              branding design. I'm excited about the opportunity to collaborate,
              innovate, and make a meaningful impact through design. Let's
              connect and create something extraordinary together.
            </p>
            <div className="social-icons">
              <div className="social-icon-box">
                <a
                  href="https://github.com/sourabhgautam98"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub
                    color="#000"
                    className="social-icon"
                  />
                </a>
              </div>
              <div className="social-icon-box">
                <a
                  href="https://www.linkedin.com/in/sourabh-gautam-733a202ba/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin
                    color="#0274B3"
                    className="social-icon"
                    
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

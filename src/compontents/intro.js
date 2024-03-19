import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const intro = () => {
  return (
    <Col>
      <section id="intro">
        <img src='./assets/introimg.png' alt="profile" className="bg" />
        <div className="introcontent">
          <h2 className="hello">Hello,</h2>
          <h1 className="introtext">
            I`m <span className="introname">Sourabh Gautam</span>
            <br />
            Ui/Ux Developer
          </h1>
          <Button className="btn" variant="light" size="sm">
            <a
              href="https://www.jobseeker.com/en/resume"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </Button>
          <div>
            <a
              href="https://github.com/sourabhgautam98"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub color='#ffffff' className="social-icons"/>
            </a>
            <a href="https://www.linkedin.com/in/sourabh-gautam-733a202ba/" target="_blank" rel="noreferrer">
            <FaLinkedin color="#0274B3" className="social-icons"/>
            </a>
          </div>
        </div>
      </section>
    </Col>
  );
};

export default intro;

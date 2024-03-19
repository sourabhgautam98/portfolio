import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const intro = () => {
  return (
    <Col>
      <section id="intro">
        <img src='./assets/img3.png' alt="profile" className="bg" />
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
          <div className="social-icons">
            <a
              href="https://github.com/sourabhgautam98"
              target="_blank"
              rel="noreferrer"
            >
              <img src='./assets/img17.jpg' alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/sourabh-gautam-733a202ba/" target="_blank" rel="noreferrer">
              <img src='./assets/img18.png' alt="linkedin" />
            </a>
          </div>
        </div>
      </section>
    </Col>
  );
};

export default intro;

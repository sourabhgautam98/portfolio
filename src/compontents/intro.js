import React from "react";
import Resume from "../assets/Resume.jpg";
import { Col } from "react-bootstrap";
import { Link } from "react-scroll";
import img3 from "../assets/img3.png";
import github from "../assets/img17.jpg";
import linkedin from "../assets/img18.png";
import Button from "react-bootstrap/Button";


const intro = () => {
  return (
      <Col>
        <section id="intro">
        <img src={img3} alt="profile" className="bg" />
          <div className="introcontent">
            <h2 className="hello">Hello,</h2>
            <h1 className="introtext">
              I`m <span className="introname">Sourabh Gautam</span>
              <br />
              Ui/Ux Developer
            </h1>
           <Link><Button className="btn" variant="light" size="sm">
              <a href={Resume}>Download Resume</a>
            </Button></Link>
            <div className="social-icons">
            <a href="https://github.com/sourabhgautam98" target="_blank"><img src={github} alt="github"/></a>
            <a href=""><img src={linkedin} alt="linkedin" /></a>
          </div>
          </div>
          
        </section>
      </Col>  
  );
};

export default intro;

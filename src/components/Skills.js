import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills() {
  
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills & experiences.</div>
            <p>
              As a UI/UX Developer, I specialize in crafting intuitive and
              visually appealing digital experiences. With expertise in user
              research, wireframing, and prototyping, I create designs that
              seamlessly blend aesthetics with functionality. Proficient in
              tools like Adobe XD and Figma, I excel in translating user needs
              into elegant interfaces while ensuring accessibility and
              responsiveness. Collaborative and detail-oriented, I thrive in
              interdisciplinary teams, driving projects from concept to
              implementation with a focus on user-centric design principles.
            </p>
            
          </div>
          <div className="column right">
          <div className='image-container'>
    <Container >
      <Row>
        <Col xs={6}  md={4} lg={3}><img src='./images/Html.jpg' alt="" /></Col>
        <Col xs={6}  md={4} lg={3}><img src='./images/Css.jpg' alt="" /></Col>
        <Col xs={6}  md={4} lg={3}><img src='./images/Javascript.jpg' alt="" /></Col>
        <Col xs={6}  md={4} lg={3}><img src='./images/React.jpg' alt="" /></Col>
        <Col xs={6}  md={4} lg={3}><img src='./images/Bootstrap.png' alt="" /></Col>
        <Col xs={6}  md={4} lg={3}><img src='./images/Github.png' alt="" /></Col>
        <Col xs={6}  md={4} lg={3}><img src='./images/Figma.jpg' alt="" /></Col>
        <Col xs={6}  md={4} lg={3}><img src='./images/AdobeXD.jpg' alt="" /></Col>
      </Row>
    </Container>
        </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;

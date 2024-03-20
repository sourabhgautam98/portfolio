import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Skills = () => {
  return (
   <section id='skills'>
    <span className='skilltitle'>SKILLS</span>
    <p className='skillpara'>I'm a skilled Frontend Web Developer with experience in JavaScript and expertise in frameworks/library like React.js and Bootstap. I'm a quick learner and collaborate closely with clients to create efficientm scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
    <div className='image-container'>
    <Container >
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}><img src='./assets/Html.jpg' alt="" /></Col>
        <Col xs={12} sm={6} md={4} lg={3}><img src='./assets/Css.jpg' alt="" /></Col>
        <Col xs={12} sm={6} md={4} lg={3}><img src='./assets/Javascript.jpg' alt="" /></Col>
        <Col xs={12} sm={6} md={4} lg={3}><img src='./assets/React.jpg' alt="" /></Col>
        <Col xs={12} sm={6} md={4} lg={3}><img src='./assets/Bootstrap.png' alt="" /></Col>
        <Col xs={12} sm={6} md={4} lg={3}><img src='./assets/Github.png' alt="" /></Col>
        <Col xs={12} sm={6} md={4} lg={3}><img src='./assets/Figma.jpg' alt="" /></Col>
        <Col xs={12} sm={6} md={4} lg={3}><img src='./assets/AdobeXD.jpg' alt="" /></Col>
      </Row>
    </Container>
        </div>
   </section>
  )
}

export default Skills

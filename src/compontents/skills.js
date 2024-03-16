import React from 'react'
import html from '../assets/img6.jpg'
import css from '../assets/img5.jpg'
import js from '../assets/img8.jpg'
import react from '../assets/img7.jpg'
import Github from '../assets/img9.png'
import figma from '../assets/img4.jpg'
import boot from '../assets/img10.png'
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
        <Col xs={12} sm={6} md={4} lg={3} ><img src={html} alt="html" /></Col>
        <Col xs={12} sm={6} md={4} lg={3}><img src={css} alt="css" /></Col>
        <Col xs={12} sm={6} md={4} lg={3}><img src={js} alt="js" /></Col>
        <Col xs={12} sm={6} md={4} lg={3}><img src={react} alt="raect" /></Col>
        <Col xs={12} sm={6} md={4} lg={3}><img src={Github} alt="github" /></Col>
        <Col xs={12} sm={6} md={4} lg={3}><img src={boot} alt="bootstarp" /></Col>
        <Col xs={12} sm={6} md={4} lg={3}><img src={figma} alt="figma" /></Col>
      </Row>
    </Container>
        </div>
   </section>
  )
}

export default Skills

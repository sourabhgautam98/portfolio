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
        <Col><img src={html} alt="" /></Col>
        <Col><img src={css} alt="" /></Col>
        <Col><img src={js} alt="" /></Col>
        <Col><img src={react} alt="" /></Col>
        <Col><img src={Github} alt="" /></Col>
        <Col><img src={boot} alt="" /></Col>
        <Col><img src={figma} alt="" /></Col>
      </Row>
    </Container>
        </div>
   </section>
  )
}

export default Skills

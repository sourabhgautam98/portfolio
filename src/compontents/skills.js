import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TfiHtml5 } from "react-icons/tfi";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

const Skills = () => {
  return (
   <section id='skills'>
    <span className='skilltitle'>SKILLS</span>
    <p className='skillpara'>I'm a skilled Frontend Web Developer with experience in JavaScript and expertise in frameworks/library like React.js and Bootstap. I'm a quick learner and collaborate closely with clients to create efficientm scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
    <div className='image-container'>
    <Container >
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}><TfiHtml5 color='#DD4B25' className='skillsicon'/></Col>
        <Col xs={12} sm={6} md={4} lg={3}><IoLogoCss3 color='#254BDD' className='skillsicon'/></Col>
        <Col xs={12} sm={6} md={4} lg={3}><IoLogoJavascript color='#EFD31D' className='skillsicon'/></Col>
        <Col xs={12} sm={6} md={4} lg={3}><FaReact color='#5ED3F3' className='skillsicon'/></Col>
        <Col xs={12} sm={6} md={4} lg={3}><BsBootstrapFill color='#6F11EF' className='skillsicon'/></Col>
        <Col xs={12} sm={6} md={4} lg={3}><FaGithub color='#000000' className='skillsicon'/></Col>
        <Col xs={12} sm={6} md={4} lg={3}><IoLogoFigma  className='skillsicon'/></Col>
      </Row>
    </Container>
        </div>
   </section>
  )
}

export default Skills

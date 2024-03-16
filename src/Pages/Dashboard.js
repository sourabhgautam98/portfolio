import React from 'react'
import Intro from '../compontents/intro'
import Skills from '../compontents/skills'
import Projects from '../compontents/projects'
import NavbarComponent from '../compontents/navbar'
import { Container } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <>
       <NavbarComponent/>
       <div style={{backgroundColor:"black"}}>
        
    <Container >
     <Intro/>
     <Skills/>
     <Projects/>
      
    </Container>
       </div>
    </>
  )
}

export default Dashboard

import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contacts';
import Projects from '../components/Projects'
function Dashboard() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects/>
      <Contact />
    </div>
  );
}

export default Dashboard;

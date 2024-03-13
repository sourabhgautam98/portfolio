import React from 'react';
import Button from 'react-bootstrap/Button';
import Resume from '../assets/Resume.jpg'

const intro = () => {
  return (
    <section id='intro'>
      <div className='introcontent'>
       <span className='hello'>Hello,</span>
        <span className='introtext'>I`m <span className='introname'>Sourabh Gautam</span><br />Ui/Ux Developer</span>
        <p className='intropara'>I'm a skilled Frontend Web Developer with experience in JavaScript frameworks like React. </p>
        </div>
        <div className='button1'>
     <Button variant="light" size="sm" active>
       <a href={Resume}>Download Resume</a>
      </Button>{'  '}
      <Button variant="primary" size="sm"  active><a href="https://github.com/sourabhgautam98">Github</a>
        
      </Button>
      </div>
    </section>
  )
}

export default intro;

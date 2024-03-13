import React from 'react';
import img3 from '../assets/img3.png';



const intro = () => {
  return (
    <section id='intro'>
      <div className='introcontent'>
       <span className='hello'>Hello,</span>
        <span className='introtext'>I`m <span className='introname'>Sourabh Gautam</span><br />Ui/Ux Developer</span>
        <p className='intropara'>I am a skilled wed designer with experience in creating visually appcaling and user friendly websites.</p>
        </div>
      <img src={img3} alt="profile" className='bg' />
    </section>
  )
}

export default intro;

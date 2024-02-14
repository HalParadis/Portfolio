import React from 'react';
import resume from '../resume/Harold-Paradis-Resume-2.pdf';

const Contact = () => {
  return (
    <div className='contact-info'>
      <div className='contacts-container'>
        <h3>Email:</h3>
        <div className='contacts-subcontainer'>
          <a className='contact-anchor link-button' href="mailto: halparadis@gmail.com">halparadis@gmail.com</a>
        </div>
      </div>
      
      <div className='contacts-container'>
        <h3>Other:</h3>
        <div className='contacts-subcontainer'>
          <a className='contact-anchor link-button' href="http://www.linkedin.com/in/hal-paradis">LinkedIn</a>
          <a className='contact-anchor link-button' href="https://github.com/HalParadis">GitHub</a>
          <a className='contact-anchor link-button' href={resume} target='_blank'>Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
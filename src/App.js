import React, { useState, useEffect, useRef } from 'react';
import { Route, Link, useLocation } from 'react-router-dom';

import {
  Contact,
  Portfolio,
  About
} from './components';

const App = () => {
  let location = useLocation();
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);

  const refMap = {
    'home': homeRef,
    'contact': contactRef,
    'portfolio': portfolioRef,
    'about': aboutRef
  }

  useEffect(() => {
    Object.values(refMap).forEach(r => r.current.classList.remove('current-underline'));
    let path = location.pathname.replace('/', '');
    if (!path) path = 'home';
    const ref = refMap[path];
    ref.current.classList.add('current-underline');
  }, [location]);

  return (
    <>
      <div className='outer-box'>
        <div className='left-inner-box'>
          <div className='name-title-box'>
          <Link 
            to='/' 
            className='dynamic-underline full-name'
            ref={homeRef}
          >Harold Paradis</Link>
            
            <h3>Full Stack Web Developer</h3>
          </div>

          <Route exact path='/'>
            <div className='home-text-box'>
              <p className='home-hello'>Hello,</p>
              <p className='text-paragraph'>
                I'm Harold Paradis, a web developer with a passion for creating seamless digital experiences. Specializing in Squarespace and the PERN stack, I work to blend functionality with aesthetics. Beyond coding, I find fulfillment in mentoring and a balanced lifestyle of weightlifting, literature, and shared moments with friends. Let's turn ideas into reality – explore my work and let's connect.
              </p>
            </div>
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

          <Route path='/portfolio'>
            <Portfolio />
          </Route>   

          <Route path='/about'>
            <About />
          </Route> 
        </div>
        
        <nav className='nav-column'>
          <Link 
            to='/about' 
            className='nav-link dynamic-underline' 
            ref={aboutRef}
          >About</Link>
          <Link 
            to='/contact' 
            className='nav-link dynamic-underline' 
            ref={contactRef}
          >Contact</Link>
          <Link 
            to='/portfolio' 
            className='nav-link dynamic-underline' 
            ref={portfolioRef}
          >Portfolio</Link>
        </nav>
      </div>
    </>

  )
}

export default App;
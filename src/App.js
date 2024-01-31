import React, { useState, useEffect, useRef } from 'react';
import { Route, Link, useLocation } from 'react-router-dom';

import {
  Contact,
  Portfolio
} from './components';

const App = () => {
  let location = useLocation();
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);

  const refMap = {
    'home': homeRef,
    'contact': contactRef,
    'portfolio': portfolioRef
  }

  const replaceUnderline = () => {
    homeRef.current.classList.replace('current-underline', 'dynamic-underline');
  }

  useEffect(() => {
    [homeRef, contactRef, portfolioRef].forEach(r => r.current.classList.remove('current-underline'));
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
            <h1 className='full-name'>Harold Paradis</h1>
            <h3>Full Stack Web Developer</h3>
          </div>

          <Route exact path='/'>
            <div className='home-text-box'>
              <p className='text-paragraph'>
                Hello and welcome to my portfolio! I'm Harold Paradis, a dedicated software developer based in Santa Rosa, California, with a passion for continuous growth and mentoring others. In my journey transitioning from customer service and website administration to becoming a proficient full-stack developer, I've found immense joy in unraveling intricate problems and aiding others' development through mentoring.
              </p>
              <p className='text-paragraph'>
                My technical proficiency encompasses the PERN stack, including PostgreSQL, JavaScript, Node.js, React.js, and Express.js. As a recent graduate from a rigorous coding bootcamp at California Polytechnic University, I bring a foundation in test-driven development, pair programming, and a host of other technical skills. My commitment to perpetual personal and professional growth is evident in projects like "We Love Ramen!"—an ecommerce site—and "Fitness Tracker," where I collaborated with remote teams, showcased problem-solving skills, and engaged in every aspect of development.
              </p>
              <p className='text-paragraph'>
                Beyond coding, my values are reflected in volunteer work as a Website Administrator for Sonoma County A.A. Intergroup, where attention to detail and customer service excellence are paramount. Feel free to explore my portfolio, and don't hesitate to reach out—I'm always eager to connect and share experiences in the world of software development.
              </p>
            </div>
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

          <Route path='/portfolio'>
            <Portfolio />
          </Route>    
        </div>
        
        <nav className='nav-column'>
          <Link 
            to='/' 
            className='nav-link' 
            ref={homeRef}
          >Home</Link>
          <Link 
            to='/contact' 
            className='nav-link' 
            ref={contactRef}
          >Contact</Link>
          <Link 
            to='/portfolio' 
            className='nav-link' 
            ref={portfolioRef}
          >Portfolio</Link>
        </nav>
      </div>
    </>

  )
}

export default App;
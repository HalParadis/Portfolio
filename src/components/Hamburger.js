import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hamburger = ({aboutRef, contactRef, portfolioRef}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const classList = contentRef.current.classList;
    const icon = document.getElementById("hamburger-icon");
    if (isExpanded) {
      classList.replace('menu-collapsed', 'menu-expanded');
    }
    else {
      classList.replace('menu-expanded', 'menu-collapsed');
      if (icon.checked) icon.checked = false;
    }
  }, [isExpanded])

  return (
    <div className='hamburger'>
      <input 
        type="checkbox" 
        role="button" 
        aria-label="Display the menu" 
        className="hamburger-icon"
        id="hamburger-icon"
        onClick={() => setIsExpanded(!isExpanded)}
      ></input>
      <div className='menu-collapsed hamburger-menu' ref={contentRef}>
        <Link 
          to='/about' 
          className='menu-link menu-underline' 
          ref={aboutRef}
          onClick={() => setIsExpanded(!isExpanded)}
        >About</Link>
        <Link 
          to='/contact' 
          className='menu-link menu-underline' 
          ref={contactRef}
          onClick={() => setIsExpanded(!isExpanded)}
        >Contact</Link>
        <Link 
          to='/portfolio' 
          className='menu-link menu-underline' 
          ref={portfolioRef}
          onClick={() => setIsExpanded(!isExpanded)}
        >Portfolio</Link>
      </div>
    </div>
  )
}

export default Hamburger;
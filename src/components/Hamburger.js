import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hamburger = ({ aboutRef, contactRef, portfolioRef }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const classList = contentRef.current.classList;
    if (isExpanded) {
      classList.replace('menu-collapsed', 'menu-expanded');
    } else {
      classList.replace('menu-expanded', 'menu-collapsed');
    }
  }, [isExpanded]);

  return (
    <div className='hamburger'>
      <button
        id="hamburger-4"
        className={`hamburger-icon ${isExpanded ? 'open' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </button>
      <div className='menu-collapsed hamburger-menu' ref={contentRef}>
        <Link
          to='/about'
          className='menu-link menu-underline'
          ref={aboutRef}
          onClick={() => setIsExpanded(false)}
        >About</Link>
        <Link
          to='/contact'
          className='menu-link menu-underline'
          ref={contactRef}
          onClick={() => setIsExpanded(false)}
        >Contact</Link>
        <Link
          to='/portfolio'
          className='menu-link menu-underline'
          ref={portfolioRef}
          onClick={() => setIsExpanded(false)}
        >Portfolio</Link>
      </div>
    </div>
  );
}

export default Hamburger;

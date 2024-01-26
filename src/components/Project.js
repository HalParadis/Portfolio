import React, { useState, useEffect, useRef } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

const Project = ({description, name, url}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [buttonArrow, setButtonArrow] = useState('>');
  const contentRef = useRef(null);

  useEffect(() => {
    const classList = contentRef.current.classList;
    if (isExpanded) {
      setButtonArrow('˅');
      classList.replace('collapsed', 'expanded');
    }
    else {
      setButtonArrow('>');
      classList.replace('expanded', 'collapsed');
    }
  }, [isExpanded])

  return (
    <div className='project'>
      <button 
        type='button' 
        className='expand-button'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{buttonArrow}</span>
        <h3 className='project-name'>{name}</h3>
      </button>
      <div className='project-content collapsed' ref={contentRef}>
        <a className='project-anchor' href={url}>{url}</a>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Project;
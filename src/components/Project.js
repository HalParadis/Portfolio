import React, { useState, useEffect } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

const Project = ({description, name, url}) => {
  return (
    <div className='project'>
      <button type='button' className='expand-button'>
        <span>&gt;</span>
        <h3 className='project-name'>{name}</h3>
      </button>
      <a className='project-anchor' href={url}>{url}</a>
      <p>{description}</p>
    </div>
  )
}

export default Project;
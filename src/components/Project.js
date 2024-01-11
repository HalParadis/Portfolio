import React, { useState, useEffect } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

const Project = ({imageSrc, imageAlt, description, name, url}) => {
  return (
    <div className='project'>
      <a href={url}>
        <h3>{name}</h3>
      </a>
      <img src={imageSrc} alt={imageAlt} />
      <p>{description}</p>
    </div>
  )
}

export default Project;
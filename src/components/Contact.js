import React, { useState, useEffect } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <a href="tel:5105015043">(510) 501-5043</a>
      <a href="mailto: halparadis@gmail.com">halparadis@gmail.com</a>
      <a href="http://www.linkedin.com/in/hal-paradis">LinkedIn</a>
      <a href="https://github.com/HalParadis">GitHub</a>
    </div>
  )
}

export default Contact;
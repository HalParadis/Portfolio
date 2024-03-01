import React from 'react';

const TextLine = ({text}) => {
  return <span className='text-line-container'>
    <span>{'>'}</span>
    <p className='text-line'>{text}</p>
  </span>
}

export default TextLine;
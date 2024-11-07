import React from 'react'
import './Image.css'

const Image = ({text, image}) => {
  return (
    <div className='image-container relative'>
        <img className='image' src={image} alt={text}/>
        <div className='img-text'>{text}</div>
    </div>
  )
}

export default Image
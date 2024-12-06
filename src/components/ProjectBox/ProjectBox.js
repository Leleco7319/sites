import React from 'react'
import './ProjectBox.css'

const api = process.env.REACT_APP_API_URL;

const ProjectBox = ({data}) => {
  return (
    <div className='projectbox-container'>
        <img src={`${api}${data.media.url}`} alt='lancamentos' />
        <h4>{data.title}</h4>
        <p>{data.subtitle}</p>
    </div>
  )
}

export default ProjectBox
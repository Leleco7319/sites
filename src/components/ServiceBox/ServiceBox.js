import React from 'react'
import './ServiceBox.css'

const api = process.env.REACT_APP_API_URL;

const ServiceBox = ({data}) => {

  return (
    <div className='service-box'>
      <img src={`${api}${data.media.url}`} alt='exemplo1' style={{ width: '12rem', marginBottom: '2rem' }} />
      <h3 className='service-title'>{data.title}</h3>
      <p>{data.subtitle}</p>
    </div>
  )
}

export default ServiceBox
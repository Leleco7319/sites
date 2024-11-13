import React from 'react'
import './ServiceContainer.css'
import ServiceBox from '../ServiceBox/ServiceBox'

const ServiceContainer = () => {
  return (
    <div className='service-container'>
      <h2 className='title'>Serviços</h2>
      <div className='services'>
        <ServiceBox/>
        <ServiceBox/>
        <ServiceBox/>
      </div>
      <button>Conheça nossos serviços</button>
    </div>
  )
}

export default ServiceContainer
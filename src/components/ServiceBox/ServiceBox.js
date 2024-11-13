import React from 'react'
import './ServiceBox.css'

const ServiceBox = () => {
  return (
    <div className='service-box'>
        <img src='images/modelo3-prato1.jpg' alt='exemplo1' style={{width:'12rem', marginBottom:'2rem'}}/>
        <h3 className='service-title'>Gerenciamento Financeiro</h3>
        <p>Organizar as finanças é fundamental para tornar sua empresa mais lucrativa.</p>
    </div>
  )
}

export default ServiceBox
import React from 'react'
import './OurClients.css'

const OurClients = () => {
  return (
    <div className='our-clients justify-center block pt-14 pb-14'>
        <div className='client'>
            <img src='cliente.jpg' alt='cliente1'/>
        </div>
        <div className='client'>
            <img src='cliente.jpg' alt='cliente2'/>
        </div>
        <div className='client'>
            <img src='cliente.jpg' alt='cliente3'/>
        </div>
        <div className='client'>
            <img src='cliente.jpg' alt='cliente4'/>
        </div>
    </div>
  )
}

export default OurClients
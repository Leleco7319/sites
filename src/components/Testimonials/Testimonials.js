import React from 'react'
import './Testimonials.css'
import TestimonialBox from '../TestimonialBox/TestimonialBox'

const Testimonials = () => {
  return (
    <div className='tests'>
        <div className='test-title'>
            <h1>Qualidade comprovada!</h1>
            <p>Confira algumas opiniões de nossos clientes:</p>
        </div>
        <div className='tests-container'>
            <TestimonialBox/>
            <TestimonialBox/>
            <TestimonialBox/>
        </div>
    </div>
  )
}

export default Testimonials
import React from 'react'
import './Testimonials.css'
import TestimonialBox from '../TestimonialBox/TestimonialBox'
import useFetch from '../../hooks/useFetch'

const Testimonials = () => {

  const { data, loading } = useFetch('contents/674089fe8ab48754b68783c3')

  return (
    <div className='tests'>
      <div className='test-title'>
        <h1>Qualidade comprovada!</h1>
        <p>Confira algumas opiniões de nossos clientes:</p>
      </div>
      {!loading ?
        (
          <div className='tests-container'>
            {data?.map((block, index) => (
              <TestimonialBox key={index} data={block} />
            ))}
          </div>
        )
        : ('')}
    </div>
  )
}

export default Testimonials
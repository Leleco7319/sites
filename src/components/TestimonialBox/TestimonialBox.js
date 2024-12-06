import React from 'react'
import './TestimonialBox.css'

const api = process.env.REACT_APP_API_URL;

const TestimonialBox = ( {data}) => {
    return (
        <div className='test-box'>
            <img style={{marginTop:'-30px'}} src={`${api}${data.media.url}`} alt='aaaa' />
            <div className='test-text'>
                <p>{data.testimonial}</p>
                <h6>{data.name}</h6>
                <span>{data.location}</span>
            </div>
        </div>
    )
}

export default TestimonialBox
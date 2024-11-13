import React from 'react'
import './TestimonialBox.css'

const TestimonialBox = () => {
    return (
        <div className='test-box'>
            <img style={{marginTop:'-30px'}} src='images/avatar.jpg' alt='aaaa' />
            <div className='test-text'>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit.</p>
                <h6>MARCELO</h6>
                <span>Curitiba/PR</span>
            </div>
        </div>
    )
}

export default TestimonialBox
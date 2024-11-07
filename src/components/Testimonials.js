import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Testimonials.css'

const Testimonials = () => {

    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    return (
        <div className='justify-center block pt-14 pb-14'>
            <div className='flex justify-center mb-5 uppercase relative'>
                <h2 className='component-title uppercase relative'>Depoimentos</h2>
            </div>
            <Carousel className='h-40' activeIndex={index} onSelect={handleSelect} pause='false' controls={false} >
                <Carousel.Item className='slide text-black text-center flex'>
                    <p className='mb-0 italic font-semibold text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magni sunt, unde, beatae molestias totam excepturi velit repellendus odio minus. Eaque magni sunt,
                        unde, beatae molestias totam excepturi velit repellendus odio minus.
                    </p>
                    <p className='mb-0 font-bold text-gray-600'>Marcelo</p>
                    <p className='mb-0 text-gray-400'>Curitiba/PR</p>
                </Carousel.Item>
                <Carousel.Item className='slide text-black text-center flex'>
                    <p className='mb-0 italic font-semibold text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magni sunt, unde, beatae molestias totam excepturi velit repellendus odio minus. Eaque magni sunt,
                        unde, beatae molestias totam excepturi velit repellendus odio minus.
                    </p>
                    <p className='mb-0 font-bold text-gray-600'>Marcelo</p>
                    <p className='mb-0 text-gray-400'>Curitiba/PR</p>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Testimonials
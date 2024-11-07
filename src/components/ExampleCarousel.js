import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './ExampleCarousel.css'

const ExampleCarousel = () => {

  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => [
    setIndex(selectedIndex)
  ]

  return (
    <Carousel className='carousel-container' activeIndex={index} onSelect={handleSelect} pause='hover' indicators={false}>
      <Carousel.Item>
        <img className='placeholder-img' src='placeholder.jpg' alt='placeholder 1' />
        <Carousel.Caption>
          <h1 className='carousel-title'>First slide label</h1>
          <p className='carousel-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='placeholder-img' src='placeholder.jpg' alt='placeholder 2' />
        <Carousel.Caption>
          <h1 className='carousel-title'>Second slide label</h1>
          <p className='carousel-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='placeholder-img' src='placeholder.jpg' alt='placeholder 3' />
        <Carousel.Caption>
          <h1 className='carousel-title'>Third slide label</h1>
          <p className='carousel-text'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ExampleCarousel
import React, { useState } from 'react'
import './SlideCarousel.css'
import Carousel from 'react-bootstrap/Carousel';
import useFetch from '../../hooks/useFetch';

const api = process.env.REACT_APP_API_URL;

const SlideCarousel = () => {


  const [index, setIndex] = useState(0)

  const { data, loading } = useFetch('contents/673f64c8fd3c015da6e47c7e')

  const handleSelect = (selectedIndex) => [
    setIndex(selectedIndex)
  ]
  return (
    <>
      {!loading ? (
        <Carousel className='carousel-container' activeIndex={index} onSelect={handleSelect} pause='hover' indicators={false}>
          {data?.map((block, index) => (
            <Carousel.Item key={index}>
              <img className='placeholder-img' src={`${api}${block.media.url}`} alt='placeholder 1' />
              <Carousel.Caption>
                <h1 className='carousel-title'>{block.title}</h1>
                <p className='carousel-text'>{block.subtitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : ('')}
    </>
  )
}

export default SlideCarousel
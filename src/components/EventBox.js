import React from 'react'
import './EventBox.css'

const EventBox = ({date}) => {
  return (
    <div className='max-w-80'>
      <div className='event-container relative'>
        <img className='image' src='news.jpg' alt='news 1' />
        <div className='event-img-text'>{date}</div>
      </div>
      <p className='font-bold mt-4 text-xl mb-2'>Evento 1</p>
      <span className='text-gray-600 mb-0'>Utilize esse espaço para comunicar novidades sobre o seu estabelecimento.</span>
    </div>
  )
}

export default EventBox
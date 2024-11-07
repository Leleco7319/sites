import React from 'react'
import './Item.css'

const Item = ({image, title, caption}) => {
  return (
    <div className='item-block'>
        <img className="pr-4" src={`${image}.svg`} alt={image}/>
        <div>
            <h3 className='uppercase font-bold text-sm'>{title}</h3>
            <span className='mb-0 text-s text-gray-500'>{caption}</span>
        </div>
    </div>
  )
}

export default Item
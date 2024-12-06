import React from 'react'
import './MediaBlock.css'

const api = process.env.REACT_APP_API_URL;

const MediaBlock = ({data}) => {
    return (
        <div className='mediablock-container'>
            <img src={`${api}${data.media.url}`} alt='blog' />
            <div className='mediatext'>
                <h3>{data.title}</h3>
                <div className='datebox'>{data.date}</div>
                <p>{data.subtitle}</p>
            </div>
        </div>
    )
}

export default MediaBlock
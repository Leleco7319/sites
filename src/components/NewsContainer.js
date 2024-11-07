import React from 'react'
import './NewsContainer.css'
import EventBox from './EventBox'

const NewsContainer = () => {
    return (
        <div className='justify-center block pt-14 pb-14'>
            <div className='flex justify-center mb-5 uppercase relative'>
                <h2 className='news-title uppercase relative font-bold text-gray-700'>Novidades</h2>
            </div>
            <div className='flex justify-center gap-5'>
                <EventBox date={'05/02'} />
                <EventBox date={'05/02'} />
                <EventBox date={'05/02'} />
            </div>
        </div>
    )
}

export default NewsContainer
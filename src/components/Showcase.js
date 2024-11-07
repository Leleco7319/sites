import React from 'react'
import Image from './Image'
import './Showcase.css'

const Showcase = ({title, pictures}) => {
    return (
        <div className='justify-center block pt-14 pb-14'>
            <div className='flex justify-center mb-5 uppercase relative'>
                <h2 className='component-title uppercase relative'>{title}</h2>
            </div>
            <div className='image-grid h-auto'>
                {pictures && pictures.map((picture)=>(
                    <Image text={picture.text} image={picture.image}/>
                ))}
            </div>
        </div>
    )
}

export default Showcase
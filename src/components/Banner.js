import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container justify-center'>
            <img className='banner-image' src='fullbanner.jpg' alt='banner'></img>
            <div className='banner-info mx-60 text-center'>
                <h2 className='uppercase text-white'>Pronto para uma nova experiência?</h2>
                <p className='font-semibold text-white'>Estamos prontos para revitalizar seu imóvel com produtos que seguem
                    as últimas tendências mundiais. Entre em contato com nosso time de especialistas.
                </p>
                <button>Saiba mais</button>
            </div>
        </div>
    )
}

export default Banner
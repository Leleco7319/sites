import React from 'react'
import './About.css'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import useFetch from '../../hooks/useFetch'


const About = () => {
    const api = process.env.REACT_APP_API_URL;

    const { data, loading } = useFetch('contents/6745dbc22ca8c6f1aaf047c2')

    return (
        <>
            {!loading ?
                (
                    <div className='bg-container'>
                        <div className='bg-scroll'>
                            <ParallaxBanner style={{ height: '20rem', opacity: '0.5' }}>
                                <ParallaxBannerLayer image='images/home-about.jpg' speed={-20} />
                            </ParallaxBanner>
                        </div>
                        {data &&
                            (
                                <div className='over-content'>
                                    <h1>Sobre Nós</h1>
                                    <div className='story'>
                                        {data[0]?.columns.map((column) => (
                                            <p>{column.richText.root.children[0].children[0].text}</p>
                                        ))}
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <img src={`${api}${data[1].media.url}`} alt='111' style={{ width: '25rem' }} />
                                        <div className='container2'>
                                            <h2>{data[1].title}</h2>
                                            <p>{data[1].subtitle}</p>
                                            <button>Nossos Cases</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                )
                : ('')}
        </>
    )
}

export default About
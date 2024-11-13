import React from 'react'
import './About.css'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'

const About = () => {
    return (
        <div>
            <div className='bg-container'>
                <div className='bg-scroll'>
                    <ParallaxBanner style={{ height: '20rem', opacity: '0.5' }}>
                        <ParallaxBannerLayer image='images/home-about.jpg' speed={-20} />
                    </ParallaxBanner>
                </div>
                <div className='over-content'>
                    <h1>Sobre Nós</h1>
                    <div className='story'>
                        <p>Você pode utilizar esse espaço para contar aos seus clientes a história do seu negócio.</p>
                        <p>Os fatos importantes que narram como foi chegar até onde você chegou, as tradições herdadas ou formas diferenciadas empregadas no preparo das suas especialidades.</p>
                        <p>Histórias e curiosidades encantam, geram empatia e contribuem na conquista de clientes.</p>
                    </div>
                    <div style={{display:"flex"}}>
                        <img src='images/modelo1.jpg' alt='111' style={{ width: '25rem' }} />
                        <div className='container2'>
                            <h2>Cases</h2>
                            <p>Ao longo de 15 anos no mercado de consultoria, atendemos centenas de clientes dos mais variados segmentos. Aqui estão alguns exemplos da nossa capacidade e eficiência em transformar pequenas empresas em grandes negócios.</p>
                            <button>Nossos Cases</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
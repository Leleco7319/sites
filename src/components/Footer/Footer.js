import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='info-container'>
                <div className='info'>
                    <img src='images/location.png' alt='location' />
                    <div>
                        <p>Rua Marechal Floriano Peixoto, 3333</p>
                        <p>Curitiba-PR - CEP 80000-000</p>
                    </div>
                </div>
                <div className='info'>
                    <img src='images/phone-white.png' alt='phone' />
                    <h4>(41) 3333-3333</h4>
                </div>
                <div className='info'>
                    <img src='images/clock.png' alt='clock' />
                    <div>
                        <p>Aberto diariamente das 09h as 18h</p>
                        <p>Sábados das 09h as 13h</p>
                    </div>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'space-around', color:'white'}}>
                <span>Copyright © 2024 Todos os direitos reservados.</span>
                <div>
                    <span>powered by</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react'
import './Showcase2.css'

const Showcase2 = ({ title }) => {
    return (
        <div className='justify-center block pt-14 pb-14'>
            <div className='flex justify-center mb-5 uppercase relative'>
                <h2 className='component-title uppercase relative'>{title}</h2>
            </div>
            <div className='showcase2-container'>
                <div>
                    <img src='piso1.jpg' alt='placeholder' />
                </div>
                <div className='mini-container'>
                    <div className='product'>
                        <img className='example-img' src='piso2.jpg' alt='piso 2' />
                        <p className='font-bold capitalize'>Carrara marble</p>
                        <p className='text-gray-500'>R$46,90</p>
                    </div>
                    <div className='product'>
                        <img className='example-img' src='piso2.jpg' alt='piso 2' />
                        <p className='font-bold capitalize'>Carrara marble</p>
                        <p className='text-gray-500'>R$46,90</p>
                    </div>
                    <div className='product'>
                        <img className='example-img' src='piso2.jpg' alt='piso 2' />
                        <p className='font-bold capitalize'>Carrara marble</p>
                        <p className='text-gray-500'>R$46,90</p>
                    </div>
                    <div className='product'>
                        <img className='example-img' src='piso2.jpg' alt='piso 2' />
                        <p className='font-bold capitalize'>Carrara marble</p>
                        <p className='text-gray-500'>R$46,90</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase2
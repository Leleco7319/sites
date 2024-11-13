import React from 'react'
import SlideCarousel from '../../components/SlideCarousel/SlideCarousel'
import ServiceContainer from '../../components/ServiceContainer/ServiceContainer'
import About from '../../components/About/About'
import Testimonials from '../../components/Testimonials/Testimonials'
import FormHome from '../../components/FormHome/FormHome'
import Partners from '../../components/Partners/Partners'

const Home = () => {
    return (
        <>
            <SlideCarousel />
            <ServiceContainer/>
            <About/>
            <Testimonials/>
            <FormHome/>
            <Partners/>
        </>
    )
}

export default Home
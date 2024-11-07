import React from 'react'
import ExampleCarousel from '../components/ExampleCarousel'
import Showcase from '../components/Showcase'
import Showcase2 from '../components/Showcase2'
import Item from '../components/Item'
import Testimonials from '../components/Testimonials'
import NewsContainer from '../components/NewsContainer'
import Banner from '../components/Banner'

import './HomePage.css'
import OurClients from '../components/OurClients'

const HomePage = () => {

  const pictures = [
    { text: 'piso 1', image: 'piso1.jpg' },
    { text: 'piso 2', image: 'piso2.jpg' },
    { text: 'piso 3', image: 'piso3.jpg' },
    { text: 'piso 4', image: 'piso4.jpg' },
    { text: 'piso 5', image: 'piso5.jpg' },
    { text: 'piso 6', image: 'piso6.jpg' },
  ]

  const pictures2 = [
    { text: 'piso 1', image: 'piso1.jpg' },
    { text: 'piso 2', image: 'piso2.jpg' },
    { text: 'piso 3', image: 'piso3.jpg' }
  ]

  return (
    <div className='home-container'>
      <ExampleCarousel />
      <Showcase title={'Nossas Linhas'} pictures={pictures} />
      <Showcase2 title={'Lançamentos'} />
      <Showcase title={'Projetos em destaque'} pictures={pictures2} />
      <div className='flex justify-around'>
        <Item title={"Envio Grátis"} caption={"Para compras acima de R$5.000"} image={'truck'} />
        <Item title={"Produtos de Alta Qualidade"} caption={"Trabalhamos com os melhores produtos do mercado"} image={'selo'} />
        <Item title={"30% DE DESCONTO NA PRIMEIRA COMPRA"} caption={"Aproveite e faça já o seu pedido"} image={'selo2'} />
      </div>
      <Testimonials/>
      <NewsContainer/>
      <Banner/>
      <OurClients/>
    </div>
  )
}

export default HomePage
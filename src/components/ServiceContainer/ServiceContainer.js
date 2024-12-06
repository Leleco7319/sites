import React from 'react'
import './ServiceContainer.css'
import ServiceBox from '../ServiceBox/ServiceBox'
import useFetch from '../../hooks/useFetch'

const ServiceContainer = () => {

  const { data, loading } = useFetch('contents/67407f5fd0995ac85a8848e9')

  return (
    <>
      {!loading ?
        (
          <div className='service-container'>
            <h2 className='title'>Serviços</h2>
            <div className='services'>
              {data?.map ((block, index) => (
                <ServiceBox key={index} data={block}/>
              ))}
            </div>
            <button>Conheça nossos serviços</button>
          </div>
        )
        : ('')}

    </>
  )
}

export default ServiceContainer
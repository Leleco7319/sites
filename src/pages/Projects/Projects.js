import React from 'react'
import './Projects.css'
import ProjectBox from '../../components/ProjectBox/ProjectBox'
import useFetch from '../../hooks/useFetch'


const Projects = () => {

  const { data, loading } = useFetch('contents/674dc60d88b8248a541881c1')

  console.log(data)

  return (
    <>
      {!loading ?
        (
          <div className='projects-container'>
            <h1 className='component-title'>PROJETOS</h1>
            <div className='projectbox-grid'>
              {data?.map((block, index) => (
                <ProjectBox key={index} data={block} />
              ))}
            </div>
          </div>
        )
        : ('')}
    </>
  )
}

export default Projects
import React from 'react'
import MediaBlock from '../../components/MediaBlock/MediaBlock'
import './News.css'
import useFetch from '../../hooks/useFetch'


const News = () => {

    const { data, loading } = useFetch('contents/674de887c9a114c8dd5362a9')

    return (
        <>
            {!loading ?
                (
                    <div className='news-container'>
                        <h1 className='component-title'>NOVIDADES & EVENTOS</h1>
                        {data?.map((block, index) => (
                            <MediaBlock data={block} />
                        ))}
                    </div>
                )
                : ('')
            }
        </>
    )
}

export default News
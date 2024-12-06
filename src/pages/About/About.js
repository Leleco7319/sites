import React from 'react'
import './About.css'
import useFetch from '../../hooks/useFetch'

const api = process.env.REACT_APP_API_URL;

const About = () => {

    const { data, loading } = useFetch('contents/674db5da88b8248a54187eab')

    return (
        <>
            {!loading ? (
                <div className='about-container'>
                    <h1 className='component-title'>QUEM SOMOS</h1>
                    {data && (
                        <div className='largetext-container'>
                            {data[0]?.columns.map((text, index) => {
                                if (index === 2) {
                                    return (
                                        <>
                                            <p>{text.richText.root.children[0].children[0].text}</p>
                                            <img src={`${api}${data[0].media.url}`} alt='placeholder2' />
                                        </>)
                                }
                                else return (<p>{text.richText.root.children[0].children[0].text}</p>)
                            })}
                        </div>
                    )}
                </div >
            )
                : ('')
            }
        </>
    )
}

export default About
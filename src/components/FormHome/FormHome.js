import React, { useState } from 'react'
import './FormHome.css'
import useFetch from '../../hooks/useFetch';

const api = process.env.REACT_APP_API_URL;

const FormHome = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const req = await fetch(`${api}/api/form-submissions`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    form: '6744a73b39f3b7ecaa62b6ff',
                    submissionData: [
                        {
                            field: 'name',
                            value: formData.name,
                        },
                        {
                            field: 'email',
                            value: formData.email,
                        }
                    ]
                }),
            })
            const data = await req.json()
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    };

    const { data, loading } = useFetch('forms/6744a73b39f3b7ecaa62b6ff')

    return (
        <>
            {!loading ?
                (
                    <div className='form-home'>
                        {data ? (
                            <>
                                <div className='form-home-text'>
                                    <h1>{data?.title}</h1>
                                    <p>Solicite o atendimento de um especialista. Será um prazer atendê-lo.</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    {data?.fields.map((field, index) => (
                                        <label key={index}>
                                            {field.label}
                                            <input type={field.blockType} name={field.name} value={formData[field.name]} onChange={handleChange} />
                                        </label>
                                    ))}
                                    <div className='end-button'>
                                        <button type='submit'>{data?.submitButtonLabel}</button>
                                    </div>
                                </form>
                            </>
                        ) : ('')}
                    </div >
                )
                : ('')}
        </>
    )
}

export default FormHome
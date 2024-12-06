import React, { useState } from 'react'
import './Contact.css'
import useFetch from '../../hooks/useFetch';

const api = process.env.REACT_APP_API_URL;

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        assunto: '',
        mensagem: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const clearState = () => {
        setFormData({ name: "", email: "", subject:"", message: "" }); // Reset all fields
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
                    form: '674da5d088b8248a54187bb2',
                    submissionData: [
                        {
                            field: 'name',
                            value: formData.name,
                        },
                        {
                            field: 'email',
                            value: formData.email,
                        },
                        {
                            field: 'subject',
                            value: formData.subject,
                        },
                        {
                            field: 'message',
                            value: formData.message,
                        }
                    ]
                }),
            })
            const data = await req.json()
            clearState()
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    };

    const { data, loading } = useFetch('forms/674da5d088b8248a54187bb2?depth=0')

    return (
        <>
            {!loading ? (
                <div className='contact-container'>
                    <h1 className='component-title'>FALE CONOSCO</h1>
                    <p>{data?.fields[0].message.root.children[0].children[0].text}</p>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        {data?.fields.map((field, index) => {
                            if (field.blockType !== "message") {
                                return field.name !== 'message' ?
                                    (
                                        <label key={index}>
                                            {field.label}
                                            <input type={field.blockType} name={field.name} value={formData[field.name]} onChange={handleChange} />
                                        </label>
                                    )
                                    :
                                    (
                                        <label>
                                            {field.label}
                                            <textarea
                                                name={field.name}
                                                value={formData[field.name]}
                                                onChange={handleChange}
                                                rows="8"
                                            />
                                        </label>
                                    )
                            }
                            return null
                        })}
                        <button type='submit'>Enviar</button>
                    </form>
                    <div className='localization'>
                        <h4>LOCALIZAÇÃO</h4>
                        <div style={{ width: '100%', height: '300px', background: 'lightgray' }}>display</div>
                        <div className='address'>
                            <p>Rua Marechal Floriano Peixoto, 3333 - Curitiba, PR</p>
                            <p>CEP 80000-000</p>
                        </div>
                        <div className='opening-hours'>
                            <h5>HORÁRIO DE ATENDIMENTO</h5>
                            <p>Segunda a Sexta, das 18hrs as 01hrs</p>
                            <p>Sabado das 18hrs as 02 hrs</p>
                        </div>
                        <div className='contact'>
                            <span>
                                (41) 3333-3333
                            </span>
                            <p>contato@restaurante.com</p>
                        </div>
                    </div>
                </div>
            )
                : ('')
            }
        </>
    )
}

export default Contact
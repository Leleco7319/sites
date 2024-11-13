import React, { useState } from 'react'
import './FormHome.css'

const FormHome = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange
        = (event) => {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            });
        };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Handle form submission here, e.g., send data to a server
        console.log(formData);
    };

    return (
        <div className='form-home'>
            <div className='form-home-text'>
                <h1>Fale Conosco</h1>
                <p>Solicite o atendimento de um especialista. Será um prazer atendê-lo.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    SEU NOME:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>
                    SEU EMAIL:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
            </form>
        </div>
    )
}

export default FormHome
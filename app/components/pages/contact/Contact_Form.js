'use client'
import { useState } from 'react'
import { motion as m } from 'framer-motion'
import { Button_Variant } from '../../ui/animations/Text'

const Contact_Form = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    })

    const handleInputChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { name, email, company, message } = formState;

        const mailtoUrl = `mailto:starxinnovation@gmail.com?subject=New Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0ACompany: ${company}%0D%0AMessage: ${message}`;

        window.location.href = mailtoUrl;
    }

    return (
        <div className='contact_form'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder='Your Name'
                    required
                />

                <input
                    type='email'
                    name='email'
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder='Your Email'
                    required
                />

                <input
                    type='tel'
                    name='company'
                    value={formState.company}
                    onChange={handleInputChange}
                    placeholder='Company Name (Optional)'
                />

                <textarea
                    name='message'
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder='Project Details'
                    required
                />

                <m.button
                    type='submit'
                    className='cta'
                    initial='hidden'
                    animate='visible'
                    variants={Button_Variant}
                >
                    Launch Your Vision
                </m.button>
            </form>
        </div>
    )
}

export default Contact_Form

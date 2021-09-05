import React, { useState } from 'react';
import { emailValidation } from '../../utils/helpers';

function ContactForm() {
    const [contactState, setContactState] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState('');
    const { firstName, lastName, email, userMessage } = contactState;

    //function for form submission
    const formSubmit = (e) => {
        e.preventDefault();
        if (!error) {
            console.log('Submit Form', contactState);
        }
    };

    //function for when the form changes
    const formChange = (e) => {
        if (e.target.name === 'email') {
            const validEmail = emailValidation(e.target.value);
            if (!validEmail) {
                setError('Please enter a valid email');
            } else {
                setError('');
            }
        } else {
            if (!e.target.value.length) {
                setError(`${e.target.name} is required.`);
            } else {
                setError('');
            }
        }
        if (!error) {
            setContactState({ ...contactState, [e.target.name]: e.target.value });
            console.log('Handle Form', contactState);
        }
    };

    //returns the HTML
    return (
        <section className='container'>
            <h2 className='top-title'>Contact Me:</h2>
            <form className='contact-form' onSubmit={formSubmit}>
                <div className='first-name'>
                    <label htmlFor='name'>First Name:</label>
                    <input type='text' className='first-name-input' name='name' defaultValue={firstName} onBlur={formChange} ></input>
                </div>
                <div className='last-name'>
                    <label htmlFor='name'>Last Name:</label>
                    <input type='text' className='first-name-input' name='name' defaultValue={lastName} onBlur={formChange}></input>
                </div>
                <div className='email'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' className='email-input' name='email' defaultValue={email} onBlur={formChange}></input>
                </div>
                <div>
                    <label className='user-message' htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={userMessage} onBlur={formChange} />
                </div>
                {error && (
                    <div>
                        <p className='text-error'>{error}</p>
                    </div>
                )}
                <button className='submit-button' data-testid='button' type='submit'>Submit</button>
            </form>
        </section>
    )
};

export default ContactForm;
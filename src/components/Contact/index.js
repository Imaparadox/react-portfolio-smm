//Build in progress!!!!
import React from 'react';

function Contact() {
    return (
        <section className='container'>
            <h1>Contact Me:</h1>
            <form>
                <div className='first-name'>
                    <label for='name'>First Name:</label><br>
                        <input type='text' className='first-name-input'></input></br>
                </div>
                <div className='last-name'>
                    <label for='name'>Last Name:</label><br>
                        <input type='text' className='first-name-input'></input></br>
                </div>
                <div className='email'>
                    <label for='email'>Email:</label><br>
                        <input type='email' className='email-input'></input></br>
                </div>
                {errorMessage && (
                    <div>
                        <p className="text-error">{errorMessage}</p>
                    </div>
                )}
                <button className="submit-button" data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    )
};

export default Contact;
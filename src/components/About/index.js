import React from 'react';
import professionalPhoto from '../../assets/images/Professional_Pic.JPEG'

function About() {
    return (
        <section className='about-section d-flex justify-content-center p-2 bd-highlight flex-md-column'>
            <h2 className='top-title'>About Me:</h2>
            <hr></hr>
            <div className='about-text'>
                <img src={professionalPhoto} className='professional-photo align-items-center' style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '250px', border: 'solid' }} alt='Stephen Marsh' />
                <p>
                    Full-stack web developer student with background in general business seeking to gain experience in field. Recently earned a certificate of completion in full stack web development from the Rutgers’s Coding Bootcamp, with newly developed skills in JavaScript, CSS, Node.js, and responsive web design. Known for good communication and determination, with an intense focus on developing impactful, user-friendly applications and software. Takes great pride in work and enjoys working with a team setting. Developed “The Brokers” webpage that allows prospective investors to have the best search tools readily available to make their own informed stock investment decisions. Excited to leverage skills as part of an intense, quality driven team to build applications that pushes toward a brighter tomorrow.
                </p>
            </div>
        </section>
    );
}

export default About;
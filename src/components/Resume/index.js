import React from 'react';

function Resume() {
    return (
        <section className='container'>
            <h2 className='top-title'>My Resume:</h2>
            <hr></hr>
            <div className='resume-content'>
                <div className='resume-link'>
                    <h3>Checkout My Resume:</h3>
                    <a className='nav-link' href='https://docs.google.com/document/d/1wuHCxLIcWH2MnmQkYBOxn2VU-nUaFNVBeTA0HFZZCjw/edit?usp=sharing' target='_blank' rel='noreferrer'>Resume</a>
                </div>
                <div className='mt-5'>
                    <h3 className='skills-title'>Front-End Proficiencies:</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                    </ul>
                    <h3 className='skills-title'>Back-End Proficiencies:</h3>
                    <ul>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>NoSQL</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Resume;
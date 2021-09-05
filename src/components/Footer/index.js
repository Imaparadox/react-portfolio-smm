// Build in progress!!!!
import React from 'react';

function Footer() {
    return (
        <footer className='footer fixed-bottom'>
            {/* <a href='https://github.com/Imaparadox'><img src='https://img.icons8.com/ios-glyphs/30/000000/github.png/' alt='Github' className='footer-icon' target='_blank' rel='noreferrer' /></a> */}

            <a href='https://github.com/Imaparadox' className='footer-icon' target='_blank' rel='noreferrer'><i className="fab fa-github" aria-hidden='true' alt='GitHub'></i></a>

            {/* <a href='https://www.linkedin.com/in/stephen-marsh-6981181a2/'><img src='https://img.icons8.com/fluency/48/000000/linkedin.png/>' alt='LinkedIn' className='footer-icon' target='_blank' rel='noreferrer' /></a> */}
a
            <a href='https://www.linkedin.com/in/stephen-marsh-6981181a2/' className='footer-icon' target='_blank' rel='noreferrer'><i className="fab fa-linkedin" aria-hidden='true' alt='LinkedIn'></i></a>

            <a href='https://twitter.com/Im_aparadox' className='footer-icon' target='_blank' rel='noreferrer'><i className='fa fa-twitter' aria-hidden='true' alt='Twitter'></i></a>

        </footer>
    );
}

export default Footer;
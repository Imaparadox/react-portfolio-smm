// Build in progress!!!!
import React from 'react';

function Footer() {
    return (
        <footer className='footer'>
            <a href='https://github.com/Imaparadox'><img src='https://img.icons8.com/ios-glyphs/30/000000/github.png/' alt='Github' className='footer-icon' target='_blank' rel='noreferrer' /></a>

            <a href='https://www.linkedin.com/in/stephen-marsh-6981181a2/'><img src='https://img.icons8.com/fluency/48/000000/linkedin.png/>' alt='LinkedIn' className='footer-icon' target='_blank' rel='noreferrer' /></a>

            {/* <a href='https://twitter.com/Im_aparadox' ><img src='https://img.icons8.com/color/48/000000/twitter--v1.png/>' alt='Twitter' className='footer-icon' target='_blank' rel='noreferrer' /></a> */}
            
            {/* <i className="fab fa-twitter"><a href='https://twitter.com/Im_aparadox'></a></i> */}
            <a href='https://twitter.com/Im_aparadox'><i class="fa fa-twitter" aria-hidden="true"></i></a>

        </footer>
    );
}

export default Footer;
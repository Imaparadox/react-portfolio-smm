//Build in progress!!!!
import React from 'react';

//JSX each javascript does a specific  function based on what I want to happen.
function Nav(props) {
    return (
        <header>
            <nav className='navbar navbar-expand-lg'>
                <h1>Stephen Marsh</h1>
                <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item active'>
                            <a className='nav-link' href='#About' onClick={() => { props.setCurrentComponent('About') }}>About <span className='sr-only'></span></a>
                        </li>
                        <li className='nav-item active'>
                            <a className='nav-link' href='#Portfolio' onClick={() => { props.setCurrentComponent('Portfolio') }}>Portfolio <span className='sr-only'></span></a>
                        </li>
                        <li className='nav-item active'>
                            <a className='nav-link' href='#Contact' onClick={() => { props.setCurrentComponent('Contact') }}>Contact <span className='sr-only'></span></a>
                        </li>
                        <li className='nav-item active'>
                            <a className='nav-link' href='#Resume' onClick={() => { props.setCurrentComponent('Resume') }}>Resume <span className='sr-only'></span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Nav;


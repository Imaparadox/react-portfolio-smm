//Build in progress!!!!
import React from 'react';

//JSX each javascript does a specific  function based on what I want to happen.
function Nav(props) {
    return (
        <header>
            <nav className="navbar navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Stephen M. Marsh</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Navigation Menu:</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
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
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Nav;


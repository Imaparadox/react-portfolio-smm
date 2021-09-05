//Build in progress!!!!
import React from 'react';

//JSX each javascript does a specific  function based on what I want to happen.
function Nav(props) {
    return (
        <header>
            {/* <nav className='navbar navbar-expand-lg ' >
               
                <div className='collapse navbar-collapse navbar-default' id='navbarSupportedContent'>
                  
                </div>
            </nav> */}
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                {/* <button className='navbar-toggler align-items-end' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>               */}
                    <ul className='navbar-nav mr-auto align-items-end'>
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
            <nav className="navbar navbar-dark bg-dark align-items-end">
            <a className="navbar-brand" href="/">Stephen M. Marsh</a>
                <div className="container-fluid ">
                    <button className="navbar-toggler align-items-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            
        </header>
    )
};

export default Nav;


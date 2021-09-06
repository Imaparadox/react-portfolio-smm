import React from 'react';
function SingleProject({ project }) {
    const { projectName, projectImage, projectUrl, projectGitHub } = project
    return (
        <div className='card' key={projectName}>
            <div className='title-container'>
                <h3>{projectName}</h3>
            </div>
            <div className='content'>
                <img className='portfolio-img' href={projectUrl} src={projectImage} alt={projectName} />
                <p className='proj-icons-container'>
                    <a href={projectGitHub} target='_blank' rel='noreferrer'><img src='https://img.icons8.com/material-rounded/48/000000/github.png' alt='GitHub Link' /></a>
                    <a href={projectUrl} target='_blank' rel='noreferrer'><img src="https://img.icons8.com/material-rounded/48/000000/external-link.png" alt='URL Link'/></a>
                </p>
            </div>
        </div>
    );
}

export default SingleProject;
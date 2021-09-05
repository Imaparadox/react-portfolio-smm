import React from 'react';
function SingleProject({ project }) {
    const { projectName, projectImage, projectUrl, projectGitHub } = project
    return (
        <div className="card" key={projectName}>
            <div className="title-container">
                <h3>{projectName}</h3>
            </div>
            <div className="content">
                <img className='portfolio-img' href={projectUrl} src={projectImage} alt={projectName} />
                <p className="proj-icons-container">    
                    <a href={projectGitHub} target='_blank' rel='noreferrer'><i class="fab fa-github"></i></a>
                    <a href={projectUrl} target='_blank' rel='noreferrer'><img className="project-icon" src="https://img.icons8.com/fluent/48/000000/domain.png" alt="Live URL" /></a>
                </p>
            </div>
        </div>
    );
}

export default SingleProject;
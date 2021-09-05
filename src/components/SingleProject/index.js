import React from 'react';
function SingleProject({ project }) {
    const { projectName, projectImage, projectUrl, projectGithub } = project
    return (
        <div className="project-card card" key={projectName}>
            <div>
                <h3>{projectName}</h3>
                <img className='portfolio-img' href={projectUrl} src={projectImage} alt={projectName} />
            </div>
            <a href={projectGithub}><i className="fab fa-github"></i></a>
        </div>
    );
}

export default SingleProject;
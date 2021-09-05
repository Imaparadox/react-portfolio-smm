import React from 'react';
function SingleProject({ project }) {
    const { projectName, projectImage, projectUrl, projectGithub } = project
    return (
        // <div className="project-card card" key={projectName}>
        //     <div>
        //         <h3>{projectName}</h3>
        //         <img className='portfolio-img' href={projectUrl} src={projectImage} alt={projectName} />
        //     </div>
        //     <a href={projectGithub}><i className="fab fa-github"></i></a>
        // </div>
        <div className="card" key={projectName}>
            <div className="img-container">
                <h3>{projectName}</h3>
            </div>
            <div className="content">
                <img className='portfolio-img' href={projectUrl} src={projectImage} alt={projectName} />
                <p className="proj-icons-container">    
                    <a href={projectGithub}><img className="project-icon" src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub Repo" /></a>
                    <a href={projectUrl} target='_blank' rel='noreferrer'><img className="project-icon" src="https://img.icons8.com/fluent/48/000000/domain.png" alt="Live URL" /></a>
                </p>
            </div>
        </div>
    );
}

export default SingleProject;
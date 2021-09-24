import React from 'react';
function SingleProject({ project }) {
    const { projectName, projectImage, projectUrl, projectGitHub } = project
    return (
        <div className='card text-center'>
            <div className='card-body'>
                <h5 className='card-title'>{projectName}</h5>
                <img className='portfolio-img' href={projectUrl} src={projectImage} alt={projectName} />
                {/* <img href={projectGitHub} src='https://img.icons8.com/material-rounded/48/000000/github.png' alt='GitHub Link' /> */}
                <a className=' d-flex justify-content-center' href={projectGitHub} target='_blank' rel='noreferrer'><img src='https://img.icons8.com/material-rounded/48/000000/github.png' alt='GitHub Link' /></a>
                <a className="thumbnail" href={projectUrl} target='_blank' rel='noreferrer'><img src="https://img.icons8.com/material-rounded/48/000000/external-link.png" alt='URL Link' /></a>

            </div>

        </div>
        // <div className='card text-center' key={projectName}>
        //     <div className='card-body'>
        //         <div className='title-container card-title'>
        //             <h3>{projectName}</h3>
        //         </div>
        //         <div className='content card-text d-flex justify-content-center'>
        //             <img className='portfolio-img card-img-top' href={projectUrl} src={projectImage} alt={projectName} />
        //             <p className='proj-icons-container card-text'>
        //                 <a className="thumbnail" href={projectGitHub} target='_blank' rel='noreferrer'><img src='https://img.icons8.com/material-rounded/48/000000/github.png' alt='GitHub Link' /></a>
        //                 <a className="thumbnail" href={projectUrl} target='_blank' rel='noreferrer'><img src="https://img.icons8.com/material-rounded/48/000000/external-link.png" alt='URL Link' /></a>
        //             </p>
        //         </div>
        //     </div>

        //     {/* <div class="card text-center" style="width: 18rem;">
        //         <div class="card-body">
        //             <h5 class="card-title">Special title treatment</h5>
        //             <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        //             <a href="#" class="btn btn-primary">Go somewhere</a>
        //         </div>
        //     </div> */}
        // </div>
    );
}

export default SingleProject;
//Build in progress!!!!
import React, { useState } from 'react';
import SingleProject from '../SingleProject';

function Portfolio() {
    const [projects] = useState([
        {
            projectName: 'ReciPlanner',
            projectImage: 'ReciplannerLanding',
            projectGitHub: 'https://github.com/Imaparadox/reciplanner',
            projectUrl: 'https://reciplanner.herokuapp.com/'
        },
        // {
        //     projectName: 'title',
        //     projectImage: 'image',
        //     projectGitHub: 'link',
        //     projectUrl: 'link'
        // },
        // {
        //     projectName: 'title',
        //     projectImage: 'image',
        //     projectGitHub: 'link',
        //     projectUrl: 'link'
        // },
        // {
        //     projectName: 'title',
        //     projectImage: 'image',
        //     projectGitHub: 'link',
        //     projectUrl: 'link'
        // }
    ])
    return (
        <div>
            {projects.map((project, i) => (
                <SingleProject
                    project={project}
                    key={'project' + i}
                />
            ))}
        </div>
    );
}

export default Portfolio;
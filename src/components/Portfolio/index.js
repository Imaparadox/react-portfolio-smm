//Build in progress!!!!
import React, { useState } from 'react';
import SingleProject from '../SingleProject';
import ReciPlannerLanding from '../../assets/images/ReciPlannerLanding.png';
import BrokersLanding from '../../assets/images/BrokersLanding.png';
// import portfolio from '../../portfolio.json'

function Portfolio() {
    const [projects] = useState([
        {
            projectName: 'ReciPlanner',
            projectImage: ReciPlannerLanding,
            projectGitHub: 'https://github.com/Imaparadox/reciplanner',
            projectUrl: 'https://reciplanner.herokuapp.com/'
        },
        {
            projectName: 'The Brokers',
            projectImage: BrokersLanding,
            projectGitHub: 'https://github.com/Imaparadox/The-Brokers',
            projectUrl: 'https://imaparadox.github.io/The-Brokers/'
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
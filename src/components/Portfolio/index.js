//Build in progress!!!!
import React, { useState } from 'react';
import SingleProject from '../SingleProject';
import ReciPlannerLanding from '../../assets/images/ReciPlannerLanding.png';
import BrokersLanding from '../../assets/images/BrokersLanding.png';
import CodeQuiz from '../../assets/images/CodeQuiz.png';
import WeatherDashboard from '../../assets/images/WeatherDashboard.png';
import PasswordGen from '../../assets/images/PasswordGen.png';
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
        {
            projectName: 'Code quiz',
            projectImage: CodeQuiz,
            projectGitHub: 'https://github.com/Imaparadox/Code-Quiz-SMM',
            projectUrl: 'https://imaparadox.github.io/Code-Quiz-SMM/'
        },
        {
            projectName: 'Weather Dashboard',
            projectImage: WeatherDashboard,
            projectGitHub: 'https://github.com/Imaparadox/Weather-Dashboard-SMM',
            projectUrl: 'https://imaparadox.github.io/Weather-Dashboard-SMM/'
        },
        {
            projectName: 'Password Generator',
            projectImage: PasswordGen,
            projectGitHub: 'https://github.com/Imaparadox/Password-Generator-SMM',
            projectUrl: 'https://imaparadox.github.io/Password-Generator-SMM/'
        },
        //ASK ABOUT BACK END PROJECTS
        // {
        //     projectName: 'title',
        //     projectImage: 'image',
        //     projectGitHub: 'link',
        //     projectUrl: 'link'
        // }
    ])
    return (
        <div>
            <h2 className="top-title">Portfolio</h2>
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
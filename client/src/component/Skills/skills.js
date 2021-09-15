import React from 'react';
import  './skills.css';

const Skills = () => {
    return(
        <div className='skillsWrapper'>
            <h1>My Skills</h1>
            <div className='skillSection'>
                <div className='skill'>
                    <p>Front End</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React/Redux</li>
                        <li>TypeScript</li>
                        <li>TypeScript</li>
                        <li>GraphQL</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className='skill'>
                    <p>Back End</p>
                    <ul>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>RESTful API</li>
                    </ul>
                </div>
                <div className='skill'>
                    <p>Tools</p>
                    <ul>
                        <li>Git</li>
                        <li>Heroku</li>
                        <li>Netlify</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                    </ul>
                </div>
                <div className='skill'>
                    <p>Design</p>
                    <ul>
                        <li>InVision</li>
                        <li>Sketch</li>
                        <li>Figma</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;
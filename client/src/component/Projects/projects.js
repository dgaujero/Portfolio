import React from 'react';
import './projects.css';
import fitbms from '../../images/fitbms.png';
import rps from '../../images/rps.png'

const Projects = () => {
    return(
        <div className='projectsContainer'>
            <div className='item'>
                <img src={fitbms}></img>
            </div>
            <div className='item'>
                <img src={rps}></img>
            </div>
            <div className='item'>I</div>
        </div>
    )
}

export default Projects;
import React from 'react';
import './home.css';
import {
    Link
  } from "react-router-dom";

const About = () => {
    return(
        <div className='homeWrapper'>

            <div className='firstSection'>

                <div className='text'>
                    <p>Deion Aujero</p>
                </div>

                <div className='typewriter'>
                    <p>Full Stack Engineer</p>
                </div>

                

                <div className='buttons'>
                    <ul>
                        <li className='button checkWork'><Link to='/Portfolio/projects'>Check Out My Work</Link></li>
                        <li className='button reachOut'><Link to='/Portfolio/contact'>Reach Out To Me</Link></li>
                    </ul>
                </div>

                

            </div>

        </div>
    )
}

export default About;
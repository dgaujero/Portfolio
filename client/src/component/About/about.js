import React from 'react';
import './about.css'
import pic from '../../images/pic.JPG'

const About = () => {
    return(
        <div className='aboutWrapper'>

            <div>
                <h1>About Me</h1>
            </div>

            <div>
                <img src={pic} alt='profile'></img>
            </div>

            <div className='aboutMeText'>
                <p>My name is Deion Aujero! I attended Seton Hall University in South Orange, NJ from 2015-2017 where I majored in Computer Science.
                After 2 years at Seton Hall, I got into the financial industry where I became a financial representative and obtained my Series 6 and Series 63 to sell securites products in NJ.
                After 2 years in the financial industry, I became passionate about coding again and wanted to resume my studying.
                I studied Full Stack Web Development with Rutgers University and received my certificate in March 2020.
                Since receiving my certificate, I have been employed as Full Stack Engineer and doing freelance web development jobs as well.
                </p>
            </div>

        </div>  
    )
}

export default About;
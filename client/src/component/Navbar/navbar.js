import React from 'react';
import './navbar.css';

function Navbar() {
    return(
        <div>
            {/* <div className='navbar1'>
            <img src="https://www.transparentpng.com/thumb/apple-logo/ZA6SCV-apple-logo-photos.png" alt="apple logo photos @transparentpng.com"/>
                <p>Code</p>
                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>History</p>
                <p>Bookmarks</p>
                <p>Profiles</p>
                <p>Tab</p>
                <p>Window</p>
                <p>Help</p>
            </div> */}

            <div className='navbar2'>

                <div className='container'>
                    <div className='red'></div>
                    <div className='yellow'></div>
                    <div className='green'></div>
                </div>

                <div className='welcomeText'>Deion Aujero – Portfolio</div>

                <div className=''></div>
                
            </div>
        </div>
    )
};

export default Navbar;
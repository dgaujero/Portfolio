import React from 'react';
import './github.css'

const Github = () => {
    return(
        <div className='githubWrapper'>
            <p className='githubText'>Visit My GitHub!</p>
            <div className='linkToGit'>
                <a rel="noreferrer" href="https://github.com/dgaujero" target="_blank"><span className='text'>View Profile</span></a>
            </div>
        </div>
    )
}

export default Github;
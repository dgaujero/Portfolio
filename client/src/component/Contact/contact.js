import React from 'react';
import './contact.css'

const Contact = () => {
    return(
        <div className='contactWrapper'>

            <div className='socialsSection'>
                <article>
                    <p>Reach Out On My Socials</p>
                </article>
                <div className='socials'>
                    <p>1. &nbsp; <span>.socials </span>	&#123;</p>
                    <p className='social'>2. &nbsp; &nbsp; &nbsp; &nbsp; email: <span><a href = "mailto: deion@aujero.net">deion@aujero.com</a></span></p>
                    <p className='social'>3. &nbsp; &nbsp; &nbsp; &nbsp; github: <span><a target='#' href='https://github.com/dgaujero'>https://github.com/dgaujero</a></span></p>
                    <p className='social'>4. &nbsp; &nbsp; &nbsp; &nbsp; instagram: <span><a target='#' href='https://instagram.com/deion.aujero'>@deion.aujero</a></span></p>
                    <p> &nbsp; &nbsp; &nbsp; &#125;</p>
                </div>
            </div>

            <div className='formSection'>
                <article>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdvB7pCqQ7mM73xEtQ5pMnlg6oVc7ZAlMJWbBLErHEnpoj0tg/viewform?embedded=true" width="500" height="650" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </article>
            </div>
        </div>
    )
}

export default Contact;
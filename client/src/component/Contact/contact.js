import React from 'react';
import './contact.css'

const Contact = () => {
    return(
        <div className='contactWrapper'>

            <div className='socialsSection'>
                <article>
                    <p>Reach Out On My Socials</p>
                </article>
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
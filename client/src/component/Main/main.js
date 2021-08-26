import React from 'react'
import './main.css'

const Main = (props) => {
    return(
        <div className='mainContainer'>{props.children}</div>
        )
}

export default Main;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Skills = () => {
    return (
    <div className= 'container-fluid mt-5 justify-content-center d-flex flex-column'>
        <h2 id='aboutMe-title'>Skills and Accolades</h2>
        <div id='skills-container'  className= 'container-fluid d-flex justify-content-evenly flex-wrap'>
            
        <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'html5']} />
        <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'js-square']} />
        <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'node']} />
        <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'react']} />
        <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'css3-alt']} />
        
        <h6 className='express-icon'>Express.js</h6>
        <h6 className='express-icon'>jQuery</h6>
        <h6 className='express-icon'>Command Line</h6>
        <h6 className='express-icon'>Bootstrap</h6>
        <h6 className='express-icon'>MongoDB</h6>
        <h6 className='express-icon'>MySQL</h6>

        </div>
    </div>
    )
}

export default Skills
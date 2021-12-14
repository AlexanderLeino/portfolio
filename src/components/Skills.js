import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SkillsCss from './Skills.css'

const Skills = () => {
    return (
    <div className= 'container-fluid tech-container justify-content-center d-flex flex-column'>
        <h2 id='skills-title'>Skills and Technologies</h2>
        
        <div id='skills-container'  className= 'container d-flex justify-content-evenly align-items-evenly flex-column flex-wrap'>
            
            <div className= 'row skill-logos'>
                <div className='col-2'>
                <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'html5']} />
                </div>
                <div className='col-2 '>  
                <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'js-square']} />
                </div>
                <div className='col-2 '>  
                <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'node']} />
                </div>
                <div className='col-2 '> 
                <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'react']} />
                </div>
                <div className='col-2'>
                <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'css3-alt']} />
                </div>

        </div>
        <div className= 'row skills-row2'>
        <div className='col-2'>
            <h6 className='express-icon'>Express.js</h6>
        </div>
        <div className='col-2'>
            <h6 className='express-icon'>jQuery</h6>
            </div>
            <div className='col-2'>
            <h6 className='express-icon'>Command Line</h6>
            </div>
            <div className='col-2'>
            <h6 className='express-icon'>Bootstrap</h6>
            </div>
            <div className='col-2'>
            <h6 className='express-icon'>MongoDB</h6>
            </div>
            <div className='col-2'>
            <h6 className='express-icon'>MySQL</h6>
            </div>
        </div>

        </div>
            <h1 className= 'accolades-title' >Recent Accolades </h1>
        <ul className= 'mt-4 accolades-container container d-flex justifty-content-evenly flex-column '> 
            <li><h1 className= 'accolades' >Trilogy Bootcamp Certificate Recipient 22' </h1></li>
            <li><h1  className= 'accolades' >Achieved Bachelors in Finance from Western Michigan University 21' </h1></li>
            <li><h1  className= 'accolades' >i-Lead Award Recipient PNC 2021 </h1></li>
        </ul>

    </div>
    )
}

export default Skills
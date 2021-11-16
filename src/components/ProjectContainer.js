import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProjectContainer = () => {
    return (
    <div className= 'container-fluid d-flex flex-column justify-content-center mt-4'>
        <h1 id='aboutMe-title' className= 'project-title'>Projects</h1>
        <div className= 'container-fluid mt-2'>
            <h3 className='project-title'>Netflix and Grill</h3>
            <div className= 'projectCard container d-flex justify-content-end'>
                    <img src = '../assets/net-grill-screencap.png' alt=''></img>
                    <div className='container'>
                <div className='project-description'>Description</div>
                <p>The goal of the project was to solve two problems that every couple have on a regular basis. Those being what are we going to eat? What should we watch on TV tonight? With this app we take in a few responses from the end user and based on their responses to the three questions we generate a movie based on their prefernce when it comes to film genre. As well as a meal that meets their minimum servings based on how many people the user imputs. </p>
                <div className='project-description'>Built With:</div>
                <div className='container-fluid d-flex justify-content-evenly'>
                <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'html5']} />
                <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'js-square']} />
                <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'css3-alt']} />
                </div>
                <div className= 'button-container container-fluid mt-5 justify-content-evenly d-flex'>
                    <button className='projectBtn'>Deploy App</button>
                    <button className='projectBtn'>View Source Code</button>
                </div>
                    </div>
                </div>
                </div>
            </div>

    )
}

export default ProjectContainer
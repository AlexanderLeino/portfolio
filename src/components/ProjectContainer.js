import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProjectContainer = () => {
    return (
    <div className= 'container-fluid d-flex flex-column justify-content-center mt-4'>
        <h1 className= 'projects-title-text'>Projects</h1>
        <div className= 'container-fluid mt-2 projects-container'>
            <h3 className='project-title'>Netflix and Grill</h3>
            <div className= 'projectCard container d-flex justify-content-end'>
                
                    <img src = '\Assets\net-grill-screencap.PNG' alt=''></img>
                    <div className='container'>
                <div className='project-description'>Description</div>
                <p className= 'project-description-paragraph'>The goal of the project was to solve two problems that every couple have on a regular basis. Those being what are we going to eat? What should we watch on TV tonight? With this app we take in a few responses from the end user and based on their responses to the three questions we generate a movie based on their prefernce when it comes to film genre. As well as a meal that meets their minimum servings based on how many people the user imputs. </p>
                <div className='project-description'>Built With:</div>
                <div className='container-fluid d-flex justify-content-evenly'>
                <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'html5']} />
                <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'js-square']} />
                <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'css3-alt']} />
                </div>
                <div className= 'button-container container-fluid mt-5 justify-content-evenly d-flex'>
                <button className='projectBtn'><a target= '_blank' rel='noreferrer' projectBtn href= 'https://alexanderleino.github.io/Netflix-and-Grill/'>Deploy App</a></button>
                <button className='projectBtn'><a target= '_blank' rel='noreferrer' projectBtn href= 'https://github.com/AlexanderLeino/Netflix-and-Grill'>View Source Code</a></button>
                </div>
            
                </div>

                </div>
                </div>
               
            <h3 className='project-title'>Black Jack</h3>
            <div className= 'projectCard container d-flex justify-content-end'>
                    <img src = '\Assets\black-jack.PNG' alt=''></img>
                    <div className='container'>
                <div className='project-description'>Description</div>
                <p className= 'project-description-paragraph'>The goal of the project was to focus on writing dense programming logic when I first started writing code as well as focus on heavy DOM manipulation by creating each individual card using BootStrap, CSS, vanilla javascript. </p>
                <div className='project-description'>Built With:</div>
                <div className='container-fluid d-flex justify-content-evenly'>
                <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'html5']} />
                <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'js-square']} />
                <FontAwesomeIcon className = 'js mt-3' icon={['fab', 'css3-alt']} />
                <h6 className='express-icon'>Bootstrap</h6>
                </div>
                <div className= 'button-container container-fluid mt-5 justify-content-evenly d-flex'>
                    <button className='projectBtn'><a target= '_blank' rel='noreferrer' projectBtn href= 'https://alexanderleino.github.io/blackjack-game/'>Deploy App</a></button>
                    <button className='projectBtn'><a target= '_blank' rel='noreferrer' projectBtn href= 'https://github.com/AlexanderLeino/blackjack-game'>View Source Code</a></button>
                </div>
                    </div>
                </div>

            <h3 className='onlyPlants-title'>Only Plants</h3>
            <div className= 'projectCard container d-flex justify-content-end'>

                    <img src = '\Assets\only-plants.PNG' alt=''></img>
                    <div className='container'>
                <div className='project-description'>Description</div>
                <p className= 'project-description-paragraph'>This was my bootcamps teams 2nd project where the focus was creating an app where individuals can create posts, create an account and sign in using the npm bycrpt to authinicate the user. </p>

                <div className='project-description'>Built With:</div>
                <div className='container-fluid d-flex justify-content-evenly'>
                    
                <FontAwesomeIcon className = 'js mt-3 ' icon={['fab', 'html5']} />
                <FontAwesomeIcon className = 'js mt-3 ms-5' icon={['fab', 'js-square']} />
                <FontAwesomeIcon className = 'js mt-3 ms-5' icon={['fab', 'css3-alt']} />
                <h6 className='express-icon onlyPlants-icons ms-3'>Bootstrap</h6>
                <h6 className='express-icon onlyPlants-icons'>MySQL</h6>
                <h6 className='express-icon onlyPlants-icons'>Express.js</h6>
                </div>
                <div className= 'button-container container-fluid mt-5 justify-content-evenly d-flex'>
                <button className='projectBtn'><a target= '_blank' rel='noreferrer' projectBtn href= 'https://only-plants.herokuapp.com'>Deploy App</a></button>
                <button className='projectBtn'><a target= '_blank' rel='noreferrer' projectBtn href= 'https://github.com/sarahmaskill/only-plants'>View Source Code</a></button>
                </div>
                    </div>
                </div>
                </div>
               
            

    )
}

export default ProjectContainer
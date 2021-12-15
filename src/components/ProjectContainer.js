import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProjectContainerCss from './ProjectContainer.css'


const ProjectContainer = () => {
    return (
    <div className= 'container-fluid flex-column justify-content-evenly mt-4'>
        <div className="row">
            <h1 className= 'projects-title-text'>Projects</h1>
            <h3 className='project-title'>Netflix and Grill</h3>
        </div>
        <div className= 'projectCard container d-flex'>
        <div className="row">
            <div className="col-lg-6">
                <img src = '\Assets\net-grill-screencap.png' alt=''></img>
            </div>
            
            <div className="col-lg-6">
                <div className= 'project-description'>Description</div>
                <p className= 'project-description-paragraph'>The goal of the project was to solve two problems that every couple have on a regular basis. Those being what are we going to eat? What should we watch on TV tonight? With this app we take in a few responses from the end user and based on their responses to the three questions we generate a movie based on their prefernce when it comes to film genre. As well as a meal that meets their minimum servings based on how many people the user imputs.</p>
                <div>Built With:<div>
                </div>
    <div className="container-fluid d-flex justify-content-evenly">
            <div col-lg-2>
                <FontAwesomeIcon className = 'built-with-icon mt-3' icon={['fab', 'html5']} />
            </div>

            <div col-lg-2>
                <FontAwesomeIcon className = 'built-with-icon mt-3' icon={['fab', 'js-square']} />
            </div>

            <div col-lg-2>
                <FontAwesomeIcon className = 'built-with-icon mt-3' icon={['fab', 'css3-alt']} />
            </div>

            <div col-lg-2>
                <h6 className="word-logo">Tailwind</h6>
            </div>

        </div>
    </div>
            <div className="row mt-4">
                <button className='projectBtn'><a target= '_blank' rel='noreferrer' projectBtn href= 'https://alexanderleino.github.io/blackjack-game/'>Deploy App</a></button>
                <button className='projectBtn'><a target= '_blank' rel='noreferrer' projectBtn href= 'https://github.com/AlexanderLeino/blackjack-game'>View Source Code</a></button>
            </div>
                </div>
                    </div>
                </div>
           
                
               
            <h3 className='project-title'>Black Jack</h3>

    <div className= 'projectCard container d-flex'>
        <div className="row">
            <div className="col-lg-6">
                <img src = '\Assets\black-jack.PNG' alt=''></img>
            </div>
            
            <div className="col-lg-6">
                <div className= 'project-description'>Description</div>
                <p className= 'project-description-paragraph'>The goal of the project was to focus on writing dense programming logic when I first started writing code as well as focus on heavy DOM manipulation by creating each individual card using BootStrap, CSS, vanilla javascript. </p>
                <div>Built With:<div>
                </div>
    <div className="container-fluid d-flex justify-content-evenly">
            <div col-lg-2>
                <FontAwesomeIcon className = 'built-with-icon mt-3' icon={['fab', 'html5']} />
            </div>

            <div col-lg-2>
                <FontAwesomeIcon className = 'built-with-icon mt-3' icon={['fab', 'js-square']} />
            </div>

            <div col-lg-2>
                <FontAwesomeIcon className = 'built-with-icon mt-3' icon={['fab', 'css3-alt']} />
            </div>

            <div col-lg-2>
                <h6 className="word-logo">Bootstrap</h6>
            </div>

        </div>
    </div>
            <div className="row mt-4">
                <button className='projectBtn'><a target= '_blank' rel='noreferrer' projectBtn href= 'https://alexanderleino.github.io/blackjack-game/'>Deploy App</a></button>
                <button className='projectBtn'><a target= '_blank' rel='noreferrer' projectBtn href= 'https://github.com/AlexanderLeino/blackjack-game'>View Source Code</a></button>
            </div>
                </div>
                    </div>
                </div>

    
                <h3 className='project-title'>Only Plants</h3>
                <div className= 'projectCard container d-flex mt-5'>
        <div className="row">
            <div className="col-lg-6">
                <img src = '\Assets\Only-plants.png' alt=''></img>
            </div>
            
            <div className="col-lg-6">
                <div className= 'project-description'>Description</div>
                <p className= 'project-description-paragraph'>This was my bootcamps teams 2nd project where the focus was creating an app where individuals can create posts, create an account and sign in using the npm bycrpt to authinicate the user.</p>
                <div>Built With:<div>
                </div>
    <div className="container-fluid d-flex flex-column justifty-content-space-evenly">
        
        <div className="row">
            <div className="container-fluid d-flex justify-content-evenly">
                <div>
                    <FontAwesomeIcon className = 'built-with-icon mt-3' icon={['fab', 'html5']} />
                </div>

                <div>
                    <FontAwesomeIcon className = 'built-with-icon mt-3' icon={['fab', 'js-square']} />
                </div>

                <div>
                    <FontAwesomeIcon className = 'built-with-icon mt-3' icon={['fab', 'css3-alt']} />
                </div>

            </div>
        </div>

        <div className="row mt-4">
            <div className="container-fluid d-flex justify-content-evenly">
            <div>
                <h6 className= "word-logo">Bootstrap</h6>
            </div>

            <div>
                <h6 className= "word-logo">MySQL</h6>
            </div>

            <div>
                <h6 className= "word-logo">Express.js</h6>
            </div>

            </div>

        </div>
        </div>
    </div>
            <div className="row mt-4">
                <button className='projectBtn'><a target= '_blank' rel='noreferrer' projectBtn href= 'https://alexanderleino.github.io/blackjack-game/'>Deploy App</a></button>
                <button className='projectBtn'><a target= '_blank' rel='noreferrer' projectBtn href= 'https://github.com/AlexanderLeino/blackjack-game'>View Source Code</a></button>
            </div>
                </div>
                    </div>
                </div>




           
                </div>
               
            

    )
}

export default ProjectContainer
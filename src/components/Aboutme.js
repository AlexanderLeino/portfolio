import React from "react";
import AboutMeCss from './AboutMe.css'


const Aboutme = () => {
    return (
    
    <div className='container' id="aboutMe">
        <div className="row">
            <div className="col-12 title">
                About Me
            </div>
        </div>
    
        <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-3">
                <img id='profile-pic' class= 'center'src="\Assets\profile-picture.jpg"></img>
            </div>
            <p  className= ' col-lg-10 col-md-9 col-sm-9 mt-3'id='aboutMe-Paragraph'>I recently graudated from Trilogy's Michigan State University's Full Stack coding bootcamp. I love learning about new coding languages and tinkering on my own mini projects! </p>
        </div>
    </div>
    
        
    )
}

export default Aboutme
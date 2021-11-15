import React from "react";

const Aboutme = () => {
    return (
    
    <div className='container-fluid mt-3 aboutMe d-flex justify-content-between'>
        
        <div className= 'container d-flex flex-column aboutMe-information'>
            <div id='aboutMe-title'>About Me</div>
                <p id='aboutMe-Paragraph'>Hello my name is Alexander Leino I use he/him pronouns. I recently graudated from Trilogy's Michigan State University's Full Stack coding bootcamp. I currently live in Michigan and I am willing to relocate, but would prefer a remote role over relocating. I love learning about new coding languages and tinkering on my own mini projects! </p>
            </div>
        <div className='container fluid circleContainer '>
            <div className='mainCircle'>
            <div className='insideCircle'></div>
            </div>
            <div className='trailingCircle1'>
                <div className='insideTrailingCircle1'></div>
            </div>
                <div className='TrailingCircle2'>
                    <div className='insideTrailingCircle2'></div>
                </div>
                </div>
    </div>
        
    )
}

export default Aboutme
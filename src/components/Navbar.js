import React from "react";
import NavBar from './Navbar.css'

const navBar = () => {
    return (
<div className='container justify-content-space-around mt-2 hero'>
    <div className= 'row'>
          <h2 className= 'col-12 name'>Alexander Leino</h2>
    </div>  
          <div className="row ">
            <div className="col-lg-3 col-md-3 col-sm-12">
            <a href="#projects"><button className='navButtons projectBtn'>Projects</button></a>
        </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
            <a href="#aboutMe"><button className='navButtons projectBtn'>About Me</button></a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
            <a href="#contactMe"><button className='navButtons projectBtn'>Contact Me</button></a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
            <a href="../../Assets/Alexander-Leino-Resume-2021.pdf" target="_blank"><button className='navButtons projectBtn'>Resume</button></a>
            </div>
          </div>
          </div>
          



    )
}
export default navBar
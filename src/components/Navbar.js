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
            <button className='navButtons'>Projects</button>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
            <button className='navButtons'>About Me</button>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
            <button className='navButtons'>Contact Me</button>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
            <button className='navButtons'>Resume</button>
            </div>
          </div>
          </div>
          



    )
}
export default navBar
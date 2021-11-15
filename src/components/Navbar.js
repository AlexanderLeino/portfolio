import React from "react";

const navBar = () => {
    return (
<div className='container-fluid d-flex justify-content-center mt-2 hero'>
  <div className= 'd-flex justify-content-center navBar '>
    <div className= 'row no-gutters'>
          <h2 className= 'name'>Alexander Leino</h2>
        <div className='container btnContainer'>
            <button className='navButtons'>Projects</button>
            <button className='navButtons'>About Me</button>
            <button className='navButtons'>Contact Me</button>
          </div>
        </div>     
    </div>
  </div>



    )
}
export default navBar
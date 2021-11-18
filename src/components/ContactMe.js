import React from 'react'

const contactForm = () => {
    return (
        <div>
        <h1 className= 'lets-work-together'>Lets Work Together!</h1>
        <form className= 'container mt-2 form-container'>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-labels">First and Last Name:</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label  text-labels">Email:</label>
                <input type="email" class="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label  text-labels">Message:</label>
                <input type="email" class="form-control"/>
            </div>
            <button id= 'submitBtn' type="submit" class="projectBtn text-labels">Submit</button>
</form>
        </div>
    )
}

export default contactForm
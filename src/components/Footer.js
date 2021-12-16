import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterCss from './Footer.css'

const Footer = () => {
    return (
    <div className = "container mt-3 d-flex justify-content-end">
        <a href='https://twitter.com/AlexDotDev' target='_blank'><FontAwesomeIcon className = 'built-with-icon mt-3 me-5' icon={['fab', 'twitter-square']} /></a>
        <a href='https://www.linkedin.com/in/alexander-leino/' target='_blank'><FontAwesomeIcon className = 'built-with-icon mt-3' icon={['fab', 'linkedin']} /></a>
    </div>
    )
}

export default Footer
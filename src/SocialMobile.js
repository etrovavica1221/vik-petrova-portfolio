import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import './styles/SocialMobile.css';

function SocialMobile() {
    return (
        <div id="socialMobile-container">
            <a 
                href="https://www.linkedin.com/in/viktoriia-petrova-76865617b/"
                target="_blank"
                rel="noopener noreferrer" 
                className="contact-details"
                id="contact-details-mobile"
            >
                <FontAwesomeIcon className="spin" icon={ faLinkedinIn } />
            </a>       
            <a
                href="https://github.com/etrovavica1221"
                target="_blank"
                rel="noopener noreferrer" 
                className="contact-details"
                id="contact-details-mobile"
            >
                <FontAwesomeIcon className="spin" icon={ faGithub } />
            </a>    
            <a 
                href="https://twitter.com/ViPavaleni" 
                target="_blank"
                rel="noopener noreferrer" 
                className="contact-details"
                id="contact-details-mobile"
            >
                <FontAwesomeIcon className="spin" icon={ faTwitter } />
            </a>
        </div>  
    );
}
  
export default SocialMobile;
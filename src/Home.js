import React from 'react';
import { Card, CardImg, CardTitle, CardText} from 'reactstrap';
import SocialMobile from './SocialMobile.js';
import './styles/Home.css';

function Home() {
  const avatar = require('./styles/me.jpeg');

  return ( 
    <div>
      <Card id="aboutMe-container">
        <CardImg id="profile-wrap" src={avatar} alt="profile">
        </CardImg>
        <div id="my-info">
          <CardTitle id="greeting">
            Hi, I am Viktoriia Petrova!
          </CardTitle>
          <CardText>
            An ambitious full-stack software developer and a graduate of<span> </span>
            <a href="https://www.manchestercodes.com" target="_blank" rel="noopener noreferrer">
                Manchester Codes
            </a>.
          </CardText>
        </div>
      </Card> 
      <SocialMobile /> 
    </div>   
  );
}
  
export default Home;
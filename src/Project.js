import React from 'react';
import { Card } from 'reactstrap';
import ProjectsCarousel from './ProjectsCarousel';
import SocialMobile from './SocialMobile.js';
import './styles/Project.css';

function Project() {
  return (
    <div id="project">
      <Card id="projects-container">
        <ProjectsCarousel />
      </Card>
      <SocialMobile /> 
    </div> 
  );
}
  
export default Project;
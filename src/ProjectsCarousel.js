import React, { Component } from 'react';
import { Button } from 'reactstrap';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import './styles/Project.css';

class ProjectsCarousel extends Component {
  state = {
    currentItem: 0,
    items: [
      {
        name: 'LingoGuru',
        description: 'A fully functional language learning app, with user login and authentication. Created as part of a team during Manchester Codes course.',
        builtUsing: 'React, MongoDB',
        img: require('./styles/LingoGuru.png'),
        gitLink: 'https://github.com/etrovavica1221/language-flashcards',
        liveLink: 'https://lingoguru.netlify.app',
      },
      {
        name: 'Weather App​',
        description: 'Desktop and mobile weather app, which was built with React.',
        builtUsing: 'React',
        img: require('./styles/WeatherApp.png'),
        gitLink: 'https://github.com/etrovavica1221/weather-app',
        liveLink: 'https://weather-app-ecru-one.vercel.app',
      },
      {
        name: 'Nasa Tech Test​',
        description: 'Tech test to build a search page, which allows users to search for images based on a query relating to space.',
        builtUsing: 'React',
        img: require('./styles/Nasa.png'),
        gitLink: 'https://github.com/etrovavica1221/tech-test',
        liveLink: '',
      },
      {
        name: 'Music Library API',
        description: 'Music Library API, which stores information about artists, albums and songs. I practiced how to implement a CRUD REST API to interact with a MySQL database.',
        builtUsing: 'MySQL, Sequelize, Express, Docker',
        img: require('./styles/Music-Library-API.png'),
        gitLink: 'https://github.com/etrovavica1221/music-library-api-mysql',
        liveLink: '',
      },
      {
        name: 'Cruise Ships',
        description: 'A desktop game. In this project I built a cruise ship experience. You can make your own itinerary and sail to your dream destinations.',
        builtUsing: 'Vanilla JS',
        img: require('./styles/Cruise-ships.png'),
        gitLink: 'https://github.com/etrovavica1221/cruise-ships',
        liveLink: '',
      },
    ],
  };

  goNextItem = () => {
    if (this.state.currentItem === this.state.items.length - 1) {
      this.setState({ currentItem: 0 });
    } else {
      this.setState({ currentItem: this.state.currentItem + 1 });
    }
  };

  goPrevItem = () => {
    if (this.state.currentItem === 0) {
      this.setState({ currentItem: this.state.items.length - 1 });
    } else {
      this.setState({ currentItem: this.state.currentItem - 1 });
    }
  };
  render() {
    let currentItem = this.state.items[this.state.currentItem];
    return (
      <div id='projects-carousel'>
        <LeftArrow goPrevItem={this.goPrevItem} />

        <div id='projects-carousel-centre'>
        <a id="project-link" target="_blank" rel="noopener noreferrer" href={currentItem.liveLink ? currentItem.liveLink : currentItem.gitLink}>
          <img src={currentItem.img} id='projects-img' alt='project' width="400" height="150" />
        </a>
          <div id='projects-description'>
            <h1>{currentItem.name}</h1>
            <p>{currentItem.description}</p>
            <p>
              <strong>Built using</strong>: {currentItem.builtUsing}
            </p>
            <a target="_blank" rel="noopener noreferrer" href={currentItem.gitLink}>
              <Button id="github-btn">&#60;View on GitHub/&#62;</Button>  
            </a>
          </div>
        </div>

        <RightArrow goNextItem={this.goNextItem} />
      </div>
    );
  }
}

export default ProjectsCarousel;
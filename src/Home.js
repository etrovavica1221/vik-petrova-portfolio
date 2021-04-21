import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText } from 'reactstrap';
import SocialMobile from './SocialMobile.js';
import './styles/Home.css';

class Home extends Component {
  state = {
    currentItem: 0,
    items: [
      {
        firstImg: require('./styles/tech/trio.png'),
        secondImg: require('./styles/tech/nodejs.png'),
        thirdImg: require('./styles/tech/git.png'),
      },
      {
        firstImg: require('./styles/tech/linux.png'),
        secondImg: require('./styles/tech/bootstrap.png'),
        thirdImg: require('./styles/tech/docker.png'),
      },
      {
        firstImg: require('./styles/tech/react.png'),
        secondImg: require('./styles/tech/sql.png'),
        thirdImg: require('./styles/tech/expressjs.png'),
      },
      {
        firstImg: require('./styles/tech/vue.png'),
        secondImg: require('./styles/tech/jQuery.png'),
        thirdImg: require('./styles/tech/python.png'),
      }
    ],
  }

  goUp = () => {
    if (this.state.currentItem === this.state.items.length - 1) {
      this.setState({ currentItem: 0 });
    } else {
      this.setState({ currentItem: this.state.currentItem + 1 });
    }
  }

  goDown = () => {
    if (this.state.currentItem === 0) {
      this.setState({ currentItem: this.state.items.length - 1 });
    } else {
      this.setState({ currentItem: this.state.currentItem - 1 });
    }
  }
render() {
  
  return ( 
    <div id="home">
      <Card id="aboutMe-container">
        <CardImg id="profile-wrap" src={require('./styles/me.jpeg')} alt="profile">
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
        <div id="tech">
          <button className="verticalArrow" onClick={this.goUp}>▲</button>
            <div id="img-container">
              {this.state.items[this.state.currentItem].firstImg && <img src={this.state.items[this.state.currentItem].firstImg} alt="tech"></img>}
              {this.state.items[this.state.currentItem].secondImg && <img src={this.state.items[this.state.currentItem].secondImg} alt="tech"></img>}
              {this.state.items[this.state.currentItem].thirdImg && <img src={this.state.items[this.state.currentItem].thirdImg} alt="tech"></img>}
            </div>
          <button className="verticalArrow" onClick={this.goDown}>▼</button>
        </div>
      </Card> 
      <SocialMobile /> 
    </div>   
  );
  }
}
  
export default Home;
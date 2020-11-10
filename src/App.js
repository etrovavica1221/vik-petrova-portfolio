import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import NavBar from './Navbar.js';
import Home from './Home.js';
import Project from './Project.js';
import Social from './Social.js';
import Contact from './Contact.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Social />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/projects" render={() => <Project />} />
            <Route exact path="/contact" render={() => <Contact />}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
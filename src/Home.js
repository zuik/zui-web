import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Thoughts from './Thoughts';
// import GQL from './GQL';
import './Home.css';

class Home extends Component {
  render() {
    return (<Router>
      <div className="container">
          <Header />
          {/*<Route path="/about/" component={About} />
          <Route path="/projects/" component={Projects} />
          <Route path="/thoughts/" component={Thoughts} />*/}
          <div className="about-box"><About /></div>
          <div className="projects"><Projects /></div>
      </div>
      </Router>
    );
  }
}







export default Home;

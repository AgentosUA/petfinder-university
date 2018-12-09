import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/reset.css';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/web-fonts-with-css/css/fontawesome-all.min.css';
// Pages:

import Home from './pages/Home.js';
import AboutPage from './pages/About.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={AboutPage}/>
          
        </div>
      </Router>
    );
  }
}

export default App;

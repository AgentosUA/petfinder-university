import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/reset.css';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/web-fonts-with-css/css/fontawesome-all.min.css';
// Pages:

import Home from './pages/Home.js';
import AboutPage from './pages/About.js';
import LoginPage from './pages/Login.js';
import ProfilePage from './pages/Profile.js';
import AdvertPage from './pages/Advert.js';
import SearchPage from './pages/Search.js';
import TestPage from './pages/Test.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/advert" component={AdvertPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/test" component={TestPage} />
        </div>
      </Router>
    );
  }
}

export default App;
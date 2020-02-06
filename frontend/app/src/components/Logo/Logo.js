import React, { Component } from 'react';
import logo from '../../images/logo.png';

import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          <h1>Pet Finder</h1>
        </Link>
      </div>
    );
  }
}

export default Footer;

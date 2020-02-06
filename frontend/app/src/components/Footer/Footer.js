import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import Logo from '../../images/logo.png';
import githubIcon from '../../images/icons/git-footer.png';
import facebookIcon from '../../images/icons/facebook-footer.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="wrapper">
          <section className="footer-content">
            <div className="copyright">
              <NavLink to="/">
                <img src={Logo} alt="logo" />
              </NavLink>
              <h3>
                <NavLink to="/">Pet Finder</NavLink>
              </h3>
              <br />
              <span>© 2019 Pet Finder Project</span>
            </div>
            <div className="social-icons">
              <a href="http://github.com/AgentosUA/petfinder">
                <img src={githubIcon} alt="" />
              </a>
              <a href="http://facebook.com/">
                <img src={facebookIcon} alt="" />
              </a>
            </div>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;

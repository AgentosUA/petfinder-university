import React from 'react';

import Logo from '../Logo/Logo';
import Wrapper from '../Wrapper/Wrapper';

import githubIcon from '../../../images/icons/git-footer.png';
import facebookIcon from '../../../images/icons/facebook-footer.png';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <Wrapper>
        <Logo />
        <div className="footer__social-icons">
          <a href="http://github.com/AgentosUA/petfinder">
            <img src={githubIcon} alt="github-icon" />
          </a>
          <a href="http://facebook.com/">
            <img src={facebookIcon} alt="facebook-icon" />
          </a>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;

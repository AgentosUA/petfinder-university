import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="footer-info">
                                    <ul>
                                        <li>info@petfinder.com.ua</li>
                                        <li>+38 050 72 49 612</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="copyright">
                                    <Link to="index.html"><img src="img/logo-footer.png" alt="logo-footer"/></Link><br/>
                                <span>© 2018 Pet Finder Project</span>
                                </div>
                            </div>
                            <div className="col-md4">
                                <div className="social-icon">
                                    <Link to="#"><div className="social-icon-github"></div></Link>
                                    <Link to="#"><div className="social-icon-facebook"></div></Link>
                                    <Link to="#"><div className="social-icon-mail"></div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;
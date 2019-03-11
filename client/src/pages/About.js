import React, { Component } from 'react';
import Header from '../components/Header.js';
import About from '../components/About.js';
import Footer from '../components/Footer.js';
import './style.css';

class AboutPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Footer />
             </div>        
        );
    }
}

export default AboutPage;
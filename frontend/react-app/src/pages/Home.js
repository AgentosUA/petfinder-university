import React, { Component } from 'react';
import Header from '../components/Header.js';
import Home from '../components/Home.js';
import Footer from '../components/Footer.js';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
                <Footer />
            </div>
            // <Container />
        );
    }
}

export default HomePage;
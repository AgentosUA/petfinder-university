import React, { Component } from 'react';
import Header from '../components/Header.js';
import Advert from '../components/Advert.js';
import Footer from '../components/Footer.js';
import './style.css';

class AdvertPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Advert />
                <Footer />
             </div>        
        );
    }
}

export default AdvertPage;
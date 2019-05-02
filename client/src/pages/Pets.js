import React, { Component } from 'react';
import Header from '../components/Header.js';
import Pets from '../components/Pets.js';
import Footer from '../components/Footer.js';
import './style.css';

class PetsPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Pets />
                <Footer />
             </div>        
        );
    }
}

export default PetsPage;
import React, { Component } from 'react';
import Header from '../components/Header.js';
import Search from '../components/Search.js';
import Footer from '../components/Footer.js';
import './style.css';

class SearchPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
                <Footer />
             </div>        
        );
    }
}

export default SearchPage;
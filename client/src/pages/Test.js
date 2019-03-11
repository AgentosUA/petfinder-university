import React, { Component } from 'react';
import Header from '../components/Header.js';
import Test from '../components/Test.js';
import Footer from '../components/Footer.js';

class TestPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Test />
                <Footer />
            </div>
        );
    }
}

export default TestPage;
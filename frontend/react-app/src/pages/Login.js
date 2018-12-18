import React, { Component } from 'react';
import Header from '../components/Header.js';
import Login from '../components/Login.js';
import Footer from '../components/Footer.js';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Login />
                <Footer />
            </div>
            // <Container />
        );
    }
}

export default LoginPage;
import React, { Component } from 'react';
import Header from '../components/Header.js';
import Profile from '../components/Profile.js';
import Footer from '../components/Footer.js';

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Profile />
                <Footer />
            </div>
            // <Container />
        );
    }
}

export default ProfilePage;
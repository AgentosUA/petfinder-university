import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Logo.scss';

export const Logo: React.FC = () => {
    return <div className="header-logo">
        <Link to="/" ><img src={logo} alt="logo" /></Link>
    </div>
}

    
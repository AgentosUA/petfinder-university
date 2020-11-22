import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';

export const Navigation: React.FC = () => {
    return <div className="navigation">
        <Link to="/">Головна</Link>
        <Link to="/lost">Зниклі</Link>
        <Link to="/founded">Знайдені</Link>
        <Link to="/about">Про нас</Link>
    </div>
}


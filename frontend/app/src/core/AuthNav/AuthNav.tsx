import React from 'react';
import { Link } from 'react-router-dom';

import './AuthNav.scss';

export const AuthNav: React.FC = () => {
    return <div className="auth-nav">
        <Link to="/login">Увійти</Link>
        <Link to="/signup">Реєстрація</Link>
    </div>
}


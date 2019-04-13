import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-12">
                            <Link to="/" className="logo"><img src="img/logo.png" alt="Логотип"/></Link>
                        </div>
                        <div className="col-md-6 col-12 relative">
                            <div className="topnav" id="myTopnav">
                                <Link to="/">Головна</Link>
                                <Link to="/search">Зниклі</Link>
                                <Link to="/search">Знайдені</Link>
                                <Link to="/about">Про нас</Link>
                                <Link to="" className="icon" onClick="myFunction()">
                                <i className="fas fa-align-justify"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="menu-user">
                                <Link to="profile"><img className="avatar" src="/img/ava.jpg" alt="avatar" /></Link>
                                <Link to="/pets/my"><img src="/img/icons/animals-icon.png" alt="" /></Link>
                                <Link to="logout"><img src="/img/icons/exit-icon.png" alt="" /></Link>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Шукаємо зниклого улюбленця?</h1>
                            <div className="header-input">
                                <form action="" type="search-input">
                                    <input type="text" placeholder="Пошук" className="searchInput"/>
                                    <i className="fas fa-search"></i>
                                </form>
                                <Link to="#">Придбати нашийник</Link>
                                <Link to="/advert">Подати оголошення</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
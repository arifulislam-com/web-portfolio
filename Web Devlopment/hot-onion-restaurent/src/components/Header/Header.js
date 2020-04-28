import React from 'react';
import logo from '../../images/logo2.png';
import banner from '../../images/bannerbackground.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="banner">
            <img src={banner} alt=""/>
            <nav>
                <a href="/breakfast">Breakfast</a>
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>
            </nav>
            </div>
        </div>
    );
};

export default Header;
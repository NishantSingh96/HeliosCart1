import React from 'react';

// import css
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">Helioscart</div>
            <div className="header-navigation-container">
                <a href="#" className="header-navigation">Notification</a>
                <a href="#" className="header-navigation last">Profile</a>
            </div>
        </div>
    )
}

export default Header;
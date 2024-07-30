import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav_bar_wrapper">
            <div className="nav_bar">
                <div className="logo"><Link to="/">ProgressAI</Link></div>
                <ul className="nav_links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                </ul>
                <div className="menu_buttons">
                    <Link to="/sign-in">Sign In</Link>
                    <button className="btn signup_btn" onClick={() => window.location.href='/sign-up'}>Try For Free</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

import React from 'react';
import Link from 'next/link';
import '../styles/style.css'; // added this 

const NavBar = () => {
    return (
        <nav className="nav_bar_wrapper">
            <div className="nav_bar">
                <div className="logo">
                    <Link href="/">ProgressAI</Link>
                </div>
                <ul className="nav_links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                </ul>
                <div className="menu_buttons">
                    <Link href="/sign-in">Sign In</Link>
                    <button className="btn signup_btn" onClick={() => window.location.href='/sign-up'}>Try For Free</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

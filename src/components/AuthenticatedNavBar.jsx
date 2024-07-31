import React from 'react';
import Link from 'next/link';
import '../styles/AuthenticatedNavBar.css';

const AuthenticatedNavBar = () => (
    <nav className="nav_bar_wrapper">
        <div className="nav_bar">
            <div className="logo">
                ProgressAI
            </div>
            <ul className="nav_links">
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/workout">Workout</Link></li>
                <li><Link href="/program">Program</Link></li>
                <li><Link href="/profile">Profile</Link></li>
            </ul>
            <div className="menu_buttons">
                <button>Sign Out</button>
            </div>
        </div>
    </nav>
);

export default AuthenticatedNavBar;

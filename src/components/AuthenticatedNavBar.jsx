// src/components/AuthenticatedNavBar.jsx
import React from 'react';
import Link from 'next/link';
import '../styles/AuthenticatedNavBar.css';

const AuthenticatedNavBar = () => (
    <nav className="authenticated_nav_bar_wrapper">
        <div className="authenticated_nav_bar">
            <div className="authenticated_logo">
                ProgressAI
            </div>
            <ul className="authenticated_nav_links">
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/workout">Workout</Link></li>
                <li><Link href="/program">Program</Link></li>
                <li><Link href="/profile">Profile</Link></li>
            </ul>
            <div className="authenticated_menu_buttons">
                <button>Sign Out</button>
            </div>
        </div>
    </nav>
);

export default AuthenticatedNavBar;

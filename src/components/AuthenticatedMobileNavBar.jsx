// src/components/AuthenticatedMobileNavBar.jsx
import React from 'react';
import Link from 'next/link';
import '../styles/AuthenticatedMobileNavBar.css';

const AuthenticatedMobileNavBar = () => (
    <nav className="authenticated_mobile_nav">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/workout">Workout</Link>
        <Link href="/program">Program</Link>
        <Link href="/profile">Profile</Link>
    </nav>
);

export default AuthenticatedMobileNavBar;

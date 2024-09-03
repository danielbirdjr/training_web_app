import React from 'react';
import Link from 'next/link';
import '../styles/AuthenticatedDesktopNavBar.css'; // Import the new styles

const AuthenticatedDesktopNavBar = ({ isSidebarOpen, toggleSidebar }) => (
  <div className={`desktop-sidebar ${isSidebarOpen ? 'open' : ''}`}>
    <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
      ☰
    </button>
    <ul className="nav_links">
      <li><Link href="/dashboard">Dashboard</Link></li>
      <li><Link href="/workout">Workout</Link></li>
      <li><Link href="/program">Program</Link></li>
      <li><Link href="/profile">Profile</Link></li>
    </ul>
  </div>
);

export default AuthenticatedDesktopNavBar;

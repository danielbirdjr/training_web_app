import React from 'react';
import { FiMenu, FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';
import '../styles/sidebar.css';

const Sidebar = ({ isExpanded, toggleSidebar }) => {
    return (
        <>
            <div className='hamburger-menu-container'>
                <button className="hamburger-btn" onClick={toggleSidebar}>
                    {isExpanded ? <FiChevronLeft /> : <FiMenu />}
                </button>
            </div>

    
            <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
                {isExpanded && (
                    <ul className="nav-links">
                        <li><Link href="/dashboard">Dashboard</Link></li>
                        <li><Link href="/workout">Workout</Link></li>
                        <li><Link href="/program">Program</Link></li>
                        <li><Link href="/profile">Profile</Link></li>
                    </ul>
                )}
            </div>
        </>
    );
};

export default Sidebar;

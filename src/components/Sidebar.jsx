import React, { useState } from 'react';
import { FiMenu, FiChevronLeft } from 'react-icons/fi';
import '../styles/sidebar.css';

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
          <button className="hamburger-btn" onClick={toggleSidebar}>
            {isExpanded ? <FiChevronLeft /> : <FiMenu />}
          </button>
    
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

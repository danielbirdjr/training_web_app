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
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/workout">Workout</a></li>
                <li><a href="/program">Program</a></li>
                <li><a href="/profile">Profile</a></li>
              </ul>
            )}
          </div>
        </>
      );
};

export default Sidebar;

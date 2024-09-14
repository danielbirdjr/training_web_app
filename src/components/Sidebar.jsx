import React from 'react';
import { FiMenu, FiChevronLeft, FiCheckSquare, FiFolderPlus } from 'react-icons/fi';
import { GrHomeRounded } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import { FiUser } from "react-icons/fi";


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
                        <li><Link href="/dashboard"> <GrHomeRounded className='sidebar-icon' /> Dashboard</Link></li>
                        <li><Link href="/workout"> <FiCheckSquare className='sidebar-icon' /> Workout</Link></li>
                        <li><Link href="/program"> <FiFolderPlus className='sidebar-icon' /> Program</Link></li>
                        <li><Link href="/profile"> <FiUser className='sidebar-icon' /> Profile</Link></li>
                        <li><Link href="/"> <FiLogOut className='sidebar-icon' /> Sign out</Link></li>
                    </ul>
                )}
            </div>
        </>
    );
};

export default Sidebar;

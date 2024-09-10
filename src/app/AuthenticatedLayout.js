"use client";

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useRouter } from 'next/router';

const AuthenticatedLayout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true); // Track sidebar state
    const router = useRouter();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isFullWidthPage = router.pathname === '/program/custom'; // Adjust for full-width page

    return (
        <div className={`authenticated-layout ${isFullWidthPage ? 'full-width' : ''} ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
            {!isMobile && <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)} />}
            <div className="main-wrapper">
                <main className="main-content">{children}</main>
            </div>
        </div>
    );
};

export default AuthenticatedLayout;

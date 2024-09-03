"use client";

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';

const AuthenticatedLayout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

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

    return (
        <div className="authenticated-layout">
            {!isMobile && <Sidebar />} {/* Show Sidebar only on desktop */}
            <div className="main-wrapper">
                <main className="main-content">{children}</main>
            </div>
        </div>
    );
};

export default AuthenticatedLayout;

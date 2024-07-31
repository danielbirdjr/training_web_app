// src/app/AuthenticatedLayout.js
"use client";

import React, { useEffect, useState } from 'react';
import AuthenticatedNavBar from '../components/AuthenticatedNavBar';
import AuthenticatedMobileNavBar from '../components/AuthenticatedMobileNavBar';

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
    <>
      {isMobile ? <AuthenticatedMobileNavBar /> : <AuthenticatedNavBar />}
      <main>{children}</main>
    </>
  );
};

export default AuthenticatedLayout;

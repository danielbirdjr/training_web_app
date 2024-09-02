"use client";

import React from 'react';
import NavBar from '../components/PublicNavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;

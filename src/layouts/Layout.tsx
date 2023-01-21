import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <div className="App max-w-screen-xl mx-auto px-11 md:px-3">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;

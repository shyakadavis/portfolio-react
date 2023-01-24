import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="App max-w-screen-xl mx-auto px-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

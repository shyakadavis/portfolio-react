import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/admin/SideBar';

const AdminLayout = () => {
  return (
    <div className="App max-w-screen-xl mx-auto px-11 md:px-3">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;

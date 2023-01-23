import React from 'react';
import {
  MdAccountCircle,
  MdContactMail,
  MdDashboard,
  MdTableView,
} from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';

import { NavLink } from 'react-router-dom';
import Avatar from '../../assets/images/avatar.jpg';

interface RouteLinks {
  title: string;
  href: string;
  icon: JSX.Element;
}

const routes: RouteLinks[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <MdDashboard size={30} />,
  },
  {
    title: 'Blogs',
    href: '/content/blogs',
    icon: <MdTableView size={30} />,
  },
  {
    title: 'Users',
    href: '/users',
    icon: <MdAccountCircle size={30} />,
  },
  {
    title: 'Mail',
    href: '/mail',
    icon: <MdContactMail size={30} />,
  },
];

const Sidebar = () => {
  let activeStyle = {
    textDecoration: 'underline',
    color: '#a8eb12',
  };

  return (
    <div className="min-h-screen bg-primary fixed top-0 left-0 ">
      <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-primary hover:shadow-lg">
        <div className="flex h-screen flex-col justify-between pt-2 pb-6">
          <div>
            <div className="w-max p-2.5">
              <img
                src={Avatar}
                className="w-11 h-11 object-cover rounded-full"
                alt=""
              />
            </div>

            <div className="mt-6 space-y-2 tracking-wide">
              <div className="min-w-max">
                {routes.map((link, index) => (
                  <NavLink
                    key={crypto.randomUUID()}
                    to={link.href}
                    className="relative flex items-center space-x-4 px-4 py-3 text-white"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    {link.icon}
                    <span
                      key={crypto.randomUUID()}
                      className="-mr-1 font-medium"
                    >
                      {link.title}
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          {/* log out */}
          <div className="mt-6 space-y-2 tracking-wide">
            <div className="min-w-max">
              <NavLink
                to="#"
                className="relative flex items-center space-x-4 px-4 py-3 text-white"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <CiLogout size={30} />
                <span className="-mr-1 font-medium">Log Out</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

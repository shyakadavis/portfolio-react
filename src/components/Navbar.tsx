import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/navbar.css';

interface RouteLinks {
  title: string;
  href: string;
}

const routes: RouteLinks[] = [
  {
    title: 'Home',
    href: '/home',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Blogs',
    href: '/blogs',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'Boiler',
    href: '/boiler',
  },
];

const Navbar = () => {
  let activeStyle = {
    textDecoration: 'underline',
    color: '#a8eb12',
  };

  let activeClassName = 'underline';

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <header id="globalHeader">
      <nav id="globalNav">
        <section className="menu text-sm md:text-xl">
          {routes.map((link, index) => (
            <NavLink
              key={index}
              to={link.href}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {link.title}
            </NavLink>
          ))}

          {isLoggedIn ? (
            <NavLink
              to="/logout"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Log Out
            </NavLink>
          ) : (
            <NavLink
              to="/auth"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Log In
            </NavLink>
          )}
        </section>
      </nav>
    </header>
  );
};

export default Navbar;

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
    href: '/',
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
    <header className="z-50 bg-white dark:bg-gray-900 md:rotate-90 fixed md:right-0 md:top-0">
      <nav className="absolute z-10 border-b border-gray-100 dark:border-gray-700">
        <div className="container mx-auto px-8 md:px-12 lg:px-6">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-2 md:gap-0 md:py-4">
            <input
              aria-hidden="true"
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="peer hidden"
            />
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <div className="relative flex max-h-10 items-center lg:hidden ">
                <label
                  role="button"
                  htmlFor="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  className="relative -mr-6 p-6"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 "
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                  ></div>
                </label>
              </div>
            </div>
            <label
              aria-hidden="true"
              htmlFor="toggle_nav"
              className="fixed inset-0 z-10 h-screen w-screen origin-top scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 peer-checked:scale-y-100 dark:bg-gray-900/70 lg:hidden"
            ></label>
            <div className="invisible absolute top-full left-0 z-[10000] w-screen origin-top translate-y-1 scale-95 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 peer-checked:visible peer-checked:scale-100 peer-checked:opacity-100 dark:border-gray-700 dark:bg-black dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:flex-nowrap lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0">
              <div className="sm:text-sm md:text-lg flex w-full flex-col gap-8 text-gray-600 dark:text-gray-300 lg:w-auto lg:flex-row lg:items-center lg:pr-4 lg:pt-0">
                {routes.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.href}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    {link.title}
                  </NavLink>
                ))}

                {isLoggedIn ? (
                  <NavLink
                    to="/logout"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Log Out
                  </NavLink>
                ) : (
                  <NavLink
                    to="/auth"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Login
                  </NavLink>
                )}
              </div>
              {/* theme switching */}
              {/* <div className="flex gap-6 mt-12 lg:mt-0">
                <button
                  aria-label="theme switching"
                  className="relative group flex max-w-[2.25rem] h-9 w-9 items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-white dark:before:bg-gray-800 dark:before:border-gray-700 before:border before:border-gray-300 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100"
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="relative w-5 h-5 text-yellow-500 hidden duration-300 dark:inline-block group-hover:rotate-180"
                  >
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="relative w-4 h-4 text-gray-600 duration-300 group-hover:-rotate-90 dark:hidden"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

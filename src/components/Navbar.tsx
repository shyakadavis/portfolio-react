import { Link, NavLink } from 'react-router-dom'
import '../assets/styles/navbar.css'

const Navbar = () => {
  let activeStyle = {
    textDecoration: 'underline',
    color: '#a8eb12'
  }

  let activeClassName = 'underline'
  return (
    <header id="globalHeader">
      <nav id="globalNav">
        <section className="menu">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
          <NavLink
            to="/blogs"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/projects"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/boiler"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Boiler
          </NavLink>
        </section>
      </nav>
    </header>
  )
}

export default Navbar

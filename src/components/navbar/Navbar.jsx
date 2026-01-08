import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/arambha.jpg"; 
const activeLink =
  "text-sm font-medium tracking-wide px-2 py-1 transition-colors";
const makeClass = ({ isActive }) =>
  isActive
    ? `${activeLink} text-red-600 border-b-2 border-red-600`
    : `${activeLink} text-sky-800 hover:text-red-600`;

function Navbar() {
  return (
    <header className="w-full relative z-50 bg-gray-100 border-b border-gray-300 ">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex  items-center gap-3 relative right-12 ">
            <img
              src={logo}
              alt="Arambha Logo"
              className="h-10 w-auto rounded-full"
            /> 
            <div className="leading-tight">
              <span className="block text-2xl font-semibold tracking-wide text-sky-700">
                ARAMBHA
              </span>
              <span className="block text-xs uppercase tracking-[0.2em] text-red-600">
                Group of Hospitality
              </span>
            </div>
          </NavLink>

          <ul className="hidden md:flex items-center gap-5">
            <li>
              <NavLink to="/" className={makeClass}>
                Home
              </NavLink>
            </li>
            
 <li>
              <NavLink to="/about" className={makeClass}>
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/service" className={makeClass}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/rooms" className={makeClass}>
                Rooms
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className={makeClass}>
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={makeClass}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className={makeClass}>
                Blogs
              </NavLink>
            </li>
           
            <li>
              <NavLink to="/contact" className={makeClass}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={makeClass}>
                FAQ
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-3 relative left-10 ">
            <NavLink
              to="/bookroom"
              className="hidden sm:inline-flex items-center rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-red-700 transition-colors"
            >
              Book Now 
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

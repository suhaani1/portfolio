import "./Navbar.css";

import { useState } from "react";

import { Link } from "react-scroll";

import {
  HiMenuAlt3,
  HiX
} from "react-icons/hi";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "home",
    "about",
    "experience",
    "skills",
    "projects",
    "contact"
  ];

  return (

    <header className="navbar">

      <div className="container nav-container">

        {/* Logo */}

        <div className="logo">

          <span>S</span>uhani

        </div>

        {/* Desktop Menu */}

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

          {navLinks.map((item, index)=>(

            <Link
              key={index}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active-link"
              onClick={()=>setMenuOpen(false)}
            >

              {item.charAt(0).toUpperCase()+item.slice(1)}

            </Link>

          ))}

        </nav>

        {/* Mobile Icon */}

        <div
          className="menu-toggle"
          onClick={()=>setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <HiX /> : <HiMenuAlt3 />}

        </div>

      </div>

    </header>
  );
};

export default Navbar;
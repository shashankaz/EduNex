import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <nav>
        <div id="container">
          <div id="logo">
            <Link to={"/"}>
              <h1>
                Edu<span>Nex</span>
              </h1>
            </Link>
          </div>
          <div id="links">
            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <ul>
                <li onClick={handleShowNavbar}>
                  <NavLink to={"/notes"}>Notes</NavLink>
                </li>
                <li onClick={handleShowNavbar}>
                  <NavLink to={"/pyq"}>PYQ</NavLink>
                </li>
                <li onClick={handleShowNavbar}>
                  <NavLink to={"/resources"}>Resources</NavLink>
                </li>
                <li onClick={handleShowNavbar}>
                  <NavLink to={"/updates"}>Exam Updates</NavLink>
                </li>
                <li onClick={handleShowNavbar}>
                  <NavLink to={"/contact"}>Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <RxHamburgerMenu />
          </div>
        </div>
      </nav>

      {/* <nav id="navbar">
        <div id="logo">
          <Link to={"/"}>
            <h1>
              Edu<span>Nex</span>
            </h1>
          </Link>
        </div>
        <div id="links">
          <ul>
            <li>
              <NavLink to={"/notes"}>Notes</NavLink>
            </li>
            <li>
              <NavLink to={"/pyq"}>PYQ</NavLink>
            </li>
            <li>
              <NavLink to={"/resources"}>Resources</NavLink>
            </li>
            <li>
              <NavLink to={"/updates"}>Exam Updates</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div id="bar">
          <RxHamburgerMenu />
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;

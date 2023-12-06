import React from "react";
import "./navbar.css";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

function Navbar({ hideLogo, toggleDrawer, isScrolledDown }) {
  return (
    <div className={`navbar${isScrolledDown ? " navbar--scrolled" : ""}`}>
      <div className="navbar__left">
        <CSSTransition
          mountOnEnter
          in={!hideLogo}
          timeout={750}
          classNames="fade-in-logo"
        >
          <Link to="/" className="navbar__logo">
            Ryan Villanueva
          </Link>
        </CSSTransition>
      </div>
      <div className="navbar__right">
        <div className="navbar__links">
          <Link className="navbar__link" to="/about">
            About
          </Link>
          <a
            className="navbar__link"
            href="https://medium.com/@ryanjvillanueva"
          >
            Blog
          </a>
          <Link className="navbar__link" to="/contact">
            Contact
          </Link>
        </div>
        <div className="navbar__drawer-toggle" onClick={toggleDrawer}>
          <FaBars />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

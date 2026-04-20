import React, { useRef } from "react";
import "./navbar.css";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

function Navbar({ hideLogo, toggleDrawer, isScrolledDown }) {
  const logoRef = useRef(null);
  return (
    <div className={`navbar${isScrolledDown ? " navbar--scrolled" : ""}`}>
      <div className="navbar__left">
        <CSSTransition
          mountOnEnter
          in={!hideLogo}
          timeout={750}
          classNames="fade-in-logo"
          nodeRef={logoRef}
        >
          <Link ref={logoRef} to="/" className="navbar__logo">
            Ryan Villanueva
          </Link>
        </CSSTransition>
      </div>
      <div className="navbar__right">
        <div className="navbar__links">
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

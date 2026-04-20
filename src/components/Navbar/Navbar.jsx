import React from "react";
import "./navbar.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

function Navbar({ hideLogo, toggleDrawer, isScrolledDown }) {
  return (
    <div className={`navbar${isScrolledDown ? " navbar--scrolled" : ""}`}>
      <div className="navbar__left">
        <AnimatePresence>
          {!hideLogo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <Link to="/" className="navbar__logo">
                Ryan Villanueva
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
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

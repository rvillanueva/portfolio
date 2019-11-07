import React from 'react';
import './navbar.css';
import {CSSTransition} from 'react-transition-group';
import {Link} from 'react-router-dom';

function Navbar({hideLogo}) {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <CSSTransition
          mountOnEnter
          in={!hideLogo}
          timeout={750}
          classNames="fade-in-logo">
          <Link to="/" className="navbar__logo">Ryan Villanueva</Link>
        </CSSTransition>
      </div>
      <div className="navbar__right">
        <a className="navbar__link" href="https://medium.com/@ryanjvillanueva">Blog</a>
        <a className="navbar__link" href="https://github.com/rvillanueva">Github</a>
        <a className="navbar__link" href="https://www.linkedin.com/in/ryanjvillanueva/">LinkedIn</a>
      </div>
    </div>
  );
}

export default Navbar;
